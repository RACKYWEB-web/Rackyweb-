// ═══════════════════════════════════════════════
//  RACKYWEB PROMOTE — FOOTER
// ═══════════════════════════════════════════════
import { useState } from 'react';
import { NeonDivider } from './UI';

export default function Footer({ setPage }) {
  const [email, setEmail] = useState('');
  const [subbed, setSubbed] = useState(false);

  const links = {
    Platform:  ['Home', 'Marketplace', 'Plans', 'Dashboard', 'Blog'],
    Company:   ['About Us', 'Careers', 'Press', 'Partners', 'Contact'],
    Legal:     ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Ad Policy'],
    Resources: ['Help Center', 'API Docs', 'Status', 'Changelog', 'Newsletter'],
  };

  return (
    <footer style={{ background: '#030610', borderTop: '1px solid rgba(0,240,255,0.06)', position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 1, background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)', opacity: 0.4 }} />

      <div className="container">
        {/* Top — Newsletter */}
        <div style={{
          padding: '60px 0 48px', display: 'flex',
          flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: '#fff', marginBottom: 8 }}>
              Join 50,000+ <span className="gradient-text-cp">Business Leaders</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 14 }}>
              Get weekly marketing insights, growth hacks, and platform updates.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {subbed ? (
              <div style={{ color: '#00f0ff', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
                ✓ You're subscribed! Welcome aboard 🚀
              </div>
            ) : (
              <>
                <input
                  className="input-field"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ minWidth: 240, borderRadius: 50 }}
                />
                <button
                  onClick={() => email && setSubbed(true)}
                  className="btn-primary"
                  style={{ borderRadius: 50 }}
                >SUBSCRIBE →</button>
              </>
            )}
          </div>
        </div>

        {/* Middle — Links */}
        <div style={{ padding: '48px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32 }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 900, color: '#050816',
              }}>R</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, color: '#fff' }}>RACKYWEB</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#00f0ff', letterSpacing: 3 }}>PROMOTE</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20 }}>
              Nigeria's #1 digital advertising & business promotion ecosystem. Powered by Rackyweb Global.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: 10 }}>
              {['𝕏', 'f', 'in', '▶', '📷'].map((s, i) => (
                <a key={i} href="#" style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, color: '#8892aa',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,240,255,0.3)'; e.currentTarget.style.color = '#00f0ff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#8892aa'; }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, color: '#00f0ff', letterSpacing: 2, marginBottom: 20 }}>
                {heading.toUpperCase()}
              </div>
              {items.map(item => (
                <a key={item} href="#" onClick={e => { e.preventDefault(); }}
                  style={{ display: 'block', fontSize: 13, color: '#6b7280', marginBottom: 11, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#e8eaf0'}
                  onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
                >{item}</a>
              ))}
            </div>
          ))}
        </div>

        <NeonDivider />

        {/* Bottom */}
        <div style={{ padding: '28px 0', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>
            © 2025 <span style={{ color: '#00f0ff' }}>Rackyweb Global</span>. All rights reserved. Built in 🇳🇬 Nigeria.
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {['WhatsApp: +2347087806251', 'edwardzethan792@gmail.com'].map(c => (
              <a key={c} href="#" style={{ fontSize: 12, color: 'var(--muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#00f0ff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >{c}</a>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
