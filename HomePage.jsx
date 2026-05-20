// ═══════════════════════════════════════════════
//  RACKYWEB PROMOTE — HOME PAGE
// ═══════════════════════════════════════════════
import { useState } from 'react';
import { Counter, Typewriter, GlassCard, StatCard, SectionHeader, NeonDivider } from '../components/UI';
import { STATS, ADS, EARN_FEATURES } from '../data/data';

export default function HomePage({ setPage }) {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      <HeroSection setPage={setPage} />
      <StatsSection />
      <NeonDivider />
      <FeaturedSection setPage={setPage} />
      <NeonDivider />
      <EarnSection setPage={setPage} />
      <NeonDivider />
      <CTABanner setPage={setPage} />
    </main>
  );
}

// ── HERO ──────────────────────────────────────────────────────
function HeroSection({ setPage }) {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', position: 'relative',
      padding: 'clamp(100px,15vh,140px) clamp(16px,5vw,80px) 80px',
      textAlign: 'center', overflow: 'hidden',
    }}>
      {/* Background glows */}
      {[
        { top: '15%', left: '8%',  w: 500, color: 'rgba(0,240,255,0.07)' },
        { top: '25%', right: '6%', w: 600, color: 'rgba(139,92,246,0.09)' },
        { bottom:'15%',left:'30%', w: 400, color: 'rgba(255,0,128,0.06)' },
      ].map((g, i) => (
        <div key={i} style={{
          position: 'absolute', width: g.w, height: g.w, borderRadius: '50%',
          background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`,
          top: g.top, left: g.left, right: g.right, bottom: g.bottom,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 960 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,240,255,0.07)', border: '1px solid rgba(0,240,255,0.18)',
          borderRadius: 30, padding: '7px 20px', marginBottom: 36,
          animation: 'fadeInUp 0.5s ease both',
        }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#00f0ff', boxShadow: '0 0 8px #00f0ff', animation: 'pulse 2s infinite' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#00f0ff', letterSpacing: 2 }}>
            POWERED BY RACKYWEB GLOBAL · EST. 2025
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(38px, 7.5vw, 92px)',
          fontWeight: 900, lineHeight: 1.04, marginBottom: 20,
          animation: 'fadeInUp 0.6s 0.1s ease both',
        }}>
          <span style={{ background: 'linear-gradient(135deg, #fff 0%, #c8d0e8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Nigeria's #1{' '}
          </span>
          <br />
          <Typewriter texts={['Ad Platform', 'Growth Engine', 'Brand Builder', 'Business Hub', 'Revenue Machine']} />
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 2.5vw, 22px)',
          fontWeight: 600, letterSpacing: 4, marginBottom: 20,
          background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #ff0080)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          animation: 'fadeInUp 0.6s 0.2s ease both',
        }}>
          PROMOTE &nbsp;·&nbsp; GROW &nbsp;·&nbsp; DOMINATE
        </p>

        <p style={{
          fontSize: 'clamp(15px, 2vw, 18px)', color: '#8892aa', maxWidth: 600,
          margin: '0 auto 44px', lineHeight: 1.75,
          animation: 'fadeInUp 0.6s 0.3s ease both',
        }}>
          The complete digital advertising ecosystem where businesses, creators, startups and individuals promote products, services and brands to millions across Nigeria and beyond.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap',
          animation: 'fadeInUp 0.6s 0.4s ease both',
        }}>
          <button className="btn-primary" style={{ fontSize: 12, padding: '15px 34px' }} onClick={() => setPage('marketplace')}>
            📢 ADVERTISE NOW
          </button>
          <button className="btn-secondary" style={{ fontSize: 12, padding: '15px 34px' }} onClick={() => setPage('marketplace')}>
            🏢 PROMOTE BUSINESS
          </button>
          <button className="btn-pink" style={{ fontSize: 12, padding: '15px 28px' }} onClick={() => setPage('plans')}>
            ⭐ BECOME FEATURED
          </button>
          <button
            onClick={() => setPage('marketplace')}
            style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
              color: '#8892aa', fontFamily: 'var(--font-display)', fontSize: 12,
              padding: '15px 28px', borderRadius: 50, cursor: 'pointer',
              transition: 'all 0.2s', letterSpacing: 1,
            }}
          >🔍 EXPLORE BUSINESSES</button>
        </div>

        {/* Trust indicators */}
        <div style={{
          marginTop: 56, display: 'flex', gap: 32, justifyContent: 'center',
          flexWrap: 'wrap', animation: 'fadeInUp 0.6s 0.55s ease both',
        }}>
          {['Paystack Secured', 'Flutterwave Ready', 'SSL Encrypted', 'NDPR Compliant'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#00f0ff', fontSize: 12 }}>✓</span>
              <span style={{ fontSize: 12, color: '#6b7280', fontFamily: 'var(--font-mono)' }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating preview cards */}
      <FloatingCards />
    </section>
  );
}

function FloatingCards() {
  return (
    <>
      {/* Left card */}
      <div className="hide-mobile" style={{
        position: 'absolute', left: 'clamp(10px, 4%, 60px)', top: '35%',
        animation: 'float 5s ease-in-out infinite',
        background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0,240,255,0.15)', borderRadius: 16, padding: '16px 20px',
        maxWidth: 200, zIndex: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #00f0ff44, #8b5cf644)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🚀</div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)' }}>LaunchPad</div>
            <div style={{ fontSize: 10, color: '#00f0ff' }}>FEATURED</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#00f0ff', fontFamily: 'var(--font-display)' }}>24.8K</div>
            <div style={{ fontSize: 9, color: '#6b7280' }}>VIEWS</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#8b5cf6', fontFamily: 'var(--font-display)' }}>3.1K</div>
            <div style={{ fontSize: 9, color: '#6b7280' }}>CLICKS</div>
          </div>
        </div>
      </div>

      {/* Right card */}
      <div className="hide-mobile" style={{
        position: 'absolute', right: 'clamp(10px, 4%, 60px)', top: '30%',
        animation: 'float 6s 1s ease-in-out infinite',
        background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(139,92,246,0.2)', borderRadius: 16, padding: '16px 20px',
        maxWidth: 190, zIndex: 0,
      }}>
        <div style={{ fontSize: 11, color: '#8b5cf6', fontFamily: 'var(--font-mono)', letterSpacing: 1, marginBottom: 8 }}>NEW CAMPAIGN</div>
        <div style={{ fontSize: 13, color: '#e8eaf0', fontWeight: 600, marginBottom: 10 }}>Lagos Music Fest 2025</div>
        <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '74%', background: 'linear-gradient(90deg, #8b5cf6, #ff0080)', borderRadius: 2 }} />
        </div>
        <div style={{ fontSize: 10, color: '#6b7280', marginTop: 6 }}>74% to goal · 7 days left</div>
      </div>

      {/* Bottom indicator */}
      <div className="hide-mobile" style={{
        position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)',
        animation: 'float 4s 0.5s ease-in-out infinite',
        background: 'rgba(0,240,255,0.06)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0,240,255,0.15)', borderRadius: 30, padding: '10px 22px',
        display: 'flex', alignItems: 'center', gap: 10, zIndex: 0,
      }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', animation: 'pulse 2s infinite' }} />
        <span style={{ fontSize: 11, color: '#e8eaf0', fontFamily: 'var(--font-mono)' }}>12,480 advertisers online right now</span>
      </div>
    </>
  );
}

// ── STATS ─────────────────────────────────────────────────────
function StatsSection() {
  const colors = ['#00f0ff', '#8b5cf6', '#ff0080', '#10b981'];
  return (
    <section className="section" style={{ paddingTop: 60, paddingBottom: 80 }}>
      <div className="container">
        <div className="grid-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} color={colors[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FEATURED BUSINESSES ───────────────────────────────────────
function FeaturedSection({ setPage }) {
  const featured = ADS.filter(a => a.featured);

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          label="FEATURED ZONE"
          title={<>Top Promoted <span className="gradient-text">Businesses</span></>}
          sub="Discover Nigeria's most active and verified businesses on our premium ad network."
        />
        <div className="grid-3">
          {featured.map(ad => (
            <FeaturedAdCard key={ad.id} ad={ad} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button className="btn-secondary" style={{ fontSize: 12 }} onClick={() => setPage('marketplace')}>
            VIEW ALL BUSINESSES →
          </button>
        </div>
      </div>
    </section>
  );
}

function FeaturedAdCard({ ad }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="ad-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ cursor: 'pointer' }}
    >
      {/* Banner */}
      <div style={{
        height: 120, background: `linear-gradient(135deg, ${ad.color}22, ${ad.color}08)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 52, position: 'relative', overflow: 'hidden',
        borderBottom: `1px solid ${ad.color}20`,
      }}>
        {ad.emoji || ad.logo}
        {ad.featured && (
          <div style={{
            position: 'absolute', top: 12, right: 12,
            background: 'rgba(255,180,0,0.12)', border: '1px solid rgba(255,180,0,0.3)',
            borderRadius: 20, padding: '4px 10px', fontSize: 10, color: '#ffb400',
            fontFamily: 'var(--font-mono)', letterSpacing: 1,
          }}>⭐ FEATURED</div>
        )}
        {ad.trending && (
          <div style={{
            position: 'absolute', top: 12, left: 12,
            background: 'rgba(255,0,128,0.1)', border: '1px solid rgba(255,0,128,0.25)',
            borderRadius: 20, padding: '4px 10px', fontSize: 10, color: '#ff0080',
            fontFamily: 'var(--font-mono)', letterSpacing: 1,
          }}>🔥 TRENDING</div>
        )}
      </div>
      {/* Content */}
      <div style={{ padding: 20 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 2 }}>
              {ad.name}
              {ad.verified && <span style={{ marginLeft: 6, color: '#00f0ff', fontSize: 12 }}>✓</span>}
            </div>
            <span className="badge badge-cyan" style={{ fontSize: 10 }}>{ad.category}</span>
          </div>
          <div style={{ fontSize: 13, color: ad.color, fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{ad.price}</div>
        </div>
        <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, marginBottom: 16 }}>
          {ad.description.slice(0, 100)}...
        </p>
        <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#6b7280', marginBottom: 16 }}>
          <span>👁 {ad.views.toLocaleString()}</span>
          <span>🖱 {ad.clicks.toLocaleString()}</span>
          <span>🌍 {ad.country}</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <a href={`https://wa.me/${ad.whatsapp}`} target="_blank" rel="noreferrer"
            style={{
              flex: 1, padding: '9px 0', textAlign: 'center',
              background: '#25D36620', border: '1px solid #25D36640',
              borderRadius: 8, color: '#25D366', fontSize: 12, fontFamily: 'var(--font-display)',
              fontWeight: 700, letterSpacing: 0.5, transition: 'all 0.2s', cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#25D36630'}
            onMouseLeave={e => e.currentTarget.style.background = '#25D36620'}
          >WhatsApp</a>
          <a href={ad.website} target="_blank" rel="noreferrer"
            style={{
              flex: 1, padding: '9px 0', textAlign: 'center',
              background: `${ad.color}10`, border: `1px solid ${ad.color}30`,
              borderRadius: 8, color: ad.color, fontSize: 12, fontFamily: 'var(--font-display)',
              fontWeight: 700, letterSpacing: 0.5, transition: 'all 0.2s', cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.background = `${ad.color}20`}
            onMouseLeave={e => e.currentTarget.style.background = `${ad.color}10`}
          >Website →</a>
        </div>
      </div>
    </div>
  );
}

// ── EARN / GROW SECTION ───────────────────────────────────────
function EarnSection({ setPage }) {
  return (
    <section className="section" style={{ background: 'rgba(0,240,255,0.015)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionHeader
            label="WHY RACKYWEB PROMOTE"
            title={<>Grow Your Business.<br /><span className="gradient-text">Exponentially.</span></>}
            sub="Join 12,480+ businesses already using Rackyweb Promote to reach millions of customers and generate consistent revenue."
            center
          />
        </div>
        <div className="grid-3" style={{ gap: 24 }}>
          {EARN_FEATURES.map((f, i) => (
            <GlassCard key={i} style={{ padding: 28 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: `${f.color}15`, border: `1px solid ${f.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26, marginBottom: 20,
              }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 10 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, marginBottom: 16 }}>
                {f.desc}
              </p>
              <div style={{
                display: 'inline-block', padding: '5px 14px',
                background: `${f.color}10`, border: `1px solid ${f.color}25`,
                borderRadius: 20, fontSize: 11, color: f.color,
                fontFamily: 'var(--font-mono)', letterSpacing: 0.5,
              }}>{f.stat}</div>
            </GlassCard>
          ))}
        </div>

        {/* Big ROI stat */}
        <div style={{ textAlign: 'center', marginTop: 72 }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(0,240,255,0.04)', border: '1px solid rgba(0,240,255,0.15)',
            borderRadius: 20, padding: 'clamp(30px,5vw,48px) clamp(30px,6vw,80px)',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,8vw,100px)', fontWeight: 900, lineHeight: 1 }}>
              <span className="gradient-text">280%</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: 2, marginTop: 8 }}>
              AVERAGE ROI FOR ADVERTISERS
            </div>
            <div style={{ fontSize: 13, color: '#6b7280', marginTop: 8 }}>Based on 6-month campaign data from 500+ businesses</div>
            <button className="btn-primary" style={{ marginTop: 28, fontSize: 12 }} onClick={() => setPage('plans')}>
              START GROWING TODAY →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA BANNER ────────────────────────────────────────────────
function CTABanner({ setPage }) {
  return (
    <section style={{ padding: '80px clamp(16px,5vw,64px)' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, rgba(0,240,255,0.08) 0%, rgba(139,92,246,0.12) 50%, rgba(255,0,128,0.08) 100%)',
          border: '1px solid rgba(0,240,255,0.15)', borderRadius: 28,
          padding: 'clamp(40px,6vw,64px)', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#00f0ff', letterSpacing: 3, marginBottom: 16 }}>
              🔥 LIMITED TIME OFFER
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>
              Get Your First Month <span className="gradient-text">FREE</span>
            </h2>
            <p style={{ fontSize: 16, color: '#8892aa', marginBottom: 36, maxWidth: 500, margin: '0 auto 36px' }}>
              Start promoting your business today. No credit card required for the free plan. Upgrade anytime.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ fontSize: 13, padding: '16px 40px' }} onClick={() => setPage('plans')}>
                🚀 CLAIM FREE LISTING
              </button>
              <button className="btn-secondary" style={{ fontSize: 13, padding: '16px 32px' }} onClick={() => setPage('marketplace')}>
                VIEW MARKETPLACE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
