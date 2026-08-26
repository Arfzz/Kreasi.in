import { useEffect, useState, useRef } from 'react';

const STATUS_MSGS = [
  'Menyalakan mesin gila...',
  'Ngopi dulu bentar...',
  'Loading keberanian...',
  'Mancing inspirasi...',
  'Anti-mainstream mode: ON',
  'Siap-siap kena shock!',
  'Hampir jadi...',
  'Finalizing kegilaan...',
];

function useCounter(target, duration, onComplete) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  useEffect(() => {
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const jitter = progress < 0.95 ? (Math.random() - 0.5) * 3 : 0;
      const current = Math.min(Math.round(eased * target + jitter), target);
      setCount(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
        onComplete?.();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);
  return count;
}

const EXIT_DURATION = 800; // ms — must match CSS transition duration below

export default function Preloader({ onDone }) {
  const [phase, setPhase] = useState('loading');
  const [statusIdx, setStatusIdx] = useState(0);

  const count = useCounter(100, 2800, () => {
    // Pause at 100 then trigger fly-off
    setTimeout(() => {
      setPhase('exit');
      // After the CSS transition completes, signal parent
      setTimeout(() => onDone?.(), EXIT_DURATION + 50);
    }, 400);
  });

  // Rotate status messages
  useEffect(() => {
    const id = setInterval(() => setStatusIdx(i => (i + 1) % STATUS_MSGS.length), 380);
    return () => clearInterval(id);
  }, []);

  // Called when each half finishes its CSS transition
  const handleTransitionEnd = () => {
    transitionsDone.current += 1;
    if (transitionsDone.current >= 2) onDone?.();
  };

  const topStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, height: '50%',
    background: '#330060',
    borderBottom: '4px solid #000',
    zIndex: 9999,
    transition: phase === 'exit' ? `transform ${EXIT_DURATION}ms cubic-bezier(0.76,0,0.24,1)` : 'none',
    transform: phase === 'exit' ? 'translateY(-100%)' : 'translateY(0)',
    overflow: 'hidden',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
    paddingBottom: '1rem',
  };

  const bottomStyle = {
    position: 'fixed', bottom: 0, left: 0, right: 0, height: '50%',
    background: '#F5D60C',
    borderTop: '4px solid #000',
    zIndex: 9999,
    transition: phase === 'exit' ? `transform ${EXIT_DURATION}ms cubic-bezier(0.76,0,0.24,1)` : 'none',
    transform: phase === 'exit' ? 'translateY(100%)' : 'translateY(0)',
    overflow: 'hidden',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
    paddingTop: '1rem',
  };

  return (
    <>
      {/* TOP HALF — purple */}
      <div style={topStyle}>
        {/* Diagonal stripes */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(245,214,12,0.05) 30px, rgba(245,214,12,0.05) 32px)`,
        }} />
        {/* Big counter */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(120px, 22vw, 260px)',
            fontWeight: 900,
            lineHeight: 1,
            color: '#F5D60C',
            textShadow: '8px 8px 0 #000, -3px -3px 0 #6afcb7',
            letterSpacing: '-0.05em',
            tabularNums: 'true',
          }}>
            {String(count).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* BOTTOM HALF — yellow */}
      <div style={bottomStyle}>
        {/* Diagonal stripes */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(51,0,96,0.06) 30px, rgba(51,0,96,0.06) 32px)`,
        }} />
        {/* Brand name */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(36px, 8vw, 110px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: '#330060',
            textShadow: '5px 5px 0 #000',
            lineHeight: 1,
          }}>
            KREASI.IN
          </div>
          {/* Cycling status text */}
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: '#1b1b1b',
            opacity: 0.65,
            marginTop: '12px',
            minHeight: '18px',
          }}>
            {STATUS_MSGS[statusIdx]}
          </div>
        </div>

        {/* Progress bar at very bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '6px',
          background: 'rgba(0,0,0,0.12)',
        }}>
          <div style={{
            width: `${count}%`,
            height: '100%',
            background: '#330060',
            transition: 'width 0.05s linear',
          }} />
        </div>
      </div>

      {/* Center badge */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10000,
        background: '#6afcb7',
        border: '4px solid #000',
        boxShadow: '4px 4px 0 #000',
        padding: '8px 20px',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '12px',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '4px',
        color: '#1b1b1b',
        whiteSpace: 'nowrap',
        transition: phase === 'exit' ? 'opacity 0.3s ease' : 'none',
        opacity: phase === 'exit' ? 0 : 1,
      }}>
        Loading {count}%
      </div>
    </>
  );
}
