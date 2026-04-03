import { useState } from 'react';
import confetti from 'canvas-confetti';
import { MoodFace, MoodType, MOOD_COLORS, MOOD_LABELS } from '../components/MoodFace';

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

// Week: Mar 31 – Apr 6 (Mon–Sun)
const weekDays = [
  { label: 'M', day: 'Mar 31', mood: 'neutral' as MoodType, spend: 120 },
  { label: 'T', day: 'Apr 1', mood: 'motivated' as MoodType, spend: 0 },
  { label: 'W', day: 'Apr 2', mood: 'calm' as MoodType, spend: 340 },
  { label: 'T', day: 'Apr 3', mood: 'stressed' as MoodType, spend: 890 },
  { label: 'F', day: 'Apr 4', mood: 'stressed' as MoodType, spend: 1240 },
  { label: 'S', day: 'Apr 5', mood: 'calm' as MoodType, spend: 1500 },
  { label: 'S', day: 'Apr 6', mood: 'calm' as MoodType, spend: 450 },
];

const reflections = [
  {
    id: 1,
    day: 'Thursday, Apr 3',
    mood: 'stressed' as MoodType,
    spend: '₹890',
    reflection: 'Ordered food twice — comfort spending after a long day.',
    tag: 'Stress spending',
    tagColor: '#D4AF37',
    tagBg: 'rgba(239,159,39,0.12)',
  },
  {
    id: 2,
    day: 'Tuesday, Apr 1',
    mood: 'motivated' as MoodType,
    spend: '₹0',
    reflection: 'Salary day. Transferred ₹5,000 to savings right away.',
    tag: 'Smart move',
    tagColor: '#508D69',
    tagBg: 'rgba(111,207,151,0.12)',
  },
  {
    id: 3,
    day: 'Sunday, Apr 6',
    mood: 'calm' as MoodType,
    spend: '₹450',
    reflection: 'Weekend chill — lowest spend of the week.',
    tag: 'Calm day',
    tagColor: '#5DCAA5',
    tagBg: 'rgba(93,202,165,0.12)',
  },
  {
    id: 4,
    day: 'Monday, Mar 31',
    mood: 'neutral' as MoodType,
    spend: '₹120',
    reflection: 'Regular workday, coffee and transit only.',
    tag: 'Routine',
    tagColor: '#999999',
    tagBg: 'rgba(153,153,153,0.1)',
  },
];

// April mood heatmap data
const aprilMoods: Record<number, MoodType> = {
  1: 'motivated', 2: 'calm', 3: 'stressed', 4: 'calm', 5: 'motivated',
  6: 'calm', 7: 'neutral', 8: 'stressed', 9: 'calm', 10: 'anxious',
  11: 'stressed', 12: 'calm', 13: 'neutral', 14: 'calm', 15: 'motivated',
  16: 'calm', 17: 'stressed', 18: 'calm', 19: 'calm', 20: 'neutral',
  21: 'motivated', 22: 'calm', 23: 'stressed', 24: 'calm', 25: 'motivated',
  26: 'calm', 27: 'stressed', 28: 'calm', 29: 'calm', 30: 'neutral',
};

// Calendar cells for April (starts Tuesday = offset 1)
const moodCalendarCells: (number | null)[] = [];
for (let i = 0; i < 1; i++) moodCalendarCells.push(null);
for (let d = 1; d <= 30; d++) moodCalendarCells.push(d);
while (moodCalendarCells.length < 35) moodCalendarCells.push(null);

const maxSpend = Math.max(...weekDays.map((d) => d.spend));

const moodOptions: MoodType[] = ['motivated', 'calm', 'neutral', 'stressed', 'anxious'];

export function MoodScreen() {
  const [selectedLogMood, setSelectedLogMood] = useState<MoodType | null>(null);
  const [logNote, setLogNote] = useState('');
  const [logged, setLogged] = useState(false);

  return (
    <div style={{ backgroundColor: '#FAF9F6' }}>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <div style={{ ...HERO_STYLE, padding: '48px 20px 72px' }}>
        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.5)' }}>
          <span>9:41</span>
          <span>●●● WiFi</span>
        </div>

        {/* Label */}
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(245,239,224,0.45)', letterSpacing: '0.16em', marginBottom: '10px' }}>
          MOOD JOURNAL
        </div>

        {/* Headline */}
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontStyle: 'italic', color: '#F5EFE0', lineHeight: '1.2', marginBottom: '8px' }}>
          How money felt this week
        </div>

        {/* Date range */}
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.4)', marginBottom: '14px' }}>
          Mar 31 – Apr 6
        </div>

        {/* Weekly mood summary */}
        <div style={{ display: 'inline-block', padding: '5px 12px', borderRadius: '20px', backgroundColor: 'rgba(93,202,165,0.2)', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#5DCAA5' }}>
          Mostly calm
        </div>
      </div>

      {/* ── FLOATING 7-DAY MOOD STRIP ─────────────────────────── */}
      <div
        style={{
          ...FLOAT_CARD_STYLE,
          margin: '0 16px',
          marginTop: '-40px',
          borderRadius: '18px',
          padding: '20px 16px 16px',
          marginBottom: '20px',
        }}
      >
        {/* Day columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '14px' }}>
          {weekDays.map(({ label, mood, spend }, i) => {
            const dotSize = Math.max(4, Math.round((spend / maxSpend) * 10));
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                {/* Day label */}
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(245,239,224,0.4)' }}>
                  {label}
                </span>
                {/* Mood face */}
                <MoodFace mood={mood} size={28} />
                {/* Spend dot */}
                <div
                  style={{
                    width: `${dotSize}px`,
                    height: `${dotSize}px`,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(245,239,224,0.35)',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Key insight */}
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '12px', fontStyle: 'italic', color: 'rgba(245,239,224,0.5)', textAlign: 'center', paddingTop: '10px', borderTop: '1px solid rgba(245,239,224,0.1)' }}>
          You spent 34% more on stressed days
        </div>
      </div>

      {/* ── WEEKLY REFLECTION CARDS ───────────────────────────── */}
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#222222', marginBottom: '12px' }}>
          This week's moments
        </div>

        {reflections.map(({ id, day, mood, spend, reflection, tag, tagColor, tagBg }) => (
          <div
            key={id}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
              borderRadius: '12px',
              padding: '14px',
              marginBottom: '8px',
            }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MoodFace mood={mood} size={18} />
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#888888' }}>{day}</span>
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: mood === 'motivated' ? '#508D69' : '#222222' }}>
                {spend}
              </span>
            </div>

            {/* Reflection */}
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px', fontStyle: 'italic', color: '#555555', marginBottom: '10px', lineHeight: '1.5' }}>
              "{reflection}"
            </div>

            {/* Tag */}
            <div style={{ display: 'inline-block', padding: '3px 9px', borderRadius: '20px', backgroundColor: tagBg, fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: tagColor }}>
              {tag}
            </div>
          </div>
        ))}
      </div>

      {/* ── MOOD × MONEY INSIGHT CARD ─────────────────────────── */}
      <div
        style={{
          ...FLOAT_CARD_STYLE,
          margin: '0 20px 24px',
          borderRadius: '14px',
          padding: '18px',
        }}
      >
        {/* Label */}
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: 'rgba(245,239,224,0.45)', letterSpacing: '0.14em', marginBottom: '12px' }}>
          PATTERN DETECTED
        </div>

        {/* Main insight */}
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '19px', fontStyle: 'italic', color: '#F5EFE0', lineHeight: '1.3', marginBottom: '8px' }}>
          Stressed Tuesdays cost you ₹890 more on average
        </div>

        {/* Sub insight */}
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.45)', lineHeight: '1.5', marginBottom: '16px' }}>
          Mostly food and transport. Recognising the pattern is the first step.
        </div>

        {/* Action pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <div style={{ padding: '7px 14px', borderRadius: '20px', backgroundColor: 'rgba(93,202,165,0.2)', border: '1px solid rgba(93,202,165,0.4)', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#5DCAA5', cursor: 'pointer' }}>
            View stressed days
          </div>
          <div style={{ padding: '7px 14px', borderRadius: '20px', backgroundColor: 'rgba(239,159,39,0.18)', border: '1px solid rgba(239,159,39,0.35)', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#D4AF37', cursor: 'pointer' }}>
            Set a Tuesday budget
          </div>
        </div>
      </div>

      {/* ── MONTHLY MOOD TREND ────────────────────────────────── */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#222222', marginBottom: '14px' }}>
          Your mood over April
        </div>

        {/* Day headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '4px' }}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <div key={i} style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#AAAAAA' }}>
              {d}
            </div>
          ))}
        </div>

        {/* Mood calendar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
          {moodCalendarCells.map((day, idx) => {
            if (day === null) return <div key={`b-${idx}`} style={{ aspectRatio: '1', borderRadius: '6px' }} />;
            const mood = aprilMoods[day];
            const color = mood ? MOOD_COLORS[mood] : '#FAF9F6';
            const isToday = day === 2;
            return (
              <div
                key={day}
                title={mood ? MOOD_LABELS[mood] : ''}
                style={{
                  aspectRatio: '1',
                  borderRadius: '6px',
                  backgroundColor: color,
                  border: isToday ? '1.5px solid #0A0B0B' : '1.5px solid transparent',
                  opacity: day > 2 ? 0.35 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '11px',
                  color: mood ? 'rgba(0,0,0,0.4)' : '#BBBBBB',
                  fontWeight: 500,
                }}
              >
                {day}
              </div>
            );
          })}
        </div>

        {/* Mood legend */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
          {(Object.entries(MOOD_COLORS) as [MoodType, string][]).map(([mood, color]) => (
            <div key={mood} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '3px', backgroundColor: color }} />
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#AAAAAA' }}>{MOOD_LABELS[mood]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── LOG TODAY'S MOOD ──────────────────────────────────── */}
      {!logged ? (
        <div style={{ padding: '0 20px 32px' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
              borderRadius: '14px',
              padding: '18px',
            }}
          >
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#222222', marginBottom: '14px' }}>
              How did today feel?
            </div>

            {/* Mood faces row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              {moodOptions.map((mood) => (
                <div key={mood} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <MoodFace
                    mood={mood}
                    size={40}
                    onClick={() => setSelectedLogMood(mood)}
                    selected={selectedLogMood === mood}
                  />
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '9px', color: '#AAAAAA' }}>
                    {MOOD_LABELS[mood]}
                  </span>
                </div>
              ))}
            </div>

            {/* Text input */}
            <input
              value={logNote}
              onChange={(e) => setLogNote(e.target.value)}
              placeholder="Anything on your mind? (optional)"
              style={{
                width: '100%',
                padding: '10px 0',
                border: 'none',
                borderBottom: '1px solid #E8E4DC',
                backgroundColor: 'transparent',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '12px',
                color: '#888888',
                outline: 'none',
                marginBottom: '14px',
                boxSizing: 'border-box',
              }}
            />

            {/* Log button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                disabled={!selectedLogMood}
                onClick={() => {
                  if (selectedLogMood) {
                    setLogged(true);
                    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
                  }
                }}
                style={{
                  padding: '8px 20px',
                  borderRadius: '8px',
                  backgroundColor: selectedLogMood ? '#0A0B0B' : '#E8E4DC',
                  color: selectedLogMood ? '#F5EFE0' : '#AAAAAA',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '13px',
                  border: 'none',
                  cursor: selectedLogMood ? 'pointer' : 'default',
                  transition: 'all 0.2s',
                }}
              >
                Log it
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ padding: '0 20px 32px' }}>
          <div
            style={{
              backgroundColor: 'rgba(93,202,165,0.08)',
              border: '1px solid rgba(93,202,165,0.3)',
              borderRadius: '14px',
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <MoodFace mood={selectedLogMood!} size={32} />
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#222222', marginBottom: '2px' }}>
                Today's mood logged!
              </div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '12px', fontStyle: 'italic', color: '#888888' }}>
                Check back tomorrow for new patterns.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

