// src/sections/TechStackSection.jsx
import { useMemo, useState } from "react";
import { STACKS, STACK_ORDER } from "../data/stacks";
import CircuitCanvas from "../components/CircuitCanvas";
import Chip from "../components/Chip";
import RadialStackSelector from "../components/RadialStackSelector";

export default function TechStackSection() {
  const [active, setActive] = useState("web");

  const options = useMemo(
    () => STACK_ORDER.map((key) => ({ key, label: STACKS[key].label })),
    []
  );

  const { nodes, connections, label } = STACKS[active];

  return (
    <section className="relative w-full min-h-[90vh] bg-black text-white overflow-hidden">
      {/* Glow grid background (behind everything) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px),linear-gradient(rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Title */}
      <h2 className="relative z-20 text-center pt-8 text-3xl md:text-4xl font-bold text-purple-400/90">
        Tech Stacks — {label}
      </h2>

      {/* Container that holds both the SVG and nodes so coordinates match */}
      <div className="relative w-full h-[82vh] mt-6">
        {/* wires (SVG) */}
        <CircuitCanvas nodes={nodes} connections={connections} curveOffset={-40} />

        {/* Nodes — placed absolutely within same container (so centers align) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {Object.entries(nodes).map(([id, n], i) => (
            // Chip must accept id prop for data-node-core
            <Chip
              key={id}
              id={id}
              x={n.x}
              y={n.y}
              label={n.label}
              icon={n.icon}
              className={n.class}
              delay={i * 0.08}
            />
          ))}
        </div>

        {/* Radial selector on left (z-30) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
          <RadialStackSelector options={options} activeKey={active} onChange={setActive} />
        </div>
      </div>
    </section>
  );
}
