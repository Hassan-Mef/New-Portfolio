
export default function BackgroundGrid({ intensity = "default" }) {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      {/* Radial glow (fainter or stronger depending on intensity) */}
      <div
        className={`absolute inset-0 ${
          intensity === "strong"
            ? "bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)]"
        }`}
      />
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  );
}
