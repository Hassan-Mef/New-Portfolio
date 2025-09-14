
import { useMemo, useState } from "react";
import { STACKS, STACK_ORDER } from "../data/stacks";
import CircuitCanvas from "../components/CircuitCanvas";
import Chip from "../components/Chip";
import StackSelector from "../components/StackSelector";

export default function TechStackSection() {
  const [active, setActive] = useState("web");

  const options = useMemo(
    () => STACK_ORDER.map((key) => ({ key, label: STACKS[key].label })),
    []
  );

  const { nodes, connections, label } = STACKS[active];

  // ----------------------------
  // Option B: Position scaling for mobile overlaps
  // ----------------------------
  const scaledNodes = useMemo(() => {
    return Object.fromEntries(
      Object.entries(nodes).map(([id, n]) => {
        let x = n.x;
        let y = n.y;

        if (typeof window !== "undefined" && window.innerWidth < 768) {
          // Only adjust web stack on small screens
          if (active === "web") {
            if (id === "node") x -= 4;       // Node.js slightly left
            if (id === "express") x += 4;    // Express.js slightly right
          }
        }

        return [id, { ...n, x, y }];
      })
    );
  }, [nodes, active]);

  return (
    <section className="relative w-full min-h-[90vh] bg-black text-white overflow-hidden">
      {/* Title */}
      <h2 className="relative z-20 text-center pt-8 text-3xl md:text-4xl font-bold text-purple-400/90">
        Tech Stacks — {label}
      </h2>

      {/* Container holding SVG and nodes */}
      <div className="relative w-full h-[82vh] mt-6 flex items-center justify-center">
        <div className="relative w-full h-full max-w-none">
          {/* Curved connections (wires) */}
          <CircuitCanvas nodes={scaledNodes} connections={connections} curveOffset={-40} />

          {/* Nodes (Chips) */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {Object.entries(scaledNodes).map(([id, n], i) => (
              <Chip
                key={id}
                id={id}
                x={n.x}
                y={n.y}
                label={n.label}
                icon={n.icon}
                className={n.class}
                delay={i * 0.08}
                size={80} // Desktop size; Chip.jsx shrinks for mobile
              />
            ))}
          </div>

          {/* Radial selector (fixed left side, unchanged) */}
          <StackSelector options={options} activeKey={active} onChange={setActive} />
        </div>
      </div>
    </section>
  );
}
