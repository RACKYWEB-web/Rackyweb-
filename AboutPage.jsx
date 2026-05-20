// ═══════════════════════════════════════════════
//  RACKYWEB PROMOTE — ABOUT PAGE
// ═══════════════════════════════════════════════
import { useState } from 'react';
import { SectionHeader, GlassCard, NeonDivider, Toast } from '../components/UI';

export default function AboutPage({ setPage }) {
  const [toast, setToast]   = useState(null);
  const [form,  setForm]    = useState({ name: '', email: '', subject: '', message: '' });
  const [sent,  setSent]    = useState(false);

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) {
      setToast({ msg: '⚠️ Please fill in all required fields.', type: 'warning' });
      return;
    }
    setSent(true);
    setToast({ msg: '✅ Message sent! We\'ll respond within 24 hours.', type: 'success' });
  };

  return (
    <main style={{ position: 'relative', zIndex: 1, paddingTop: 80 }}>

      {/* ── MISSION ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
            <div>
              <SectionHeader
                label="OUR MISSION"
                title={<>Built to <span className="gradient-text">Dominate</span> Africa's Digital Future</>}
                sub="Rackyweb Promote is Nigeria's most ambitious digital advertising platform — built to give every business, creator, and entrepreneur the tools to reach millions."
              />
              <p style={{ fontSize: 15, color: '#8892aa', lineHeight: 1.8, marginBottom: 28 }}>
                We believe Nigerian businesses deserve world-class advertising infrastructure. Our platform combines AI-powered tools, premium placements, and a massive network of engaged visitors to deliver unmatched ROI for advertisers.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button className="btn-primary" style={{ fontSize: 12 }} onClick={() => setPage('plans')}>START ADVERTISING</button>
                <a href="https://wa.me/2347087806251" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: 12 }}>WHATSAPP US</a>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { value: '2025', label: 'Founded', icon: '🗓', color: '#00f0ff' },
                { value: '12K+', label: 'Advertisers', icon: '📢', color: '#8b5cf6' },
                { value: '950K', label: 'Monthly Visitors', icon: '👁', color: '#ff0080' },
                { value: '₦2B+', label: 'Revenue Generated', icon: '💰', color: '#10b981' },
              ].map(s => (
                <GlassCard key={s.label} style={{ textAlign: 'center', padding: 24 }}>
                  <div style={{ fontSize: 30, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 900, color: s.color, marginBottom: 4 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: '#6b7280' }}>{s.label}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NeonDivider />

      {/* ── VALUES ── */}
      <section className="section">
        <div className="container">
          <SectionHeader
            label="OUR VALUES"
            title={<>What We <span className="gradient-text-cp">Stand For</span></>}
            sub="Every decision we make is guided by our commitment to empowering Nigerian businesses."
            center
          />
          <div className="grid-3">
            {[
              { icon: '🚀', title: 'Innovation First', desc: 'We constantly push boundaries with AI-powered tools, smart targeting, and cutting-edge ad formats that keep our advertisers ahead of the curve.', color: '#00f0ff' },
              { icon: '🤝', title: 'Business Growth', desc: 'Every feature we build is designed with one goal: helping Nigerian businesses attract more customers, generate more leads, and grow revenue.', color: '#8b5cf6' },
              { icon: '🔒', title: 'Trust & Transparency', desc: 'Real-time analytics, honest pricing, and verified business badges ensure our platform is one you can build your brand on with confidence.', color: '#ff0080' },
              { icon: '🌍', title: 'Africa First', desc: 'We are proudly Nigerian and pan-African. Our platform is built for African realities — from Naira payments to local business categories.', color: '#10b981' },
              { icon: '💡', title: 'AI-Powered', desc: 'From our campaign assistant to smart recommendations, AI is woven into every layer of our platform to give advertisers a competitive edge.', color: '#f59e0b' },
              { icon: '📈', title: 'Results Driven', desc: 'We measure success in the results our advertisers get. Our average client sees 280% ROI within the first 6 months on the platform.', color: '#00f0ff' },
            ].map(v => (
              <GlassCard key={v.title} style={{ padding: 28 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${v.color}15`, border: `1px solid ${v.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 18 }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7 }}>{v.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <NeonDivider />

      {/* ── TEAM ── */}
      <section className="section">
        <div className="container">
          <SectionHeader
            label="THE TEAM"
            title={<>Meet the <span className="gradient-text">Builders</span></>}
            sub="A passionate team of Nigerian tech entrepreneurs, marketers, and designers building Africa's advertising future."
            center
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { name: 'Edward Zethan', role: 'Founder & CEO', emoji: '👨🏾‍💻', color: '#00f0ff', bio: 'Serial entrepreneur & digital marketing expert. Built Rackyweb Global from the ground up.' },
              { name: 'Amara Okafor', role: 'CTO & Co-Founder', emoji: '👩🏾‍💻', color: '#8b5cf6', bio: '10+ years in software engineering. Led teams at multiple Nigerian unicorns.' },
              { name: 'Chidi Nwosu', role: 'Head of Growth', emoji: '📊', color: '#ff0080', bio: 'Growth hacker who scaled 3 startups from zero to 100K users. Ex-Paystack.' },
              { name: 'Fatima Bello', role: 'AI & Data Lead', emoji: '🤖', color: '#10b981', bio: 'Machine learning engineer specializing in ad targeting and predictive analytics.' },
            ].map(m => (
              <GlassCard key={m.name} style={{ textAlign: 'center', padding: 28 }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%', margin: '0 auto 16px',
                  background: `linear-gradient(135deg, ${m.color}25, ${m.color}10)`,
                  border: `2px solid ${m.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36,
                  boxShadow: `0 0 20px ${m.color}25`,
                }}>{m.emoji}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: 11, color: m.color, fontFamily: 'var(--font-mono)', letterSpacing: 1, marginBottom: 12 }}>{m.role}</div>
                <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6 }}>{m.bio}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <NeonDivider />

      {/* ── CONTACT ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>

            {/* Contact Info */}
            <div>
              <SectionHeader
                label="GET IN TOUCH"
                title={<>Let's <span className="gradient-text-cp">Talk Business</span></>}
                sub="Have questions, want a custom enterprise plan, or need help with your campaigns? We're here for you."
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: '💬', label: 'WhatsApp', value: '+2347087806251', href: 'https://wa.me/2347087806251', color: '#25D366' },
                  { icon: '✉️', label: 'Email', value: 'edwardzethan792@gmail.com', href: 'mailto:edwardzethan792@gmail.com', color: '#00f0ff' },
                  { icon: '🌐', label: 'Website', value: 'www.rackyweb.com', href: '#', color: '#8b5cf6' },
                  { icon: '📍', label: 'Location', value: 'Lagos, Nigeria 🇳🇬', href: '#', color: '#ff0080' },
                ].map(c => (
                  <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 12, padding: '14px 18px', transition: 'all 0.2s', textDecoration: 'none',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.color}35`; e.currentTarget.style.background = `${c.color}08`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                  >
                    <span style={{ fontSize: 22 }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: 11, color: '#6b7280', fontFamily: 'var(--font-mono)', letterSpacing: 1, marginBottom: 2 }}>{c.label.toUpperCase()}</div>
                      <div style={{ fontSize: 13, color: c.color, fontWeight: 600 }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div style={{ marginTop: 28 }}>
                <div style={{ fontSize: 12, color: '#6b7280', fontFamily: 'var(--font-mono)', letterSpacing: 2, marginBottom: 14 }}>FOLLOW US</div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {[
                    { label: '𝕏 Twitter', color: '#1DA1F2' },
                    { label: 'f Facebook', color: '#1877F2' },
                    { label: 'in LinkedIn', color: '#0A66C2' },
                    { label: '📷 Instagram', color: '#E1306C' },
                  ].map(s => (
                    <a key={s.label} href="#" style={{
                      padding: '7px 14px', background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8,
                      fontSize: 12, color: '#8892aa', transition: 'all 0.2s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = `${s.color}40`; }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#8892aa'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                    >{s.label}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <GlassCard style={{ padding: 32 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 24 }}>Send Us a Message</div>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 8 }}>Message Sent!</div>
                  <p style={{ color: '#6b7280', fontSize: 14 }}>We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn-secondary" style={{ marginTop: 20, fontSize: 11 }}>SEND ANOTHER</button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { label: 'Full Name *', key: 'name', type: 'text', placeholder: 'John Doe' },
                    { label: 'Email Address *', key: 'email', type: 'email', placeholder: 'john@example.com' },
                    { label: 'Subject', key: 'subject', type: 'text', placeholder: 'How can we help?' },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ fontSize: 11, color: '#8892aa', fontFamily: 'var(--font-display)', letterSpacing: 0.5, display: 'block', marginBottom: 7 }}>{f.label.toUpperCase()}</label>
                      <input className="input-field" type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} style={{ borderRadius: 10 }} />
                    </div>
                  ))}
                  <div>
                    <label style={{ fontSize: 11, color: '#8892aa', fontFamily: 'var(--font-display)', letterSpacing: 0.5, display: 'block', marginBottom: 7 }}>MESSAGE *</label>
                    <textarea className="input-field" rows={4} placeholder="Tell us about your business and what you need..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'none', borderRadius: 10 }} />
                  </div>
                  <button onClick={handleSend} className="btn-primary" style={{ fontSize: 12, marginTop: 4 }}>SEND MESSAGE →</button>
                </div>
              )}
            </GlassCard>
          </div>
        </div>
      </section>

      {toast && <Toast message={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
    </main>
  );
}
