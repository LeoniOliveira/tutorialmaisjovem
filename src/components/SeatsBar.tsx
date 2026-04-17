import { useEffect, useRef, useState } from "react";

const TOTAL_SEATS = 500;
const MAX_PERCENT = 99.9;

type Listener = (delta: number) => void;
const listeners = new Set<Listener>();

export function bumpSeats(delta = 1) {
  listeners.forEach((l) => l(delta));
}

export default function SeatsBar() {
  // target = where we want to animate to; displayed = currently shown (animated)
  const [target, setTarget] = useState(83);
  const [displayed, setDisplayed] = useState(83);
  const targetRef = useRef(83);

  // Animate displayed -> target smoothly using rAF
  useEffect(() => {
    let raf: number;
    const step = () => {
      setDisplayed((current) => {
        const diff = targetRef.current - current;
        if (Math.abs(diff) < 0.01) return targetRef.current;
        // ease towards target (~1.5s to close gap)
        return current + diff * 0.04;
      });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    targetRef.current = target;
  }, [target]);

  useEffect(() => {
    const onBump: Listener = (delta) => {
      // smaller, decimal bumps for realism
      const bump = delta * (0.2 + Math.random() * 0.4);
      setTarget((p) => Math.min(MAX_PERCENT, +(p + bump).toFixed(2)));
    };
    listeners.add(onBump);

    let timeout: number;
    const tick = () => {
      // small decimal increments: 0.1 - 0.4
      const inc = 0.1 + Math.random() * 0.3;
      setTarget((p) => Math.min(MAX_PERCENT, +(p + inc).toFixed(2)));
      timeout = window.setTimeout(tick, 6000 + Math.random() * 9000);
    };
    timeout = window.setTimeout(tick, 6000 + Math.random() * 9000);

    return () => {
      listeners.delete(onBump);
      window.clearTimeout(timeout);
    };
  }, []);

  const shown = Math.min(MAX_PERCENT, displayed);
  const color =
    shown >= 95 ? "#DC2626" : shown >= 85 ? "#F59E0B" : "#22C55E";
  const remaining = Math.max(1, Math.ceil(TOTAL_SEATS * (1 - shown / 100)));

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
        {shown.toFixed(1)}% das vagas já foram preenchidas · Apenas {remaining} vagas restantes
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
            width: `${shown}%`,
            background: color,
            transition: "background-color 0.6s ease",
          }}
        />
      </div>
    </div>
  );
}
