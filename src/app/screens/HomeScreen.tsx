import { useState } from 'react';
import { Link } from 'react-router';
import confetti from 'canvas-confetti';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { Lock, Utensils, Bus, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { MoodFace, MoodType } from '../components/MoodFace';

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

const moodOptions: MoodType[] = ['motivated', 'calm', 'neutral', 'stressed', 'anxious'];

const topSpending = [
  { Icon: Lock, label: 'RENT', amount: '₹14,000' },
  { Icon: Utensils, label: 'FOOD', amount: '₹5,820' },
  { Icon: Bus, label: 'TRANSPORT', amount: '₹1,940' },
];

const transactions = [
  { id: 1, name: 'Zomato', time: 'Today, 1:22 PM', amount: '–₹340', positive: false, initials: 'Z', bg: '#FFEEE8' },
  { id: 2, name: 'Salary credited', time: 'Apr 1, 9:00 AM', amount: '+₹42,000', positive: true, initials: '✓', bg: 'rgba(111,207,151,0.15)', salaryBanner: true },
  { id: 3, name: 'Spotify', time: 'Mar 31, 12:00 AM', amount: '–₹119', positive: false, initials: 'S', bg: '#EDF6EE' },
];

const sparkData = [18, 24, 20, 28, 22, 32, 38, 45];

export function HomeScreen() {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [checkedIn, setCheckedIn] = useState(false);

  return (
    <div style={{ backgroundColor: '#FAF9F6' }}>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <div style={{ ...HERO_STYLE, padding: '48px 20px 72px' }}>
        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(250,249,246,0.6)' }}>
          <span>9:41</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>●●●</span>
            <span>WiFi</span>
          </div>
        </div>

        {/* Greeting + Profile link */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: 'rgba(250,249,246,0.7)', marginBottom: '2px' }}>
              Good evening,
            </div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '38px', fontStyle: 'italic', letterSpacing: '-0.02em', color: '#D4AF37', lineHeight: '1.1', marginBottom: '20px' }}>
              Priya
            </div>
          </div>
          <Link to="/profile" style={{ textDecoration: 'none', marginTop: '2px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#0A0B0B', border: '1px solid rgba(212,175,55,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 12px rgba(212,175,55,0.15)' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '18px', color: '#D4AF37' }}>P</span>
            </div>
          </Link>
        </div>

        {/* Balance label */}
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(250,249,246,0.5)', letterSpacing: '0.15em', marginBottom: '4px', fontWeight: 500 }}>
          AVAILABLE BALANCE
        </div>
        {/* Balance amount */}
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '52px', color: '#FAF9F6', letterSpacing: '-0.01em', lineHeight: '1', marginBottom: '6px' }}>
          <AnimatedNumber value={18240} />
        </div>
        {/* Salary context */}
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(250,249,246,0.6)', marginBottom: '16px' }}>
          of ₹42,000 · April 2025
        </div>

        {/* Insight line */}
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(250,249,246,0.7)', marginBottom: '12px' }}>
          28 days left ·{' '}
          <span style={{ color: '#D4AF37', fontWeight: '500' }}>₹651/day</span>
          {' '}to stay on track
        </div>

        {/* Progress bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: 'rgba(250,249,246,0.6)' }}>Spent this month</span>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D4AF37', fontWeight: 500 }}>62%</span>
        </div>
        <div style={{ width: '100%', height: '4px', borderRadius: '4px', backgroundColor: 'rgba(250,249,246,0.1)', overflow: 'hidden' }}>
          <div style={{ width: '62%', height: '100%', borderRadius: '4px', backgroundColor: '#D4AF37' }} />
        </div>
      </div>

      {/* ── FLOATING HEALTH PULSE CARD ───────────────────────── */}
      <div
        style={{
          ...FLOAT_CARD_STYLE,
          margin: '0 16px',
          marginTop: '-40px',
          borderRadius: '18px',
          padding: '20px',
          marginBottom: '16px',
        }}
      >
        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#508D69', display: 'inline-block' }} />
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(250,249,246,0.6)', letterSpacing: '0.15em', fontWeight: 500 }}>
            FINANCIAL HEALTH PULSE
          </span>
        </div>

        {/* Score */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '6px' }}>
          <motion.span
            animate={{ scale: [1, 1.02, 1], filter: ['drop-shadow(0 0 0px rgba(250,249,246,0))', 'drop-shadow(0 0 12px rgba(250,249,246,0.3))', 'drop-shadow(0 0 0px rgba(250,249,246,0))'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '58px', color: '#FAF9F6', lineHeight: '1', display: 'inline-block' }}
          >
            74
          </motion.span>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', color: 'rgba(250,249,246,0.5)' }}>/100</span>
        </div>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', fontStyle: 'italic', color: 'rgba(250,249,246,0.7)', marginBottom: '18px' }}>
          Steady — you saved 12% more than last month
        </div>

        {/* Sparkline bar chart */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '44px', marginBottom: '18px' }}>
          {sparkData.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${Math.round(h * 0.85)}px` }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
              style={{
                flex: 1,
                borderRadius: '3px',
                backgroundColor: i >= 6 ? '#D4AF37' : 'rgba(250,249,246,0.12)',
              }}
            />
          ))}
        </div>

        {/* Status pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { label: 'Saving on track', color: '#508D69' },
            { label: 'Food up 18%', color: '#D4AF37' },
            { label: 'No debt', color: 'rgba(250,249,246,0.7)' },
          ].map(({ label, color }) => (
            <div
              key={label}
              style={{
                padding: '4px 10px',
                borderRadius: '20px',
                border: `1px solid ${color === 'rgba(250,249,246,0.7)' ? 'rgba(250,249,246,0.2)' : color}`,
                fontFamily: 'Outfit, sans-serif',
                fontSize: '11px',
                color,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* ── MOOD CHECK-IN CARD ────────────────────────────────── */}
      {!checkedIn ? (
        <div
          style={{
            margin: '0 16px 20px',
            borderRadius: '14px',
            padding: '16px',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.03)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '3px', height: '40px', borderRadius: '4px', backgroundColor: '#D4AF37', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontStyle: 'italic', fontWeight: 500, color: '#161816', lineHeight: 1.2 }}>
                  Friday check-in — how did
                </div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontStyle: 'italic', fontWeight: 500, color: '#161816', lineHeight: 1.2 }}>
                  this week feel?
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              {moodOptions.map((mood) => (
                <div
                  key={mood}
                  onClick={() => setSelectedMood(mood)}
                  style={{ cursor: 'pointer', transition: 'transform 0.2s', transform: selectedMood === mood ? 'scale(1.1)' : 'scale(1)' }}
                >
                  <MoodFace mood={mood} size={32} selected={selectedMood === mood} />
                </div>
              ))}
            </div>
            {selectedMood && (
              <button
                onClick={() => {
                  setCheckedIn(true);
                  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '24px',
                  backgroundColor: '#0A0B0B',
                  color: '#D4AF37',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 500,
                  fontSize: '12px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Log it →
              </button>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            margin: '0 16px 20px',
            borderRadius: '14px',
            padding: '14px 16px',
            backgroundColor: 'rgba(212,175,55,0.08)',
            border: '1px solid rgba(212,175,55,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <MoodFace mood={selectedMood!} size={28} />
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', fontStyle: 'italic', fontWeight: 500, color: '#161816' }}>
            Mood logged. See your patterns →
          </span>
        </div>
      )}

      {/* ── TOP SPENDING ──────────────────────────────────────── */}
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: 500, color: '#161816' }}>Top spending</span>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#A4A496' }}>See all</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {topSpending.map(({ Icon, label, amount }) => (
            <div
              key={label}
              style={{
                borderRadius: '14px',
                padding: '16px 12px',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.03)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                transition: 'transform 0.2s',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#0A0B0B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                }}
              >
                <Icon size={16} color="#D4AF37" />
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '9px', color: '#A4A496', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 500 }}>
                {label}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#161816', fontWeight: 500 }}>
                {amount}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RECENT TRANSACTIONS ───────────────────────────────── */}
      <div style={{ padding: '0 20px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: 500, color: '#161816' }}>Recent</span>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#A4A496' }}>See all</span>
        </div>

        {transactions.map(({ id, name, time, amount, positive, initials, bg, salaryBanner }) => (
          <motion.div
            key={id}
            drag="x"
            dragConstraints={{ left: -50, right: 0 }}
            dragElastic={0.1}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: salaryBanner ? '12px 14px' : '14px 0',
              marginBottom: salaryBanner ? '8px' : '0',
              borderRadius: salaryBanner ? '12px' : '0',
              backgroundColor: salaryBanner ? 'rgba(212,175,55,0.06)' : 'transparent',
              border: salaryBanner ? '1px solid rgba(212,175,55,0.2)' : 'none',
              borderBottom: !salaryBanner ? '1px solid rgba(0,0,0,0.04)' : 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: salaryBanner ? bg : '#FFFFFF',
                  border: salaryBanner ? 'none' : '1px solid rgba(0,0,0,0.04)',
                  boxShadow: salaryBanner ? 'none' : '0 2px 8px rgba(0,0,0,0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: positive ? '#508D69' : '#888' }}>
                  {initials}
                </span>
              </div>
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: '#161816' }}>{name}</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#A4A496', marginTop: '2px' }}>{time}</div>
              </div>
            </div>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 600, color: positive ? '#508D69' : '#161816' }}>
              {amount}
            </span>
          </motion.div>
        ))}

        <Link
          to="/spend"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            marginTop: '20px',
            padding: '14px',
            borderRadius: '14px',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.03)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
            textDecoration: 'none',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            color: '#161816',
          }}
        >
          View all transactions
          <ChevronRight size={14} color="#999" />
        </Link>
      </div>
    </div>
  );
}
