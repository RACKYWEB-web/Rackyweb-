// ═══════════════════════════════════════════════
//  RACKYWEB PROMOTE — AI AD ASSISTANT
// ═══════════════════════════════════════════════
import { useState, useRef, useEffect } from 'react';

const SUGGESTIONS = [
  'Help me create an ad',
  'Suggest a campaign title',
  'Which plan is right for me?',
  'Marketing tips for my business',
  'How to boost visibility?',
];

const BOT_REPLIES = {
  default: [
    "Great question! For maximum visibility on Rackyweb Promote, I'd recommend starting with our **Pro Plan** — it includes homepage placement and AI insights. 🚀",
    "Let me help you craft a winning ad! Tell me your business name, category, and unique selling point, and I'll generate a compelling description for you.",
    "Based on successful campaigns in our network, businesses with clear CTAs and WhatsApp integration get **3x more leads**. Want me to optimize your ad?",
    "Our top-performing ads include a punchy headline (under 10 words), a clear benefit statement, and a direct contact button. Let me draft one for you!",
    "I analyzed 10,000+ campaigns on Rackyweb. The secret formula: **Emotion + Benefit + Urgency**. Want a custom campaign script?",
  ],
  greet: "👋 Welcome to Rackyweb AI Assistant! I'm here to help you create killer ads, grow your business, and dominate your market. What can I help you with today?",
};

export default function AIAssistant() {
  const [open, setOpen]     = useState(false);
  const [msgs, setMsgs]     = useState([{ role: 'bot', text: BOT_REPLIES.greet }]);
  const [input, setInput]   = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [msgs, open]);

  const sendMsg = async (text) => {
    const userText = text || input.trim();
    if (!userText) return;
    setInput('');
    setMsgs(m => [...m, { role: 'user', text: userText }]);
    setTyping(true);
    await new Promise(r => setTimeout(r, 900 + Math.random() * 800));
    const reply = BOT_REPLIES.default[Math.floor(Math.random() * BOT_REPLIES.default.length)];
    setTyping(false);
    setMsgs(m => [...m, { role: 'bot', text: reply }]);
  };

  return (
    <>
      {/* ── Chat Window ── */}
      <div style={{
        position: 'fixed', bottom: 90, right: 24, zIndex: 990,
        width: 'min(360px, calc(100vw - 48px)',
        maxHeight: open ? 500 : 0,
        overflow: 'hidden',
        background: 'rgba(5,8,22,0.97)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(0,240,255,0.2)',
        borderRadius: 20,
        boxShadow: '0 0 60px rgba(0,240,255,0.12), 0 20px 60px rgba(0,0,0,0.6)',
        transition: 'max-height 0.4s cubic-bezier(.4,0,.2,1)',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid rgba(0,240,255,0.1)',
          display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, flexShrink: 0,
            boxShadow: '0 0 16px rgba(0,240,255,0.4)',
            animation: 'glow-pulse 3s infinite',
          }}>🤖</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 800, color: '#fff' }}>
              RackyAI Assistant
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00f0ff', animation: 'pulse 2s infinite' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#00f0ff' }}>ONLINE · AI POWERED</span>
            </div>
          </div>
          <button onClick={() => setOpen(false)} style={{
            marginLeft: 'auto', background: 'none', border: 'none',
            color: '#6b7280', fontSize: 20, cursor: 'pointer', lineHeight: 1,
          }}>×</button>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px' }} className="no-scrollbar">
          {msgs.map((m, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 12,
            }}>
              <div style={{
                maxWidth: '82%',
                background: m.role === 'user'
                  ? 'linear-gradient(135deg, #00f0ff22, #8b5cf622)'
                  : 'rgba(255,255,255,0.05)',
                border: m.role === 'user'
                  ? '1px solid rgba(0,240,255,0.25)'
                  : '1px solid rgba(255,255,255,0.07)',
                borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                padding: '10px 14px',
                fontSize: 13, lineHeight: 1.6,
                color: m.role === 'user' ? '#e8eaf0' : '#c8cfe0',
                animation: 'fadeInUp 0.3s ease',
              }}>
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div style={{ display: 'flex', gap: 5, padding: '8px 14px', animation: 'fadeInUp 0.2s ease' }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#00f0ff',
                  animation: `pulse 1.2s ${i * 0.2}s infinite`,
                }} />
              ))}
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick Suggestions */}
        <div style={{ padding: '8px 12px', display: 'flex', gap: 6, overflowX: 'auto', flexShrink: 0 }} className="no-scrollbar">
          {SUGGESTIONS.map(s => (
            <button key={s} onClick={() => sendMsg(s)} style={{
              background: 'rgba(0,240,255,0.06)', border: '1px solid rgba(0,240,255,0.15)',
              borderRadius: 20, padding: '5px 12px', color: '#00f0ff',
              fontSize: 11, fontFamily: 'var(--font-mono)', cursor: 'pointer',
              whiteSpace: 'nowrap', transition: 'all 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,240,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,240,255,0.06)'}
            >{s}</button>
          ))}
        </div>

        {/* Input */}
        <div style={{
          padding: '12px 16px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', gap: 8, flexShrink: 0,
        }}>
          <input
            className="input-field"
            placeholder="Ask me anything..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMsg()}
            style={{ borderRadius: 10, fontSize: 13 }}
          />
          <button
            onClick={() => sendMsg()}
            style={{
              background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)',
              border: 'none', borderRadius: 10, width: 42, height: 42,
              cursor: 'pointer', fontSize: 16, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 16px rgba(0,240,255,0.3)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >➤</button>
        </div>
      </div>

      {/* ── FAB Button ── */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 991,
          width: 58, height: 58, borderRadius: '50%',
          background: open
            ? 'linear-gradient(135deg, #ff0080, #8b5cf6)'
            : 'linear-gradient(135deg, #00f0ff, #8b5cf6)',
          border: 'none', cursor: 'pointer', fontSize: 24,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: open
            ? '0 0 30px rgba(255,0,128,0.5)'
            : '0 0 30px rgba(0,240,255,0.5)',
          transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
          transform: open ? 'rotate(0deg)' : 'rotate(0deg)',
          animation: !open ? 'glow-pulse 3s infinite' : 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {open ? '✕' : '🤖'}
      </button>

      {/* Pulse ring */}
      {!open && (
        <div style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 990,
          width: 58, height: 58, borderRadius: '50%',
          border: '2px solid rgba(0,240,255,0.4)',
          animation: 'orbit-ring 2s ease-out infinite',
          pointerEvents: 'none',
        }} />
      )}

      <style>{`
        @keyframes orbit-ring {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </>
  );
}
