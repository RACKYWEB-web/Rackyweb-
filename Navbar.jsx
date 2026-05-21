// ═══════════════════════════════════════════════
//  RACKYWEB PROMOTE — NAVIGATION
// ═══════════════════════════════════════════════
import { useState, useEffect } from 'react';

export default function Navbar({ setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { label: 'Home',        page: 'home' },
    { label: 'Marketplace', page: 'marketplace' },
    { label: 'Plans',       page: 'plans' },
    { label: 'Dashboard',   page: 'dashboard' },
    { label: 'Blog',        page: 'blog' },
    { label: 'About',       page: 'about' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(5,8,22,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(22px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(22px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,240,255,0.08)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

        {/* ── Logo ── */}
        <div
          onClick={() => { setPage('home'); setMenuOpen(false); }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', userSelect: 'none' }}
        >
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: '#050816',
            boxShadow: '0 0 22px rgba(0,240,255,0.45)', flexShrink: 0,
          }}>R</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: '#fff', letterSpacing: 0.5 }}>
              RACKYWEB
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#00f0ff', letterSpacing: 4, marginTop: -2 }}>
              PROMOTE
            </div>
          </div>
        </div>

        {/* ── Desktop Links ── */}
        <div className="nav-desktop" style={{ gap: 4, alignItems: 'center' }}>
          {links.map(l => (
            <NavLink key={l.page} label={l.label} onClick={() => setPage(l.page)} />
          ))}
        </div>

        {/* ── Desktop CTA ── */}
        <div className="nav-desktop" style={{ gap: 10, alignItems: 'center' }}>
          <button
            onClick={() => setPage('dashboard')}
            style={{
              background: 'rgba(0,240,255,0.06)', border: '1px solid rgba(0,240,255,0.25)',
              color: '#00f0ff', padding: '9px 20px', borderRadius: 10, cursor: 'pointer',
              fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,240,255,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,240,255,0.06)'}
          >LOGIN</button>
          <button
            onClick={() => setPage('plans')}
            className="btn-primary"
            style={{ padding: '9px 22px', fontSize: 11 }}
          >GET STARTED →</button>
        </div>

        {/* ── Hamburger ── */}
        <button
          className="nav-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 8, width: 42, height: 42, cursor: 'pointer',
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5,
          }}
        >
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 20, height: 2,
              background: menuOpen ? '#ff0080' : '#00f0ff',
              borderRadius: 2,
              transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'scaleX(0)') : 'none',
              transition: 'all 0.3s ease',
            }} />
          ))}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div style={{
        overflow: 'hidden',
        maxHeight: menuOpen ? '500px' : '0',
        transition: 'max-height 0.4s ease',
        background: 'rgba(5,8,22,0.98)',
        backdropFilter: 'blur(20px)',
        borderTop: menuOpen ? '1px solid rgba(0,240,255,0.08)' : 'none',
      }}>
        <div style={{ padding: '16px 20px 24px' }}>
          {links.map(l => (
            <button
              key={l.page}
              onClick={() => { setPage(l.page); setMenuOpen(false); }}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', color: '#8892aa',
                fontFamily: 'var(--font-display)', fontSize: 13, letterSpacing: 1,
                padding: '13px 4px', cursor: 'pointer',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#00f0ff'}
              onMouseLeave={e => e.currentTarget.style.color = '#8892aa'}
            >{l.label.toUpperCase()}</button>
          ))}
          <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
            <button
              onClick={() => { setPage('dashboard'); setMenuOpen(false); }}
              className="btn-secondary"
              style={{ flex: 1, fontSize: 11 }}
            >LOGIN</button>
            <button
              onClick={() => { setPage('plans'); setMenuOpen(false); }}
              className="btn-primary"
              style={{ flex: 1, fontSize: 11 }}
            >GET STARTED</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ label, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'none', border: 'none',
        color: hov ? '#00f0ff' : '#8892aa',
        fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: 1.2,
        padding: '8px 14px', borderRadius: 8, cursor: 'pointer',
        transition: 'all 0.2s', fontWeight: 600,
        textShadow: hov ? '0 0 12px rgba(0,240,255,0.5)' : 'none',
      }}
    >{label.toUpperCase()}</button>
  );
}
