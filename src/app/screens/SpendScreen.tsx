import { motion } from 'motion/react';
import { AnimatedNumber } from '../components/AnimatedNumber';

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

// April 2025 daily spend data (April 1 = Tuesday)
const dailySpend: Record<number, number> = {
  1: 0, 2: 340, 3: 120, 4: 890, 5: 2200,
  6: 1500, 7: 450, 8: 1200, 9: 340, 10: 890,
  11: 280, 12: 2400, 13: 660, 14: 890, 15: 340,
  16: 180, 17: 1100, 18: 890, 19: 2100, 20: 780,
  21: 450, 22: 340, 23: 890, 24: 1200, 25: 560,
  26: 1800, 27: 2300, 28: 460, 29: 890, 30: 340,
};

// April 1 = Tuesday → offset = 1 (Mon-based grid)
const START_OFFSET = 1;

const getSpendColor = (amount: number): string => {
  if (amount === 0) return '#FAF9F6';
  if (amount < 200) return '#FFF3E0';
  if (amount < 800) return 'rgba(239,159,39,0.42)';
  if (amount < 2000) return '#D4AF37';
  return '#BA5A5A';
};

const getSpendTextColor = (amount: number): string => {
  if (amount === 0) return '#CCCCCC';
  if (amount < 200) return '#CCA86E';
  if (amount < 2000) return 'rgba(0,0,0,0.45)';
  return 'rgba(255,255,255,0.7)';
};

const categories = [
  { label: 'RENT', amount: 14000, percentage: 59, color: 'rgba(245,239,224,0.82)' },
  { label: 'FOOD', amount: 5820, percentage: 24, color: '#D4AF37' },
  { label: 'TRANSPORT', amount: 1940, percentage: 8, color: '#5DCAA5' },
  { label: 'SUBSCRIPTIONS', amount: 890, percentage: 4, color: 'rgba(245,239,224,0.35)' },
  { label: 'OTHER', amount: 1110, percentage: 5, color: 'rgba(245,239,224,0.2)' },
];

const unusualSpends = [
  {
    label: 'FOOD',
    merchant: 'Zomato / Swiggy',
    delta: '₹1,240 more than usual',
    spark: [30, 42, 38, 72],
    color: '#D4AF37',
    bg: '#0A0B0B',
  },
  {
    label: 'SHOPPING',
    merchant: 'Myntra / Nykaa',
    delta: '₹890 more than usual',
    spark: [20, 28, 25, 58],
    color: '#5DCAA5',
    bg: '#0A0B0B',
  },
  {
    label: 'TRANSPORT',
    merchant: 'Uber / Ola',
    delta: '₹420 more than usual',
    spark: [40, 35, 42, 62],
    color: 'rgba(245,239,224,0.5)',
    bg: '#0A0B0B',
  },
];

// Build calendar cells array
const calendarCells: (number | null)[] = [];
for (let i = 0; i < START_OFFSET; i++) calendarCells.push(null);
for (let d = 1; d <= 30; d++) calendarCells.push(d);
while (calendarCells.length < 35) calendarCells.push(null);

const TODAY = 2; // April 2 as "today"

export function SpendScreen() {
  return (
    <div style={{ backgroundColor: '#FAF9F6' }}>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <div style={{ ...HERO_STYLE, padding: '48px 20px 72px' }}>
        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.5)' }}>
          <span>9:41</span>
          <span>●●● WiFi</span>
        </div>

        {/* Month label */}
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(245,239,224,0.4)', letterSpacing: '0.16em', marginBottom: '8px' }}>
          APRIL 2025
        </div>

        {/* Spent headline */}
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'rgba(245,239,224,0.5)', marginBottom: '4px' }}>
          You've spent
        </div>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '46px', color: '#F5EFE0', letterSpacing: '-0.01em', lineHeight: '1', marginBottom: '4px' }}>
          <AnimatedNumber value={23760} />
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.4)', marginBottom: '18px' }}>
          of ₹42,000 salary
        </div>

        {/* Stat pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <div style={{ padding: '6px 12px', borderRadius: '20px', backgroundColor: 'rgba(239,159,39,0.18)', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#D4AF37' }}>
            ↑ 8% vs March
          </div>
          <div style={{ padding: '6px 12px', borderRadius: '20px', backgroundColor: 'rgba(245,239,224,0.12)', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.75)' }}>
            Biggest: Food
          </div>
        </div>
      </div>

      {/* ── FLOATING CATEGORY BREAKDOWN CARD ─────────────────── */}
      <div
        style={{
          ...FLOAT_CARD_STYLE,
          margin: '0 16px',
          marginTop: '-40px',
          borderRadius: '18px',
          padding: '20px',
          marginBottom: '24px',
        }}
      >
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(245,239,224,0.45)', letterSpacing: '0.14em', marginBottom: '18px' }}>
          WHERE IT'S GOING
        </div>

        {categories.map(({ label, amount, percentage, color }) => (
          <div key={label} style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.65)' }}>{label}</span>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.65)' }}>₹{amount.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ width: '100%', height: '8px', borderRadius: '4px', backgroundColor: 'rgba(245,239,224,0.1)', overflow: 'hidden' }}>
              <div style={{ width: `${percentage}%`, height: '100%', borderRadius: '4px', backgroundColor: color }} />
            </div>
          </div>
        ))}

        {/* Contextual insight */}
        <div style={{ marginTop: '6px', paddingTop: '14px', borderTop: '1px solid rgba(245,239,224,0.1)', fontFamily: 'Cormorant Garamond, serif', fontSize: '11px', fontStyle: 'italic', color: 'rgba(245,239,224,0.45)' }}>
          Rent is 59% of spending. That's healthy for Mumbai.
        </div>
      </div>

      {/* ── SPENDING HEATMAP CALENDAR ─────────────────────────── */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#222222', marginBottom: '14px' }}>
          This month, day by day
        </div>

        {/* Day headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '4px' }}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <div key={i} style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#AAAAAA', paddingBottom: '2px' }}>
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
          {calendarCells.map((day, idx) => {
            if (day === null) {
              return <div key={`blank-${idx}`} style={{ aspectRatio: '1', borderRadius: '6px' }} />;
            }
            const spend = dailySpend[day] ?? 0;
            const isToday = day === TODAY;
            const isSalaryDay = day === 1;
            return (
              <div key={day} style={{ position: 'relative' }}>
                {isSalaryDay && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-5px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: '#508D69',
                      zIndex: 2,
                    }}
                  />
                )}
                <div
                  style={{
                    aspectRatio: '1',
                    borderRadius: '6px',
                    backgroundColor: getSpendColor(spend),
                    border: isToday ? '1.5px solid #0A0B0B' : '1.5px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '9px', color: getSpendTextColor(spend) }}>
                    {day}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
          {[
            { color: '#FFF3E0', label: 'Low' },
            { color: 'rgba(239,159,39,0.42)', label: 'Mid' },
            { color: '#D4AF37', label: 'High' },
            { color: '#BA5A5A', label: 'Ouch' },
          ].map(({ color, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '3px', backgroundColor: color, border: '1px solid rgba(0,0,0,0.06)' }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#AAAAAA' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── STOOD OUT THIS MONTH ─────────────────────────────── */}
      <div style={{ padding: '0 20px 32px' }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#222222', marginBottom: '12px' }}>
          Stood out this month
        </div>

        {unusualSpends.map(({ label, merchant, delta, spark, color }) => (
          <div
            key={label}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 14px',
              borderRadius: '14px',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
              marginBottom: '8px',
            }}
          >
            {/* Left: icon */}
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#0A0B0B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '12px' }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '9px', color: 'rgba(245,239,224,0.6)', letterSpacing: '0.04em' }}>{label.slice(0, 3)}</span>
            </div>

            {/* Center: merchant + delta */}
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#222222', marginBottom: '2px' }}>{merchant}</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#D4AF37' }}>{delta}</div>
            </div>

            {/* Right: mini bar chart */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '24px', marginLeft: '12px' }}>
              {spark.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.round(h * 0.3)}px` }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                  style={{
                    width: '6px',
                    borderRadius: '2px',
                    backgroundColor: i === 3 ? color : '#E8E4DC',
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

