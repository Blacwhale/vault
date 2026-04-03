import { useState } from 'react';
import { Shield, Plane, Monitor, Plus } from 'lucide-react';
import { motion } from 'motion/react';

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

// SVG arc helper
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, startDeg: number, endDeg: number): string {
  const s = polarToCartesian(cx, cy, r, startDeg);
  const e = polarToCartesian(cx, cy, r, endDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
}

const ARC_START = -135;
const ARC_RANGE = 270;

function GoalArc({ percentage }: { percentage: number }) {
  const cx = 80, cy = 80, r = 65;
  const endDeg = ARC_START + ARC_RANGE * (percentage / 100);
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
      {/* Track */}
      <path
        d={describeArc(cx, cy, r, ARC_START, ARC_START + ARC_RANGE)}
        stroke="rgba(245,239,224,0.15)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Fill */}
      <path
        d={describeArc(cx, cy, r, ARC_START, endDeg)}
        stroke="rgba(245,239,224,0.85)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Center text */}
      <text x="80" y="74" textAnchor="middle" fill="rgba(245,239,224,0.9)" fontFamily="Playfair Display, serif" fontSize="24" fontStyle="italic">
        {percentage}%
      </text>
      <text x="80" y="92" textAnchor="middle" fill="rgba(245,239,224,0.4)" fontFamily="Inter, sans-serif" fontSize="10">
        GOALS DONE
      </text>
    </svg>
  );
}

const goals = [
  {
    id: 1,
    Icon: Shield,
    name: 'Emergency Fund',
    saved: 34000,
    target: 50000,
    progress: 68,
    status: 'On track' as const,
    deadline: 'by September 2025',
    insight: 'At this pace you\'ll hit it by September.',
    color: '#508D69',
  },
  {
    id: 2,
    Icon: Plane,
    name: 'Goa Trip',
    saved: 4650,
    target: 15000,
    progress: 31,
    status: 'Needs push' as const,
    deadline: 'by June 2025',
    insight: 'Save ₹1,400 more/month to make it by June.',
    color: '#D4AF37',
  },
  {
    id: 3,
    Icon: Monitor,
    name: 'New Laptop',
    saved: 2400,
    target: 20000,
    progress: 12,
    status: 'Just started' as const,
    deadline: 'by January 2026',
    insight: 'You\'ve just begun — ₹1,600/month gets you there by January.',
    color: '#5DCAA5',
  },
];

const statusConfig = {
  'On track': { bg: '#EAF3DE', text: '#3B6D11' },
  'Needs push': { bg: '#FAEEDA', text: '#854F0B' },
  'Just started': { bg: '#F2F0EC', text: '#888888' },
};

// Monthly timeline data (May–Oct)
const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
const monthlyData = [
  { emergency: 5000, goa: 1400, laptop: 1600 },
  { emergency: 5000, goa: 1400, laptop: 1600 },
  { emergency: 5000, goa: 1400, laptop: 1600 },
  { emergency: 5000, goa: 1400, laptop: 1600 },
  { emergency: 5000, goa: 0, laptop: 1600 },    // Goa done
  { emergency: 0, goa: 0, laptop: 1600 },       // Emergency done
];

export function GoalsScreen() {
  const [showAddGoal, setShowAddGoal] = useState(false);

  return (
    <div style={{ backgroundColor: '#FAF9F6' }}>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <div style={{ ...HERO_STYLE, padding: '48px 20px 80px', display: 'flex', flexDirection: 'column' }}>
        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.5)' }}>
          <span>9:41</span>
          <span>●●● WiFi</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Left: text */}
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(245,239,224,0.45)', letterSpacing: '0.16em', marginBottom: '8px' }}>
              YOUR GOALS
            </div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '42px', fontStyle: 'italic', color: '#F5EFE0', lineHeight: '1', marginBottom: '8px' }}>
              3 active
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.45)', maxWidth: '180px' }}>
              ₹8,200 saved toward goals this month
            </div>
          </div>

          {/* Right: Arc */}
          <GoalArc percentage={41} />
        </div>
      </div>

      {/* ── GOAL CARDS ───────────────────────────────────────── */}
      <div style={{ padding: '0 16px', marginTop: '-36px' }}>
        {goals.map(({ id, Icon, name, saved, target, progress, status, deadline, insight, color }) => {
          const cfg = statusConfig[status];
          return (
            <div
              key={id}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                borderRadius: '14px',
                padding: '16px',
                marginBottom: '12px',
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#0A0B0B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={14} color="#F5EFE0" />
                  </div>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#222222' }}>{name}</span>
                </div>
                <div style={{ padding: '4px 10px', borderRadius: '20px', backgroundColor: cfg.bg, fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: cfg.text, whiteSpace: 'nowrap' }}>
                  {status}
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: '#F0EDE6', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ width: `${progress}%`, height: '100%', borderRadius: '3px', backgroundColor: color }} />
              </div>

              {/* Amount row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#222222' }}>
                  ₹{saved.toLocaleString('en-IN')} saved
                </span>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#999999' }}>
                  ₹{(target - saved).toLocaleString('en-IN')} to go
                </span>
              </div>

              {/* Deadline */}
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '11px', fontStyle: 'italic', color: '#BBBBBB', marginBottom: '8px' }}>
                {deadline}
              </div>

              {/* Micro insight */}
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '12px', fontStyle: 'italic', color: '#888888' }}>
                "{insight}"
              </div>
            </div>
          );
        })}
      </div>

      {/* ── MONTHLY TIMELINE ─────────────────────────────────── */}
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#222222', marginBottom: '14px' }}>
          Your next 6 months
        </div>

        <div style={{ overflowX: 'auto', paddingBottom: '8px' }}>
          <div style={{ display: 'flex', gap: '10px', minWidth: 'max-content' }}>
            {months.map((month, i) => {
              const d = monthlyData[i];
              const total = d.emergency + d.goa + d.laptop;
              const maxTotal = 8000;
              return (
                <div
                  key={month}
                  style={{
                    width: '64px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                    borderRadius: '12px',
                    padding: '10px 8px 8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {/* Stacked bar */}
                  <div style={{ width: '28px', height: '60px', display: 'flex', flexDirection: 'column-reverse', borderRadius: '4px', overflow: 'hidden', gap: '1px' }}>
                    {d.laptop > 0 && (
                      <motion.div initial={{ height: 0 }} animate={{ height: `${(d.laptop / maxTotal) * 60}px` }} transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }} style={{ backgroundColor: '#5DCAA5', borderRadius: '2px' }} />
                    )}
                    {d.goa > 0 && (
                      <motion.div initial={{ height: 0 }} animate={{ height: `${(d.goa / maxTotal) * 60}px` }} transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }} style={{ backgroundColor: '#D4AF37', borderRadius: '2px' }} />
                    )}
                    {d.emergency > 0 && (
                      <motion.div initial={{ height: 0 }} animate={{ height: `${(d.emergency / maxTotal) * 60}px` }} transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }} style={{ backgroundColor: '#508D69', borderRadius: '2px' }} />
                    )}
                  </div>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#AAAAAA' }}>{month}</span>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '9px', color: '#CCCCCC' }}>₹{(total / 1000).toFixed(1)}k</span>
                </div>
              );
            })}

            {/* Legend */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '5px', paddingBottom: '4px', marginLeft: '4px' }}>
              {[
                { color: '#508D69', label: 'Emergency' },
                { color: '#D4AF37', label: 'Goa' },
                { color: '#5DCAA5', label: 'Laptop' },
              ].map(({ color, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: color, flexShrink: 0 }} />
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#AAAAAA', whiteSpace: 'nowrap' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── ADD GOAL BUTTON ───────────────────────────────────── */}
      <div style={{ padding: '0 16px 32px' }}>
        <button
          onClick={() => setShowAddGoal(!showAddGoal)}
          style={{
            width: '100%',
            height: '52px',
            borderRadius: '12px',
            backgroundColor: '#0A0B0B',
            color: '#F5EFE0',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '14px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          <Plus size={16} color="#F5EFE0" />
          Add a new goal
        </button>

        {showAddGoal && (
          <div
            style={{
              marginTop: '12px',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
              borderRadius: '14px',
              padding: '16px',
            }}
          >
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#222222', marginBottom: '12px' }}>
              What are you saving for?
            </div>
            <input
              placeholder="e.g. Vacation, Bike, Wedding fund..."
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                backgroundColor: '#FAF9F6',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '13px',
                color: '#222222',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              <input
                placeholder="Target amount (₹)"
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                  backgroundColor: '#FAF9F6',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '13px',
                  color: '#222222',
                  outline: 'none',
                }}
              />
              <button
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  backgroundColor: '#0A0B0B',
                  color: '#F5EFE0',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '13px',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                Create
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

