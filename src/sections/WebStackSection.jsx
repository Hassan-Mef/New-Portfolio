import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

/* layout data */
const NODES = {
  react: { x: 34, y: 28, label: "React", Icon: SiReact, iconClass: "text-cyan-400" },
  js: { x: 66, y: 28, label: "JavaScript", Icon: SiJavascript, iconClass: "text-yellow-400" },
  node: { x: 50, y: 50, label: "Node.js", Icon: SiNodedotjs, iconClass: "text-green-400" },
  express: { x: 58, y: 54, label: "Express", Icon: SiExpress, iconClass: "text-gray-200" },
  mongo: { x: 42, y: 72, label: "MongoDB", Icon: SiMongodb, iconClass: "text-green-500" },
  postgres: { x: 66, y: 70, label: "PostgreSQL", Icon: SiPostgresql, iconClass: "text-sky-400" },
};

const CONNECTIONS = [
  { from: "react", to: "node" },
  { from: "js", to: "node" },
  { from: "node", to: "express" },
  { from: "express", to: "mongo" },
  { from: "express", to: "postgres" },
];

function Chip({ id, x, y, label, Icon, iconClass, delay = 0 }) {
  return (
    <motion.div
      data-node={id} // wrapper (kept if you need it)
      className="absolute z-10 flex flex-col items-center select-none"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0.6, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 120 }}
    >
      {/* IMPORTANT: core element has its own data attribute for precise center calculation */}
      <div
        data-node-core={id}
        className="w-20 h-20 rounded-full bg-black border border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.9)] grid place-items-center"
      >
        <Icon className={`${iconClass} text-4xl`} />
      </div>

      <span className="mt-2 text-purple-200 text-sm font-semibold drop-shadow">{label}</span>
    </motion.div>
  );
}

export default function WebStackCircuit() {
  const svgRef = useRef(null);

  useEffect(() => {
    const draw = () => {
      const svgEl = svgRef.current;
      if (!svgEl) return;

      // clear previous connection paths
      const existing = svgEl.querySelectorAll("path.connection");
      existing.forEach((n) => n.remove());

      const svgRect = svgEl.getBoundingClientRect();

      // get precise center of the visual core (data-node-core)
      const getCenter = (id) => {
        const core = document.querySelector(`[data-node-core="${id}"]`);
        if (!core) return null;
        const r = core.getBoundingClientRect();
        // center relative to SVG top-left
        const cx = Math.round(r.left + r.width / 2 - svgRect.left);
        const cy = Math.round(r.top + r.height / 2 - svgRect.top);
        return { x: cx, y: cy };
      };

      CONNECTIONS.forEach((c) => {
        const A = getCenter(c.from);
        const B = getCenter(c.to);
        if (!A || !B) return;

        // dynamic control for a nice arc
        const mx = (A.x + B.x) / 2;
        const my = (A.y + B.y) / 2;
        const dx = Math.abs(B.x - A.x);
        const dy = Math.abs(B.y - A.y);
        const perp = Math.min(140, (dx + dy) * 0.12 + 18);
        const controlY = my - perp;

        const d = `M ${A.x},${A.y} Q ${mx},${controlY} ${B.x},${B.y}`;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.classList.add("connection");
        path.setAttribute("d", d);
        path.setAttribute("stroke", "url(#wire)");
        path.setAttribute("stroke-width", "3");
        path.setAttribute("fill", "none");
        path.setAttribute("filter", "url(#glow)");
        svgEl.appendChild(path);
      });
    };

    // draw after layout
    const raf = requestAnimationFrame(draw);

    // redraw on resize (keeps alignment accurate)
    const onResize = () => requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="relative w-full h-[90vh] bg-black text-white overflow-hidden">
      {/* background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px),linear-gradient(rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* SVG for wires */}
      <svg ref={svgRef} className="absolute inset-0 w-full h-full z-0">
        <defs>
          <linearGradient id="wire" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* nodes */}
      {Object.entries(NODES).map(([id, node], i) => (
        <Chip key={id} id={id} {...node} delay={i * 0.12} />
      ))}

      <motion.h2
        className="absolute left-1/2 -translate-x-1/2 top-6 text-3xl md:text-4xl font-bold text-purple-400/90"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Web Stack — Circuit View
      </motion.h2>
    </section>
  );
}
