// ═══════════════════════════════════════════════
//  RACKYWEB PROMOTE — REUSABLE COMPONENTS
// ═══════════════════════════════════════════════
import { useState, useEffect, useRef } from 'react';

// ── Particle Canvas Background ───────────────────────────────
export function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const COLORS = ['#00f0ff', '#8b5cf6', '#ff0080', '#8b5cf6'];
    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.15,
    }));
    let raf;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#00f0ff';
            ctx.globalAlpha = (1 - d / 110) * 0.10;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    draw();
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.7 }}
    />
  );
}

// ── Animated Counter ──────────────────────────────────────────
export function Counter({ end, suffix = '', duration = 2200 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let current = 0;
      const step = end / (duration / 16);
      const tick = () => {
        current = Math.min(current + step, end);
        setVal(Math.floor(current));
        if (current < end) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

// ── Typewriter ────────────────────────────────────────────────
export function Typewriter({ texts, speed = 80 }) {
  const [idx, setIdx]         = useState(0);
  const [displayed, setShown] = useState('');
  const [deleting, setDel]    = useState(false);
  useEffect(() => {
    const cur = texts[idx];
    if (!deleting && displayed === cur) {
      const t = setTimeout(() => setDel(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && displayed === '') {
      setDel(false);
      setIdx((idx + 1) % texts.length);
      return;
    }
    const t = setTimeout(() => {
      setShown(deleting ? displayed.slice(0, -1) : cur.slice(0, displayed.length + 1));
    }, deleting ? 35 : speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, idx, texts, speed]);
  return (
    <span style={{ color: '#00f0ff' }}>
      {displayed}
      <span style={{ animation: 'blink 1s infinite', color: '#ff0080', marginLeft: 2 }}>|</span>
    </span>
  );
}

// ── Glass Card ────────────────────────────────────────────────
export function GlassCard({ children, style = {}, hover = true, glow = false, onClick }) {
  const [hovered, setH] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${hovered && hover ? 'rgba(0,240,255,0.35)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 20,
        padding: 24,
        transition: 'all 0.35s cubic-bezier(.4,0,.2,1)',
        transform: hovered && hover ? 'translateY(-4px)' : 'none',
        boxShadow: glow
          ? '0 0 40px rgba(0,240,255,0.12), 0 8px 40px rgba(0,0,0,0.4)'
          : hovered && hover
          ? '0 20px 60px rgba(0,240,255,0.08), 0 8px 30px rgba(0,0,0,0.5)'
          : '0 4px 24px rgba(0,0,0,0.3)',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── Section Header ────────────────────────────────────────────
export function SectionHeader({ label, title, sub, center = false }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 56 }}>
      <div className="section-label" style={{ display: 'inline-flex' }}>
        <span className="section-dot" />
        {label}
      </div>
      <h2 className="section-title gradient-text-cp">{title}</h2>
      {sub && (
        <p className="section-sub" style={{ margin: center ? '0 auto' : undefined }}>
          {sub}
        </p>
      )}
    </div>
  );
}

// ── Neon Button ───────────────────────────────────────────────
export function NeonButton({ children, onClick, variant = 'primary', size = 'md', style = {} }) {
  const cls = variant === 'primary' ? 'btn-primary' : variant === 'pink' ? 'btn-pink' : 'btn-secondary';
  const sz = size === 'lg' ? { padding: '16px 40px', fontSize: '13px' } : size === 'sm' ? { padding: '9px 20px', fontSize: '11px' } : {};
  return (
    <button className={cls} onClick={onClick} style={{ ...sz, ...style }}>
      {children}
    </button>
  );
}

// ── Stat Card ─────────────────────────────────────────────────
export function StatCard({ icon, label, value, suffix, color }) {
  return (
    <GlassCard glow style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 900,
        color, textShadow: `0 0 20px ${color}60`, marginBottom: 6,
      }}>
        <Counter end={value} suffix={suffix} />
      </div>
      <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>
        {label}
      </div>
    </GlassCard>
  );
}

// ── Notification Toast ────────────────────────────────────────
export function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);
  const colors = { success: '#00f0ff', error: '#ff0080', warning: '#f59e0b' };
  return (
    <div style={{
      position: 'fixed', bottom: 90, right: 24, zIndex: 9999,
      background: 'rgba(5,8,22,0.95)', backdropFilter: 'blur(20px)',
      border: `1px solid ${colors[type]}40`,
      borderRadius: 12, padding: '14px 20px',
      display: 'flex', alignItems: 'center', gap: 12,
      boxShadow: `0 0 30px ${colors[type]}20`,
      animation: 'slideIn 0.3s ease',
      maxWidth: 340,
    }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: colors[type], boxShadow: `0 0 8px ${colors[type]}` }} />
      <span style={{ fontSize: 13, color: '#e8eaf0', fontFamily: 'var(--font-body)' }}>{message}</span>
      <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: 16, marginLeft: 'auto', lineHeight: 1 }}>×</button>
    </div>
  );
}

// ── Loading Spinner ───────────────────────────────────────────
export function Spinner({ size = 40 }) {
  return (
    <div style={{ width: size, height: size, position: 'relative', margin: '0 auto' }}>
      <div style={{
        width: '100%', height: '100%', borderRadius: '50%',
        border: '2px solid rgba(0,240,255,0.1)',
        borderTop: '2px solid #00f0ff',
        animation: 'spin-slow 0.8s linear infinite',
      }} />
    </div>
  );
}

// ── Verified Badge ────────────────────────────────────────────
export function VerifiedBadge({ size = 16 }) {
  return (
    <span title="Verified Business" style={{ display: 'inline-flex', alignItems: 'center' }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#00f0ff" opacity="0.2" />
        <circle cx="12" cy="12" r="10" stroke="#00f0ff" strokeWidth="1.5" />
        <path d="M8 12l3 3 5-5" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

// ── Featured Star ─────────────────────────────────────────────
export function FeaturedBadge() {
  return (
    <span className="badge badge-gold">
      ⭐ FEATURED
    </span>
  );
}

// ── Progress Bar ──────────────────────────────────────────────
export function ProgressBar({ value, max, color = '#00f0ff', label }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, color: 'var(--muted)' }}>
          <span>{label}</span>
          <span style={{ color }}>{Math.round(pct)}%</span>
        </div>
      )}
      <div style={{ height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${pct}%`, borderRadius: 3,
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          boxShadow: `0 0 8px ${color}60`,
          transition: 'width 1s cubic-bezier(.4,0,.2,1)',
        }} />
      </div>
    </div>
  );
}

// ── Divider ───────────────────────────────────────────────────
export function NeonDivider() {
  return <div className="neon-divider" />;
}
