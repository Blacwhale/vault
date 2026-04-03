import { ChevronRight, Star, Shield, Flame, Leaf, Castle, Trophy, Lock } from 'lucide-react';

const HERO_STYLE = {
  backgroundColor: '#0A0B0B',
  backgroundImage: `
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E"),
    linear-gradient(to bottom, transparent 50%, #0A0B0B 100%),
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    radial-gradient(circle at top right, rgba(212, 175, 55, 0.08) 0%, transparent 80%)
  `,
  backgroundSize: '150px 150px, 100% 100%, 24px 24px, 24px 24px, 100% 100%',
};

const FLOAT_CARD_STYLE = {
  backgroundColor: 'rgba(10, 11, 11, 0.85)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(255, 255, 255, 0.04)',
  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.15)',
};

const traitBars = [
  { label: 'Saver instinct', value: 72 },
  { label: 'Spending discipline', value: 68 },
  { label: 'Goal consistency', value: 55 },
];

const achievements = [
  { id: 1, Icon: Star, name: 'FIRST SAVE', unlocked: true },
  { id: 2, Icon: Shield, name: 'NO DEBT', unlocked: true },
  { id: 3, Icon: Flame, name: '7-DAY STREAK', unlocked: true },
  { id: 4, Icon: Leaf, name: '₹10K SAVED', unlocked: true },
  { id: 5, Icon: Castle, name: 'EMERGENCY READY', unlocked: false, progress: 68 },
  { id: 6, Icon: Trophy, name: 'GOAL CRUSHER', unlocked: false },
];

const reportCard = [
  { label: 'Savings rate', grade: 'A', note: 'Saved 18% of income', gradeColor: '#508D69' },
  { label: 'Spending control', grade: 'B+', note: 'Food went up but manageable', gradeColor: '#D4AF37' },
  { label: 'Goal progress', grade: 'B', note: 'On track for 2 of 3 goals', gradeColor: '#D4AF37' },
  { label: 'Mood balance', grade: 'A–', note: 'Calm week overall', gradeColor: '#508D69' },
];

const settingsRows = [
  { label: 'Linked accounts' },
  { label: 'Notification preferences' },
  { label: 'Currency & region' },
  { label: 'Export my data' },
  { label: 'Edit profile' },
];

export function ProfileScreen() {
  return (
    <div style={{ backgroundColor: '#FAF9F6' }}>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <div style={{ ...HERO_STYLE, padding: '48px 20px 80px' }}>
        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.5)' }}>
          <span>9:41</span>
          <span>●●● WiFi</span>
        </div>

        {/* Avatar + name */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#161816',
              border: '2px solid rgba(245,239,224,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '28px', color: '#F5EFE0' }}>P</span>
          </div>

          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontStyle: 'italic', color: '#F5EFE0' }}>
            Priya Sharma
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: 'rgba(245,239,224,0.4)', textAlign: 'center' }}>
            First job · Mumbai · Since Jan 2025
          </div>

          {/* Stat pills */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'Month 4' },
              { label: '74 avg pulse' },
              { label: '3 goals' },
            ].map(({ label }) => (
              <div
                key={label}
                style={{
                  padding: '5px 12px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(245,239,224,0.12)',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '11px',
                  color: 'rgba(245,239,224,0.7)',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FLOATING FINANCIAL IDENTITY CARD ─────────────────── */}
      <div
        style={{
          ...FLOAT_CARD_STYLE,
          margin: '0 16px',
          marginTop: '-44px',
          borderRadius: '18px',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        {/* Label */}
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(245,239,224,0.45)', letterSpacing: '0.14em', marginBottom: '10px' }}>
          YOUR MONEY PERSONALITY
        </div>

        {/* Personality */}
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontStyle: 'italic', color: '#F5EFE0', marginBottom: '10px', lineHeight: '1.2' }}>
          The Steady Builder
        </div>

        {/* Description */}
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontStyle: 'italic', color: 'rgba(245,239,224,0.45)', lineHeight: '1.6', marginBottom: '16px' }}>
          You spend carefully, save consistently, and avoid impulse decisions. Your emergency fund is growing — keep going.
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(245,239,224,0.12)', marginBottom: '16px' }} />

        {/* Trait bars */}
        {traitBars.map(({ label, value }) => (
          <div key={label} style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.6)' }}>{label}</span>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: 'rgba(245,239,224,0.45)' }}>{value}%</span>
            </div>
            <div style={{ width: '100%', height: '4px', borderRadius: '2px', backgroundColor: 'rgba(245,239,224,0.1)' }}>
              <div style={{ width: `${value}%`, height: '100%', borderRadius: '2px', backgroundColor: 'rgba(245,239,224,0.75)' }} />
            </div>
          </div>
        ))}
      </div>

      {/* ── ACHIEVEMENTS ──────────────────────────────────────── */}
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#222222', marginBottom: '14px' }}>
          Milestones
        </div>

        <div style={{ overflowX: 'auto', paddingBottom: '4px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            {achievements.map(({ id, Icon, name, unlocked, progress }) => (
              <div
                key={id}
                style={{
                  width: '72px',
                  height: '88px',
                  backgroundColor: unlocked ? '#0A0B0B' : '#FFFFFF',
                  border: '1px solid',
                  borderColor: unlocked ? '#333330' : '#E8E4DC',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  flexShrink: 0,
                  opacity: unlocked ? 1 : 0.5,
                  position: 'relative',
                  padding: '10px 6px',
                }}
              >
                {!unlocked && (
                  <div style={{ position: 'absolute', top: '6px', right: '6px' }}>
                    <Lock size={8} color="#CCCCCC" />
                  </div>
                )}
                <Icon
                  size={20}
                  color={unlocked ? 'rgba(245,239,224,0.85)' : '#CCCCCC'}
                  strokeWidth={1.5}
                />
                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '8px',
                    letterSpacing: '0.06em',
                    color: unlocked ? 'rgba(245,239,224,0.6)' : '#AAAAAA',
                    textAlign: 'center',
                    lineHeight: '1.3',
                  }}
                >
                  {name}
                </span>
                {progress && (
                  <div style={{ width: '40px', height: '3px', borderRadius: '2px', backgroundColor: 'rgba(245,239,224,0.15)' }}>
                    <div style={{ width: `${progress}%`, height: '100%', borderRadius: '2px', backgroundColor: 'rgba(245,239,224,0.5)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── REPORT CARD ───────────────────────────────────────── */}
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#222222', marginBottom: '12px' }}>
          April report card
        </div>

        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
            borderRadius: '14px',
            overflow: 'hidden',
          }}
        >
          {reportCard.map(({ label, grade, note, gradeColor }, i) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                borderBottom: i < reportCard.length - 1 ? '1px solid #F0EDE6' : 'none',
              }}
            >
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#222222', marginBottom: '2px' }}>
                  {label}
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999' }}>
                  {note}
                </div>
              </div>
              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '20px',
                  fontStyle: 'italic',
                  color: gradeColor,
                  flexShrink: 0,
                  marginLeft: '12px',
                }}
              >
                {grade}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SETTINGS ──────────────────────────────────────────── */}
      <div style={{ padding: '0 20px 32px' }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#222222', marginBottom: '12px' }}>
          Settings
        </div>

        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
            borderRadius: '14px',
            overflow: 'hidden',
          }}
        >
          {settingsRows.map(({ label }, i) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                height: '48px',
                borderBottom: i < settingsRows.length - 1 ? '1px solid #F0EDE6' : 'none',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#222222' }}>{label}</span>
              <ChevronRight size={14} color="#CCCCCC" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

