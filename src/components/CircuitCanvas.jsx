// src/components/CircuitCanvas.jsx
import { useEffect, useRef } from "react";

/**
 * CircuitCanvas draws curved SVG paths between the *visual centers*
 * of elements that expose data-node-core="{id}".
 *
 * Props:
 *  - nodes: object keyed by id (only used for looping; actual endpoints
 *           are derived from DOM centers to guarantee alignment)
 *  - connections: [{ from, to, bend? }]
 *  - curveOffset: default control offset if connection.bend missing
 */
export default function CircuitCanvas({ nodes = {}, connections = [], curveOffset = -40 }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const draw = () => {
      // clear everything (preserve defs only)
      while (svgEl.firstChild) svgEl.removeChild(svgEl.firstChild);

      const svgRect = svgEl.getBoundingClientRect();

      // defs: gradient + glow
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

      const grad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
      grad.setAttribute("id", "wire");
      grad.setAttribute("x1", "0");
      grad.setAttribute("y1", "0");
      grad.setAttribute("x2", "1");
      grad.setAttribute("y2", "1");

      const stopA = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stopA.setAttribute("offset", "0%");
      stopA.setAttribute("stop-color", "#a855f7");
      const stopB = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stopB.setAttribute("offset", "100%");
      stopB.setAttribute("stop-color", "#7c3aed");

      grad.appendChild(stopA);
      grad.appendChild(stopB);

      const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
      filter.setAttribute("id", "glow");
      filter.setAttribute("x", "-50%");
      filter.setAttribute("y", "-50%");
      filter.setAttribute("width", "200%");
      filter.setAttribute("height", "200%");

      const blur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
      blur.setAttribute("stdDeviation", "3.5");
      blur.setAttribute("result", "blur");

      const merge = document.createElementNS("http://www.w3.org/2000/svg", "feMerge");
      const mn1 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
      mn1.setAttribute("in", "blur");
      const mn2 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
      mn2.setAttribute("in", "SourceGraphic");
      merge.appendChild(mn1);
      merge.appendChild(mn2);

      filter.appendChild(blur);
      filter.appendChild(merge);

      defs.appendChild(grad);
      defs.appendChild(filter);
      svgEl.appendChild(defs);

      // helper: compute center of the visible "core" element
      const getCenter = (id) => {
        const core = document.querySelector(`[data-node-core="${id}"]`);
        if (!core) return null;
        const r = core.getBoundingClientRect();
        return {
          x: Math.round(r.left + r.width / 2 - svgRect.left),
          y: Math.round(r.top + r.height / 2 - svgRect.top),
        };
      };

      // draw each connection as a quadratic curve
      connections.forEach((c) => {
        const A = getCenter(c.from);
        const B = getCenter(c.to);
        if (!A || !B) return;

        const mx = (A.x + B.x) / 2;
        const my = (A.y + B.y) / 2;
        const dx = Math.abs(B.x - A.x);
        const dy = Math.abs(B.y - A.y);
        const perp = Math.min(140, (dx + dy) * 0.12 + 18);
        // allow per-connection bend override
        const bend = typeof c.bend === "number" ? c.bend : curveOffset;
        const controlY = my + bend - perp * 0.05; // tweak for natural arcs

        const d = `M ${A.x},${A.y} Q ${mx},${controlY} ${B.x},${B.y}`;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        path.setAttribute("class", "connection");
        path.setAttribute("stroke", "url(#wire)");
        path.setAttribute("stroke-width", "3");
        path.setAttribute("fill", "none");
        path.setAttribute("filter", "url(#glow)");
        // do not block pointer events so user interactions remain with buttons/nodes
        path.setAttribute("pointer-events", "none");

        svgEl.appendChild(path);
      });
    };

    // Draw after layout stable
    const raf = requestAnimationFrame(draw);

    // Redraw on resize
    const onResize = () => requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [nodes, connections, curveOffset]);

  // SVG must not intercept pointer events (so selector and nodes stay clickable)
  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
