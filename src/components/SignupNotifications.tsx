import { useEffect, useState } from "react";
import { bumpSeats } from "./SeatsBar";

const NAMES = [
  "Fernanda","Juliana","Carla","Patrícia","Mônica","Renata","Andréa","Simone",
  "Cláudia","Alessandra","Mariana","Luciana","Cristiane","Vanessa","Rosângela",
  "Débora","Fabiana","Tatiana","Sônia","Adriana","Viviane","Denise","Sandra",
  "Cintia","Elaine","Priscila","Jéssica","Camila","Letícia","Amanda","Bruna",
  "Larissa","Isabela","Natália","Rafaela","Gabriela","Aline","Lívia","Beatriz",
  "Carolina",
];

const PHRASES = [
  "acabou de garantir seu lugar",
  "se inscreveu agora",
  "reservou uma vaga",
  "entrou para a lista",
  "garantiu acesso ao tutorial",
];

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

type Notif = { id: number; name: string; phrase: string; ago: string };

export default function SignupNotifications() {
  const [notif, setNotif] = useState<Notif | null>(null);

  useEffect(() => {
    let showTimer: number;
    let hideTimer: number;
    let cancelled = false;

    const schedule = (initial = false) => {
      const delay = initial ? 4000 : 8000 + Math.random() * 12000;
      showTimer = window.setTimeout(() => {
        if (cancelled) return;
        const ago = Math.random() < 0.5
          ? "agora mesmo"
          : `há ${1 + Math.floor(Math.random() * 2)} minuto${Math.random() < 0.5 ? "" : "s"}`;
        setNotif({
          id: Date.now(),
          name: pick(NAMES),
          phrase: pick(PHRASES),
          ago,
        });
        bumpSeats(1 + Math.floor(Math.random() * 2));
        hideTimer = window.setTimeout(() => {
          if (cancelled) return;
          setNotif(null);
          schedule();
        }, 5000);
      }, delay);
    };

    schedule(true);
    return () => {
      cancelled = true;
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes notif-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .notif-card {
          position: fixed;
          bottom: 80px;
          left: 20px;
          z-index: 110;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 10px 30px rgba(0,0,0,0.18);
          border-radius: 12px;
          padding: 12px 16px 12px 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 320px;
          font-family: 'Inter',sans-serif;
          animation: notif-in 0.45s ease-out;
        }
        .notif-icon {
          width: 36px; height: 36px; border-radius: 50%;
          background: #DCFCE7; color: #16A34A;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .notif-text { font-size: 13.5px; line-height: 1.35; color: #3D2A2F; }
        .notif-text strong { color: #2B0F18; font-weight: 700; }
        .notif-ago { display: block; font-size: 11px; color: #8B7B80; margin-top: 2px; }
        @media(max-width:480px){
          .notif-card{ left:12px; right:12px; bottom:72px; max-width:none; }
        }
      `}</style>
      {notif && (
        <div className="notif-card" key={notif.id} role="status" aria-live="polite">
          <div className="notif-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div className="notif-text">
            <strong>{notif.name}</strong> {notif.phrase}
            <span className="notif-ago">{notif.ago}</span>
          </div>
        </div>
      )}
    </>
  );
}
