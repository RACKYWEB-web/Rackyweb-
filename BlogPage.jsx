// ═══════════════════════════════════════════════
//  RACKYWEB PROMOTE — BLOG PAGE
// ═══════════════════════════════════════════════
import { useState } from 'react';
import { SectionHeader, GlassCard, NeonDivider } from '../components/UI';
import { BLOG_POSTS } from '../data/data';

const BLOG_CATS = ['All', 'Marketing Tips', 'AI Trends', 'Success Stories', 'Business Growth', 'Advertising News', 'SEO'];

export default function BlogPage() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === active);

  if (selected) return <ArticleView post={selected} onBack={() => setSelected(null)} />;

  return (
    <main style={{ position: 'relative', zIndex: 1, paddingTop: 80 }}>
      <div className="container section">
        <SectionHeader
          label="NEWS + INSIGHTS"
          title={<>Marketing <span className="gradient-text">Intelligence</span></>}
          sub="Stay ahead with the latest digital advertising strategies, AI trends, and Nigerian business growth stories."
        />

        {/* Category filter */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {BLOG_CATS.map(c => (
            <button key={c} className={`tag ${active === c ? 'active' : ''}`} onClick={() => setActive(c)} style={{ fontSize: 12 }}>{c}</button>
          ))}
        </div>

        {/* Featured Post */}
        <div onClick={() => setSelected(filtered[0])} style={{
          background: 'linear-gradient(135deg, rgba(0,240,255,0.08), rgba(139,92,246,0.06))',
          border: '1px solid rgba(0,240,255,0.15)', borderRadius: 24,
          padding: 'clamp(28px,4vw,48px)', cursor: 'pointer', marginBottom: 40,
          transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,240,255,0.35)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,240,255,0.15)'; e.currentTarget.style.transform = 'none'; }}
        >
          <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,240,255,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ fontSize: 72 }}>{filtered[0]?.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
                <span className="badge badge-cyan">{filtered[0]?.category}</span>
                <span className="badge badge-purple">FEATURED</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px,3vw,28px)', fontWeight: 900, color: '#fff', marginBottom: 12, lineHeight: 1.2 }}>
                {filtered[0]?.title}
              </h2>
              <p style={{ fontSize: 14, color: '#8892aa', lineHeight: 1.7, marginBottom: 16, maxWidth: 600 }}>{filtered[0]?.excerpt}</p>
              <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#6b7280', fontFamily: 'var(--font-mono)' }}>
                <span>📅 {filtered[0]?.date}</span>
                <span>⏱ {filtered[0]?.readTime}</span>
                <span>👁 {filtered[0]?.views?.toLocaleString()} views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid-3">
          {filtered.slice(1).map(post => (
            <BlogCard key={post.id} post={post} onClick={() => setSelected(post)} />
          ))}
        </div>

        {/* Newsletter CTA */}
        <div style={{ marginTop: 72, textAlign: 'center' }}>
          <GlassCard style={{ display: 'inline-block', padding: '44px 60px', maxWidth: 560, width: '100%' }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>📩</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: '#fff', marginBottom: 10 }}>
              Get Weekly <span className="gradient-text-cp">Growth Tips</span>
            </h3>
            <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 24 }}>Join 50,000+ Nigerian entrepreneurs getting marketing insights every week.</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
              <input className="input-field" placeholder="your@email.com" style={{ maxWidth: 260, borderRadius: 50 }} />
              <button className="btn-primary" style={{ fontSize: 11, borderRadius: 50 }}>SUBSCRIBE FREE</button>
            </div>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}

function BlogCard({ post, onClick }) {
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
        height: 130, background: 'linear-gradient(135deg, rgba(0,240,255,0.06), rgba(139,92,246,0.06))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 56, borderBottom: '1px solid rgba(255,255,255,0.05)',
        transition: 'transform 0.3s',
        transform: hov ? 'scale(1.05)' : 'scale(1)',
      }}>{post.emoji}</div>
      <div style={{ padding: '20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span className="badge badge-purple" style={{ fontSize: 10 }}>{post.category}</span>
          <span style={{ fontSize: 11, color: '#6b7280', fontFamily: 'var(--font-mono)' }}>{post.readTime}</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.4 }}>{post.title}</h3>
        <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, marginBottom: 14 }}>{post.excerpt.slice(0, 90)}…</p>
        <NeonDivider />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: 11, color: '#6b7280', fontFamily: 'var(--font-mono)' }}>
          <span>{post.date}</span>
          <span>👁 {post.views?.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

function ArticleView({ post, onBack }) {
  const related = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);
  return (
    <main style={{ position: 'relative', zIndex: 1, paddingTop: 100 }}>
      <div className="container" style={{ maxWidth: 780, paddingBottom: 80 }}>
        <button onClick={onBack} style={{
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
          color: '#8892aa', borderRadius: 8, padding: '9px 18px', cursor: 'pointer', fontSize: 13, marginBottom: 32,
        }}>← Back to Blog</button>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 80, marginBottom: 24 }}>{post.emoji}</div>
          <span className="badge badge-cyan" style={{ marginBottom: 16, display: 'inline-block' }}>{post.category}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,4vw,38px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', fontSize: 12, color: '#6b7280', fontFamily: 'var(--font-mono)', flexWrap: 'wrap' }}>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime}</span>
            <span>👁 {post.views?.toLocaleString()} views</span>
          </div>
        </div>

        <NeonDivider />

        {/* Article body */}
        <div style={{ marginTop: 40, fontSize: 15, color: '#a8b0c0', lineHeight: 1.9 }}>
          <p style={{ marginBottom: 20 }}>{post.excerpt}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: '#fff', margin: '32px 0 14px' }}>Why This Matters for Nigerian Businesses</h2>
          <p style={{ marginBottom: 20 }}>Nigeria's digital economy is projected to reach $88 billion by 2027, and businesses that invest in digital advertising today are positioning themselves for exponential growth. The competition for online visibility is increasing, but so are the opportunities for those who act decisively.</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: '#fff', margin: '32px 0 14px' }}>Key Strategies to Implement</h2>
          {['Focus on mobile-first advertising — 89% of Nigerian internet users browse on mobile.', 'Use WhatsApp Business as a direct sales channel alongside your digital ads.', 'Leverage video content: short-form videos get 3x more engagement than static images.', 'Invest in local SEO to capture high-intent customers searching for your services.'].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
              <span style={{ color: '#00f0ff', flexShrink: 0, marginTop: 2 }}>→</span>
              <span>{s}</span>
            </div>
          ))}
          <div style={{ background: 'rgba(0,240,255,0.06)', border: '1px solid rgba(0,240,255,0.15)', borderRadius: 14, padding: '20px 24px', margin: '32px 0' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: '#00f0ff', marginBottom: 8 }}>💡 PRO TIP</div>
            <p style={{ margin: 0, color: '#c8cfe0' }}>Businesses that combine Rackyweb Promote listings with WhatsApp marketing see an average of 5x more qualified leads compared to using either channel alone.</p>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: '#fff', margin: '32px 0 14px' }}>Final Thoughts</h2>
          <p>The Nigerian digital advertising landscape is maturing rapidly. Early movers who establish their brand presence now will enjoy compounding returns as digital adoption accelerates. Rackyweb Promote gives you the platform, tools, and visibility to make that happen.</p>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 40 }}>
          {['Nigeria', 'Digital Marketing', 'Business Growth', 'Advertising', 'ROI'].map(t => (
            <span key={t} className="tag" style={{ fontSize: 12 }}>#{t}</span>
          ))}
        </div>

        <NeonDivider />

        {/* Related */}
        <div style={{ marginTop: 48 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 24 }}>Related Articles</h3>
          <div className="grid-3">
            {related.map(p => (
              <BlogCard key={p.id} post={p} onClick={() => {}} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
