import { useEffect, useState } from "react";

const TOTAL_SEATS = 500;

type Listener = (delta: number) => void;
const listeners = new Set<Listener>();

export function bumpSeats(delta = 1) {
  listeners.forEach((l) => l(delta));
}

export default function SeatsBar() {
  const [percent, setPercent] = useState(72);

  useEffect(() => {
    const onBump: Listener = (delta) => {
      setPercent((p) => Math.min(99, p + delta));
    };
    listeners.add(onBump);

    let timeout: number;
    const tick = () => {
      setPercent((p) => Math.min(99, p + 1));
      timeout = window.setTimeout(tick, 20000 + Math.random() * 20000);
    };
    timeout = window.setTimeout(tick, 20000 + Math.random() * 20000);

    return () => {
      listeners.delete(onBump);
      window.clearTimeout(timeout);
    };
  }, []);

  const color =
    percent >= 95 ? "#DC2626" : percent >= 85 ? "#F59E0B" : "#22C55E";
  const remaining = Math.max(1, Math.round(TOTAL_SEATS * (1 - percent / 100)));

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(6px)",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 -1px 8px rgba(0,0,0,0.06)",
      }}
      role="status"
      aria-live="polite"
    >
      <div
        style={{
          fontSize: 11.5,
          fontWeight: 600,
          color: "#3D2A2F",
          textAlign: "center",
          padding: "5px 12px",
          letterSpacing: 0.3,
        }}
      >
        <span style={{ color }}>●</span>{" "}
        {percent}% das vagas já foram preenchidas · Apenas {remaining} vagas restantes
      </div>
      <div
        style={{
          height: 7,
          width: "100%",
          background: "rgba(0,0,0,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${percent}%`,
            background: color,
            transition: "width 1.2s ease, background-color 0.6s ease",
          }}
        />
      </div>
    </div>
  );
}
