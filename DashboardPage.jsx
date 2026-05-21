// ═══════════════════════════════════════════════
//  RACKYWEB PROMOTE — DASHBOARD PAGE
// ═══════════════════════════════════════════════
import { useState } from 'react';
import { GlassCard, SectionHeader, ProgressBar, NeonDivider, Toast } from '../components/UI';
import { DASHBOARD_CAMPAIGNS } from '../data/data';

const TABS = ['Overview', 'Campaigns', 'Create Ad', 'Analytics', 'Notifications', 'Settings'];

export default function DashboardPage({ setPage }) {
  const [tab,   setTab]   = useState('Overview');
  const [toast, setToast] = useState(null);

  return (
    <main style={{ position: 'relative', zIndex: 1, paddingTop: 80, minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: 32, paddingBottom: 80 }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#00f0ff', letterSpacing: 3, marginBottom: 6 }}>
              ADVERTISER DASHBOARD
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3.5vw,36px)', fontWeight: 900, color: '#fff' }}>
              Welcome back, <span className="gradient-text-cp">LaunchPad Africa</span> 👋
            </h1>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn-secondary" style={{ fontSize: 11 }} onClick={() => setTab('Create Ad')}>+ NEW CAMPAIGN</button>
            <button className="btn-primary" style={{ fontSize: 11 }} onClick={() => setPage('plans')}>⬆ UPGRADE PLAN</button>
          </div>
        </div>

        {/* Plan Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(0,240,255,0.08))',
          border: '1px solid rgba(139,92,246,0.3)', borderRadius: 12, padding: '10px 20px', marginBottom: 32,
        }}>
          <span style={{ fontSize: 18 }}>🏆</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, color: '#8b5cf6', fontWeight: 700 }}>PRO PLAN</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ fontSize: 12, color: '#6b7280' }}>Renews Feb 28, 2025</span>
          <span style={{ fontSize: 11, color: '#10b981', fontFamily: 'var(--font-mono)' }}>● ACTIVE</span>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 36, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 6 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: '9px 18px', borderRadius: 10, border: 'none',
              background: tab === t ? 'rgba(0,240,255,0.1)' : 'none',
              color: tab === t ? '#00f0ff' : '#6b7280',
              fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: 0.8,
              cursor: 'pointer', transition: 'all 0.2s',
              boxShadow: tab === t ? '0 0 12px rgba(0,240,255,0.12)' : 'none',
              borderBottom: tab === t ? '1px solid rgba(0,240,255,0.3)' : '1px solid transparent',
            }}>{t.toUpperCase()}</button>
          ))}
        </div>

        {/* Tab Content */}
        {tab === 'Overview'       && <Overview setTab={setTab} />}
        {tab === 'Campaigns'      && <Campaigns setToast={setToast} />}
        {tab === 'Create Ad'      && <CreateAd setToast={setToast} setTab={setTab} />}
        {tab === 'Analytics'      && <Analytics />}
        {tab === 'Notifications'  && <Notifications />}
        {tab === 'Settings'       && <Settings setToast={setToast} />}
      </div>

      {toast && <Toast message={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
    </main>
  );
}

// ── OVERVIEW TAB ─────────────────────────────────────────────
function Overview({ setTab }) {
  const metrics = [
    { label: 'Total Views',    value: '41,240', change: '+18%', icon: '👁',  color: '#00f0ff' },
    { label: 'Total Clicks',   value: '5,723',  change: '+12%', icon: '🖱',  color: '#8b5cf6' },
    { label: 'Total Leads',    value: '320',    change: '+34%', icon: '🎯',  color: '#ff0080' },
    { label: 'Revenue (Est.)', value: '₦284K',  change: '+22%', icon: '💰',  color: '#10b981' },
  ];

  return (
    <div>
      {/* Key Metrics */}
      <div className="grid-4" style={{ marginBottom: 32 }}>
        {metrics.map(m => (
          <GlassCard key={m.label} style={{ padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div style={{ fontSize: 28 }}>{m.icon}</div>
              <span style={{ fontSize: 11, color: '#10b981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 20, padding: '3px 8px', fontFamily: 'var(--font-mono)' }}>
                {m.change}
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 900, color: m.color, marginBottom: 4 }}>{m.value}</div>
            <div style={{ fontSize: 12, color: '#6b7280' }}>{m.label}</div>
          </GlassCard>
        ))}
      </div>

      {/* Mini chart placeholder */}
      <div className="grid-2" style={{ marginBottom: 32 }}>
        <GlassCard>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Views This Week</div>
          <MiniBarChart data={[40, 65, 45, 80, 55, 90, 75]} color="#00f0ff" />
        </GlassCard>
        <GlassCard>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Clicks This Week</div>
          <MiniBarChart data={[20, 35, 28, 50, 33, 60, 45]} color="#8b5cf6" />
        </GlassCard>
      </div>

      {/* Active campaigns summary */}
      <GlassCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#fff' }}>Active Campaigns</div>
          <button onClick={() => setTab('Campaigns')} style={{ background: 'none', border: 'none', color: '#00f0ff', fontSize: 12, cursor: 'pointer', fontFamily: 'var(--font-display)' }}>VIEW ALL →</button>
        </div>
        {DASHBOARD_CAMPAIGNS.filter(c => c.status === 'active').map(c => (
          <div key={c.id} style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: '#e8eaf0', fontWeight: 600 }}>{c.name}</span>
              <span style={{ fontSize: 11, color: '#10b981', fontFamily: 'var(--font-mono)' }}>● LIVE</span>
            </div>
            <ProgressBar value={c.spent} max={c.budget} color="#00f0ff" label={`Budget: ₦${c.spent.toLocaleString()} / ₦${c.budget.toLocaleString()}`} />
            <div style={{ display: 'flex', gap: 20, marginTop: 8, fontSize: 11, color: '#6b7280' }}>
              <span>👁 {c.views.toLocaleString()} views</span>
              <span>🖱 {c.clicks.toLocaleString()} clicks</span>
              <span>🎯 {c.leads} leads</span>
            </div>
          </div>
        ))}
      </GlassCard>
    </div>
  );
}

function MiniBarChart({ data, color }) {
  const max = Math.max(...data);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 80 }}>
      {data.map((v, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{
            flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end',
          }}>
            <div style={{
              width: '100%',
              height: `${(v / max) * 100}%`,
              minHeight: 4,
              background: `linear-gradient(180deg, ${color}, ${color}44)`,
              borderRadius: '4px 4px 0 0',
              transition: 'height 1s ease',
              boxShadow: `0 0 8px ${color}40`,
            }} />
          </div>
          <span style={{ fontSize: 9, color: '#6b7280', fontFamily: 'var(--font-mono)' }}>{days[i]}</span>
        </div>
      ))}
    </div>
  );
}

// ── CAMPAIGNS TAB ─────────────────────────────────────────────
function Campaigns({ setToast }) {
  const [campaigns, setCampaigns] = useState(DASHBOARD_CAMPAIGNS);

  const toggleStatus = (id) => {
    setCampaigns(cs => cs.map(c => c.id === id
      ? { ...c, status: c.status === 'active' ? 'paused' : 'active' }
      : c
    ));
    setToast({ msg: '✅ Campaign status updated!', type: 'success' });
  };

  const statusColor = { active: '#10b981', paused: '#f59e0b', completed: '#6b7280' };
  const statusLabel = { active: '● LIVE', paused: '⏸ PAUSED', completed: '✓ DONE' };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
        <button className="btn-primary" style={{ fontSize: 11 }}>+ NEW CAMPAIGN</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {campaigns.map(c => (
          <GlassCard key={c.id} style={{ padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{c.name}</div>
                <div style={{ display: 'flex', gap: 12, fontSize: 11, color: '#6b7280' }}>
                  <span>{c.startDate} → {c.endDate}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11, color: statusColor[c.status], fontFamily: 'var(--font-mono)', background: `${statusColor[c.status]}15`, padding: '4px 10px', borderRadius: 20 }}>
                  {statusLabel[c.status]}
                </span>
                {c.status !== 'completed' && (
                  <button onClick={() => toggleStatus(c.id)} style={{
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    color: '#e8eaf0', borderRadius: 8, padding: '6px 14px', cursor: 'pointer', fontSize: 11,
                  }}>{c.status === 'active' ? 'Pause' : 'Resume'}</button>
                )}
                <button style={{ background: 'rgba(255,0,128,0.07)', border: '1px solid rgba(255,0,128,0.2)', color: '#ff0080', borderRadius: 8, padding: '6px 14px', cursor: 'pointer', fontSize: 11 }}>Delete</button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 16, marginBottom: 16 }}>
              {[
                { label: 'Views', value: c.views.toLocaleString(), color: '#00f0ff' },
                { label: 'Clicks', value: c.clicks.toLocaleString(), color: '#8b5cf6' },
                { label: 'Leads', value: c.leads, color: '#ff0080' },
                { label: 'CTR', value: `${((c.clicks / c.views) * 100).toFixed(1)}%`, color: '#10b981' },
              ].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: '12px 14px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <ProgressBar value={c.spent} max={c.budget} color="#00f0ff" label={`Spent: ₦${c.spent.toLocaleString()} of ₦${c.budget.toLocaleString()} budget`} />
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

// ── CREATE AD TAB ─────────────────────────────────────────────
function CreateAd({ setToast, setTab }) {
  const [form, setForm] = useState({
    businessName: '', category: '', tagline: '', description: '',
    website: '', whatsapp: '', country: 'Nigeria', plan: 'Free',
  });
  const [step, setStep] = useState(1);

  const CATS = ['Tech', 'Fashion', 'Education', 'Restaurants', 'Media', 'AI', 'Finance', 'Real Estate', 'Events', 'Healthcare'];

  const handleSubmit = () => {
    setToast({ msg: '🚀 Your ad has been submitted for review!', type: 'success' });
    setTimeout(() => setTab('Campaigns'), 1500);
  };

  return (
    <div style={{ maxWidth: 700 }}>
      {/* Step indicator */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 36, alignItems: 'center' }}>
        {[1, 2, 3].map(s => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: step >= s ? 'linear-gradient(135deg, #00f0ff, #8b5cf6)' : 'rgba(255,255,255,0.05)',
              border: step >= s ? 'none' : '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 800,
              color: step >= s ? '#050816' : '#6b7280',
            }}>{s}</div>
            <span style={{ fontSize: 12, color: step >= s ? '#e8eaf0' : '#6b7280', fontFamily: 'var(--font-display)' }}>
              {['Business Info', 'Ad Details', 'Review'][s - 1]}
            </span>
            {s < 3 && <div style={{ width: 40, height: 1, background: step > s ? '#00f0ff' : 'rgba(255,255,255,0.1)', marginLeft: 4, marginRight: 4 }} />}
          </div>
        ))}
      </div>

      <GlassCard style={{ padding: 32 }}>
        {step === 1 && (
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 24 }}>Business Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Field label="Business Name" value={form.businessName} onChange={v => setForm({ ...form, businessName: v })} placeholder="e.g. LaunchPad Africa" />
              <div>
                <label style={{ fontSize: 12, color: '#8892aa', fontFamily: 'var(--font-display)', letterSpacing: 0.5, display: 'block', marginBottom: 8 }}>CATEGORY</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {CATS.map(c => (
                    <button key={c} onClick={() => setForm({ ...form, category: c })}
                      className={`tag ${form.category === c ? 'active' : ''}`}
                      style={{ fontSize: 12 }}>{c}</button>
                  ))}
                </div>
              </div>
              <Field label="Website URL" value={form.website} onChange={v => setForm({ ...form, website: v })} placeholder="https://yourbusiness.com" />
              <Field label="WhatsApp Number" value={form.whatsapp} onChange={v => setForm({ ...form, whatsapp: v })} placeholder="+234 801 234 5678" />
            </div>
            <button onClick={() => setStep(2)} className="btn-primary" style={{ marginTop: 28, fontSize: 12 }}>NEXT: AD DETAILS →</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 24 }}>Ad Details</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Field label="Tagline (Short Hook)" value={form.tagline} onChange={v => setForm({ ...form, tagline: v })} placeholder="e.g. Nigeria's #1 Startup Accelerator" />
              <div>
                <label style={{ fontSize: 12, color: '#8892aa', fontFamily: 'var(--font-display)', letterSpacing: 0.5, display: 'block', marginBottom: 8 }}>DESCRIPTION</label>
                <textarea
                  className="input-field"
                  rows={5}
                  placeholder="Describe your business, products, or services. What makes you unique?"
                  value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  style={{ resize: 'vertical', borderRadius: 10 }}
                />
                <div style={{ textAlign: 'right', fontSize: 11, color: '#6b7280', marginTop: 4 }}>{form.description.length}/500</div>
              </div>
              <div>
                <label style={{ fontSize: 12, color: '#8892aa', fontFamily: 'var(--font-display)', letterSpacing: 0.5, display: 'block', marginBottom: 8 }}>AD PLAN</label>
                {['Free', 'Starter', 'Pro', 'Enterprise'].map(p => (
                  <label key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', cursor: 'pointer' }}>
                    <input type="radio" name="plan" value={p} checked={form.plan === p} onChange={() => setForm({ ...form, plan: p })} style={{ accentColor: '#00f0ff' }} />
                    <span style={{ fontSize: 13, color: form.plan === p ? '#00f0ff' : '#e8eaf0' }}>{p}</span>
                  </label>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
              <button onClick={() => setStep(1)} className="btn-secondary" style={{ fontSize: 12 }}>← BACK</button>
              <button onClick={() => setStep(3)} className="btn-primary" style={{ fontSize: 12 }}>NEXT: REVIEW →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 24 }}>Review Your Ad</h3>
            <div style={{ background: 'rgba(0,240,255,0.04)', border: '1px solid rgba(0,240,255,0.15)', borderRadius: 14, padding: 24, marginBottom: 24 }}>
              {[
                ['Business Name', form.businessName || '—'],
                ['Category', form.category || '—'],
                ['Tagline', form.tagline || '—'],
                ['Website', form.website || '—'],
                ['WhatsApp', form.whatsapp || '—'],
                ['Plan', form.plan],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '10px 0', fontSize: 13 }}>
                  <span style={{ color: '#6b7280' }}>{k}</span>
                  <span style={{ color: '#e8eaf0', fontWeight: 600, textAlign: 'right', maxWidth: '60%' }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 24, padding: '12px 16px', background: 'rgba(255,180,0,0.06)', border: '1px solid rgba(255,180,0,0.15)', borderRadius: 10 }}>
              ℹ️ Your ad will be reviewed within 24 hours before going live.
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setStep(2)} className="btn-secondary" style={{ fontSize: 12 }}>← BACK</button>
              <button onClick={handleSubmit} className="btn-primary" style={{ fontSize: 12 }}>🚀 SUBMIT AD</button>
            </div>
          </div>
        )}
      </GlassCard>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label style={{ fontSize: 12, color: '#8892aa', fontFamily: 'var(--font-display)', letterSpacing: 0.5, display: 'block', marginBottom: 8 }}>{label.toUpperCase()}</label>
      <input className="input-field" type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} style={{ borderRadius: 10 }} />
    </div>
  );
}

// ── ANALYTICS TAB ─────────────────────────────────────────────
function Analytics() {
  const weekData = [
    { day: 'Mon', views: 1240, clicks: 98 },
    { day: 'Tue', views: 1890, clicks: 152 },
    { day: 'Wed', views: 1560, clicks: 120 },
    { day: 'Thu', views: 2400, clicks: 210 },
    { day: 'Fri', views: 1980, clicks: 165 },
    { day: 'Sat', views: 3100, clicks: 280 },
    { day: 'Sun', views: 2750, clicks: 230 },
  ];
  const maxViews = Math.max(...weekData.map(d => d.views));

  return (
    <div>
      <div className="grid-4" style={{ marginBottom: 28 }}>
        {[
          { label: 'Avg. CTR',      value: '8.4%',   color: '#00f0ff', icon: '📊' },
          { label: 'Conversion',    value: '5.6%',   color: '#8b5cf6', icon: '🎯' },
          { label: 'Cost/Lead',     value: '₦890',   color: '#ff0080', icon: '💸' },
          { label: 'ROI',           value: '340%',   color: '#10b981', icon: '📈' },
        ].map(m => (
          <GlassCard key={m.label} style={{ padding: 20, textAlign: 'center' }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{m.icon}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 900, color: m.color }}>{m.value}</div>
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>{m.label}</div>
          </GlassCard>
        ))}
      </div>

      <GlassCard style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 24 }}>Weekly Performance</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 160 }}>
          {weekData.map(d => (
            <div key={d.day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3, flex: 1, justifyContent: 'flex-end' }}>
                <div style={{ width: '100%', height: `${(d.clicks / maxViews) * 140}px`, background: 'linear-gradient(180deg, #8b5cf6, #8b5cf644)', borderRadius: '4px 4px 0 0', minHeight: 4 }} />
                <div style={{ width: '100%', height: `${(d.views / maxViews) * 140}px`, background: 'linear-gradient(180deg, #00f0ff, #00f0ff44)', borderRadius: '4px 4px 0 0', minHeight: 4 }} />
              </div>
              <span style={{ fontSize: 10, color: '#6b7280', fontFamily: 'var(--font-mono)' }}>{d.day}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 20, marginTop: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div style={{ width: 10, height: 10, borderRadius: 2, background: '#00f0ff' }} /><span style={{ fontSize: 11, color: '#6b7280' }}>Views</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div style={{ width: 10, height: 10, borderRadius: 2, background: '#8b5cf6' }} /><span style={{ fontSize: 11, color: '#6b7280' }}>Clicks</span></div>
        </div>
      </GlassCard>

      <GlassCard>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Traffic Sources</div>
        {[
          { source: 'Direct Search', pct: 42, color: '#00f0ff' },
          { source: 'Homepage Feature', pct: 28, color: '#8b5cf6' },
          { source: 'Category Browse', pct: 18, color: '#ff0080' },
          { source: 'Referral Links', pct: 12, color: '#10b981' },
        ].map(s => (
          <div key={s.source} style={{ marginBottom: 16 }}>
            <ProgressBar value={s.pct} max={100} color={s.color} label={s.source} />
          </div>
        ))}
      </GlassCard>
    </div>
  );
}

// ── NOTIFICATIONS TAB ─────────────────────────────────────────
function Notifications() {
  const notes = [
    { icon: '🚀', title: 'Campaign going live!', desc: 'LaunchPad Summer Campaign is now live and receiving traffic.', time: '2 min ago', unread: true, color: '#10b981' },
    { icon: '🎯', title: 'New lead captured', desc: 'A potential customer clicked your WhatsApp button from search results.', time: '15 min ago', unread: true, color: '#00f0ff' },
    { icon: '📊', title: 'Weekly report ready', desc: 'Your week 4 analytics report is ready. Views up 18%.', time: '1 hr ago', unread: true, color: '#8b5cf6' },
    { icon: '⭐', title: 'Featured slot available', desc: 'A homepage featured slot just opened. Upgrade to claim it.', time: '3 hrs ago', unread: false, color: '#f59e0b' },
    { icon: '💬', title: 'Ad approved', desc: 'Your Product Launch - NairaAI v2 ad has been approved.', time: '1 day ago', unread: false, color: '#10b981' },
    { icon: '💰', title: 'Payment confirmed', desc: 'Your Pro plan subscription was renewed. ₦20,000 charged.', time: '2 days ago', unread: false, color: '#ff0080' },
  ];

  return (
    <div style={{ maxWidth: 640 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontSize: 13, color: '#6b7280', fontFamily: 'var(--font-mono)' }}>{notes.filter(n => n.unread).length} UNREAD</span>
        <button style={{ background: 'none', border: 'none', color: '#00f0ff', cursor: 'pointer', fontSize: 12, fontFamily: 'var(--font-display)' }}>MARK ALL READ</button>
      </div>
      {notes.map((n, i) => (
        <div key={i} style={{
          display: 'flex', gap: 14, padding: '16px 18px', marginBottom: 10,
          background: n.unread ? 'rgba(0,240,255,0.03)' : 'rgba(255,255,255,0.02)',
          border: `1px solid ${n.unread ? 'rgba(0,240,255,0.15)' : 'rgba(255,255,255,0.06)'}`,
          borderRadius: 12, transition: 'all 0.2s',
        }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${n.color}18`, border: `1px solid ${n.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
            {n.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
              <span style={{ fontWeight: 700, fontSize: 13, color: n.unread ? '#fff' : '#8892aa' }}>{n.title}</span>
              {n.unread && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00f0ff', flexShrink: 0, marginTop: 4 }} />}
            </div>
            <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>{n.desc}</div>
            <div style={{ fontSize: 11, color: '#4b5563', fontFamily: 'var(--font-mono)' }}>{n.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── SETTINGS TAB ──────────────────────────────────────────────
function Settings({ setToast }) {
  const [profile, setProfile] = useState({ name: 'LaunchPad Africa', email: 'hello@launchpadafrica.com', phone: '+2348012345678', bio: 'The #1 startup accelerator in West Africa.' });
  const [notifs, setNotifs] = useState({ leads: true, campaigns: true, reports: false, promotions: true });

  return (
    <div style={{ maxWidth: 680 }}>
      <GlassCard style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 22 }}>Profile Settings</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[['Business Name', 'name'], ['Email', 'email'], ['Phone', 'phone']].map(([l, k]) => (
            <Field key={k} label={l} value={profile[k]} onChange={v => setProfile({ ...profile, [k]: v })} placeholder={l} />
          ))}
          <div>
            <label style={{ fontSize: 12, color: '#8892aa', fontFamily: 'var(--font-display)', letterSpacing: 0.5, display: 'block', marginBottom: 8 }}>BIO</label>
            <textarea className="input-field" rows={3} value={profile.bio} onChange={e => setProfile({ ...profile, bio: e.target.value })} style={{ resize: 'none', borderRadius: 10 }} />
          </div>
        </div>
        <button className="btn-primary" style={{ marginTop: 24, fontSize: 11 }} onClick={() => setToast({ msg: '✅ Profile updated!', type: 'success' })}>SAVE CHANGES</button>
      </GlassCard>

      <GlassCard>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 22 }}>Notification Preferences</div>
        {[
          ['leads',     'New Lead Notifications', 'Get notified when someone clicks your contact button'],
          ['campaigns', 'Campaign Updates',       'Status changes, approvals, and expirations'],
          ['reports',   'Weekly Reports',         'Automated weekly performance summaries'],
          ['promotions','Platform Promotions',    'Special offers, new features, and upgrades'],
        ].map(([k, title, desc]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#e8eaf0', marginBottom: 2 }}>{title}</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>{desc}</div>
            </div>
            <button onClick={() => setNotifs({ ...notifs, [k]: !notifs[k] })} style={{
              width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer',
              background: notifs[k] ? 'linear-gradient(90deg, #00f0ff, #8b5cf6)' : 'rgba(255,255,255,0.1)',
              position: 'relative', transition: 'all 0.3s', flexShrink: 0,
            }}>
              <div style={{
                width: 18, height: 18, borderRadius: '50%', background: '#fff',
                position: 'absolute', top: 3, left: notifs[k] ? 23 : 3,
                transition: 'left 0.3s',
              }} />
            </button>
          </div>
        ))}
      </GlassCard>
    </div>
  );
}
