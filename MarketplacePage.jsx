// ═══════════════════════════════════════════════
//  RACKYWEB PROMOTE — MARKETPLACE PAGE
// ═══════════════════════════════════════════════
import { useState, useMemo } from 'react';
import { SectionHeader, GlassCard, NeonDivider } from '../components/UI';
import { ADS, CATEGORIES } from '../data/data';

const SORT_OPTIONS = ['Newest', 'Popular', 'Trending', 'Price: Low', 'Price: High'];
const COUNTRIES = ['All Countries', 'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'UK', 'USA'];

export default function MarketplacePage({ setPage }) {
  const [search,   setSearch]   = useState('');
  const [category, setCategory] = useState('All');
  const [sort,     setSort]     = useState('Popular');
  const [country,  setCountry]  = useState('All Countries');
  const [viewMode, setViewMode] = useState('grid'); // grid | list
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    let arr = [...ADS];
    if (search)   arr = arr.filter(a => a.name.toLowerCase().includes(search.toLowerCase()) || a.description.toLowerCase().includes(search.toLowerCase()));
    if (category !== 'All') arr = arr.filter(a => a.category === category);
    if (country !== 'All Countries') arr = arr.filter(a => a.country === country.replace('All Countries', ''));
    if (sort === 'Popular')    arr.sort((a, b) => b.views - a.views);
    if (sort === 'Trending')   arr.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
    if (sort === 'Newest')     arr.reverse();
    return arr;
  }, [search, category, sort, country]);

  if (selected) {
    return <AdDetail ad={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <main style={{ position: 'relative', zIndex: 1, paddingTop: 80 }}>
      <div className="container section">

        {/* Header */}
        <SectionHeader
          label="AD MARKETPLACE"
          title={<>Discover Nigerian <span className="gradient-text">Businesses</span></>}
          sub={`Browsing ${filtered.length} active listings across ${CATEGORIES.length - 1} categories.`}
        />

        {/* Search Bar */}
        <div style={{ position: 'relative', marginBottom: 32 }}>
          <input
            className="input-field"
            placeholder="🔍  Search businesses, products, services..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ borderRadius: 50, padding: '14px 24px 14px 20px', fontSize: 15, border: '1px solid rgba(0,240,255,0.2)' }}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{
              position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 18,
            }}>×</button>
          )}
        </div>

        {/* Filters Row */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 32 }}>
          {/* Category pills */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', flex: 1 }}>
            {CATEGORIES.map(c => (
              <button key={c} className={`tag ${category === c ? 'active' : ''}`} onClick={() => setCategory(c)}>
                {c}
              </button>
            ))}
          </div>

          {/* Sort & Country */}
          <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="input-field"
              style={{ width: 'auto', padding: '9px 14px', borderRadius: 8, fontSize: 12 }}
            >
              {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
            </select>
            <select
              value={country}
              onChange={e => setCountry(e.target.value)}
              className="input-field"
              style={{ width: 'auto', padding: '9px 14px', borderRadius: 8, fontSize: 12 }}
            >
              {COUNTRIES.map(o => <option key={o}>{o}</option>)}
            </select>
            {/* View Toggle */}
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, overflow: 'hidden' }}>
              {['grid', 'list'].map(v => (
                <button key={v} onClick={() => setViewMode(v)} style={{
                  padding: '9px 14px', background: viewMode === v ? 'rgba(0,240,255,0.1)' : 'none',
                  border: 'none', color: viewMode === v ? '#00f0ff' : '#6b7280', cursor: 'pointer', fontSize: 14,
                }}>
                  {v === 'grid' ? '⊞' : '☰'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <NeonDivider />
        <div style={{ marginTop: 32 }} />

        {/* Results count */}
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: '#6b7280', fontFamily: 'var(--font-mono)' }}>
            {filtered.length} RESULTS FOUND
          </span>
          <button className="btn-primary" style={{ fontSize: 11, padding: '10px 24px' }} onClick={() => setPage('dashboard')}>
            + POST YOUR AD
          </button>
        </div>

        {/* Ad Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: '#fff', marginBottom: 8 }}>No results found</div>
            <div style={{ color: '#6b7280' }}>Try adjusting your filters or search terms</div>
          </div>
        ) : (
          <div style={viewMode === 'grid' ? { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 } : { display: 'flex', flexDirection: 'column', gap: 16 }}>
            {filtered.map(ad => (
              viewMode === 'grid'
                ? <AdCard key={ad.id} ad={ad} onClick={() => setSelected(ad)} />
                : <AdListItem key={ad.id} ad={ad} onClick={() => setSelected(ad)} />
            ))}
          </div>
        )}

        {/* Post CTA */}
        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <GlassCard style={{ display: 'inline-block', padding: '40px 60px', textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>📢</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 8 }}>
              List Your Business Here
            </div>
            <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 24, maxWidth: 340 }}>
              Reach 950,000+ monthly visitors. Start free or choose a premium plan.
            </p>
            <button className="btn-primary" style={{ fontSize: 12 }} onClick={() => setPage('plans')}>
              VIEW AD PLANS →
            </button>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}

// ── Ad Grid Card ──────────────────────────────────────────────
function AdCard({ ad, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="ad-card"
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ cursor: 'pointer' }}
    >
      <div style={{
        height: 110, background: `linear-gradient(135deg, ${ad.color}18, ${ad.color}06)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 44, position: 'relative',
        borderBottom: `1px solid ${ad.color}18`,
      }}>
        {ad.logo}
        <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {ad.featured && <span className="badge badge-gold" style={{ fontSize: 9 }}>⭐ FEATURED</span>}
          {ad.trending && <span className="badge badge-pink" style={{ fontSize: 9 }}>🔥 HOT</span>}
          {ad.verified && <span className="badge badge-cyan" style={{ fontSize: 9 }}>✓ VERIFIED</span>}
        </div>
      </div>
      <div style={{ padding: '16px 18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#fff' }}>
            {ad.name}
          </h3>
          <span style={{ fontSize: 11, color: ad.color, fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
            {ad.price}
          </span>
        </div>
        <div style={{ marginBottom: 8 }}>
          <span className="badge badge-cyan" style={{ fontSize: 10, marginRight: 6 }}>{ad.category}</span>
          <span style={{ fontSize: 11, color: '#6b7280' }}>🌍 {ad.country}</span>
        </div>
        <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.55, marginBottom: 14 }}>
          {ad.description.slice(0, 85)}…
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#6b7280', marginBottom: 14 }}>
          <span>👁 {ad.views.toLocaleString()}</span>
          <span>🖱 {ad.clicks.toLocaleString()}</span>
          {ad.tags?.slice(0, 2).map(t => <span key={t} style={{ color: '#8b5cf6' }}>#{t}</span>)}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <a href={`https://wa.me/${ad.whatsapp}`} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              flex: 1, padding: '8px 0', textAlign: 'center',
              background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.3)',
              borderRadius: 7, color: '#25D366', fontSize: 11, fontFamily: 'var(--font-display)',
              fontWeight: 700, cursor: 'pointer',
            }}
          >WhatsApp</a>
          <button style={{
            flex: 1, padding: '8px 0',
            background: `${ad.color}0d`, border: `1px solid ${ad.color}30`,
            borderRadius: 7, color: ad.color, fontSize: 11, fontFamily: 'var(--font-display)',
            fontWeight: 700, cursor: 'pointer',
          }}>View More</button>
        </div>
      </div>
    </div>
  );
}

// ── Ad List Item ──────────────────────────────────────────────
function AdListItem({ ad, onClick }) {
  return (
    <div
      className="glass glass-hover"
      onClick={onClick}
      style={{ display: 'flex', gap: 20, padding: '18px 24px', cursor: 'pointer', alignItems: 'center' }}
    >
      <div style={{
        width: 72, height: 72, borderRadius: 14,
        background: `${ad.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 32, flexShrink: 0, border: `1px solid ${ad.color}20`,
      }}>{ad.logo}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: '#fff' }}>{ad.name}</span>
          {ad.verified && <span className="badge badge-cyan" style={{ fontSize: 9 }}>✓</span>}
          {ad.featured && <span className="badge badge-gold" style={{ fontSize: 9 }}>⭐ FEATURED</span>}
          {ad.trending && <span className="badge badge-pink" style={{ fontSize: 9 }}>🔥</span>}
        </div>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 6 }}>{ad.description.slice(0, 120)}…</p>
        <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#6b7280' }}>
          <span className="badge badge-cyan" style={{ fontSize: 10 }}>{ad.category}</span>
          <span>👁 {ad.views.toLocaleString()}</span>
          <span>🖱 {ad.clicks.toLocaleString()}</span>
          <span>🌍 {ad.country}</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0, alignItems: 'flex-end' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: ad.color, fontWeight: 700 }}>{ad.price}</span>
        <a href={`https://wa.me/${ad.whatsapp}`} target="_blank" rel="noreferrer"
          onClick={e => e.stopPropagation()}
          className="btn-secondary" style={{ fontSize: 10, padding: '7px 14px' }}>WhatsApp</a>
      </div>
    </div>
  );
}

// ── Ad Detail ─────────────────────────────────────────────────
function AdDetail({ ad, onBack }) {
  return (
    <main style={{ position: 'relative', zIndex: 1, paddingTop: 100 }}>
      <div className="container" style={{ maxWidth: 900, paddingBottom: 80 }}>
        <button onClick={onBack} style={{
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
          color: '#8892aa', borderRadius: 8, padding: '9px 18px', cursor: 'pointer',
          fontSize: 13, marginBottom: 32, display: 'flex', alignItems: 'center', gap: 6,
        }}>← Back to Marketplace</button>

        <div style={{
          background: `linear-gradient(135deg, ${ad.color}12, ${ad.color}04)`,
          border: `1px solid ${ad.color}20`, borderRadius: 24, overflow: 'hidden',
        }}>
          {/* Banner */}
          <div style={{
            height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 80, background: `linear-gradient(135deg, ${ad.color}18, transparent)`,
          }}>{ad.logo}</div>

          <div style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 8 }}>
                  <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 900, color: '#fff' }}>{ad.name}</h1>
                  {ad.verified && <span className="badge badge-cyan">✓ VERIFIED</span>}
                  {ad.featured && <span className="badge badge-gold">⭐ FEATURED</span>}
                </div>
                <p style={{ fontSize: 16, color: ad.color, fontStyle: 'italic', marginBottom: 12 }}>{ad.tagline}</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <span className="badge badge-cyan">{ad.category}</span>
                  <span style={{ fontSize: 12, color: '#6b7280' }}>🌍 {ad.country}</span>
                  {ad.tags?.map(t => <span key={t} className="tag">#{t}</span>)}
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 900, color: ad.color }}>
                {ad.price}
              </div>
            </div>

            <p style={{ fontSize: 15, color: '#a8b0c0', lineHeight: 1.8, marginBottom: 32 }}>{ad.description}</p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 16, marginBottom: 32 }}>
              {[
                { label: 'Total Views', value: ad.views.toLocaleString(), icon: '👁', color: '#00f0ff' },
                { label: 'Total Clicks', value: ad.clicks.toLocaleString(), icon: '🖱', color: '#8b5cf6' },
                { label: 'Country', value: ad.country, icon: '🌍', color: '#10b981' },
                { label: 'Category', value: ad.category, icon: '📂', color: '#f59e0b' },
              ].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${ad.whatsapp}`} target="_blank" rel="noreferrer"
                className="btn-primary" style={{ fontSize: 13 }}>
                💬 WhatsApp Contact
              </a>
              <a href={ad.website} target="_blank" rel="noreferrer"
                className="btn-secondary" style={{ fontSize: 13 }}>
                🌐 Visit Website
              </a>
              <a href={`tel:${ad.contact}`}
                style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                  color: '#8892aa', fontFamily: 'var(--font-display)', fontSize: 13,
                  padding: '14px 24px', borderRadius: 50, cursor: 'pointer',
                  transition: 'all 0.2s', letterSpacing: 1,
                }}>
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
