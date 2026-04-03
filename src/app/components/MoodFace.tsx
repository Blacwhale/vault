export type MoodType = 'calm' | 'stressed' | 'motivated' | 'anxious' | 'neutral';

export const MOOD_COLORS: Record<MoodType, string> = {
  calm: '#5DCAA5',
  stressed: '#EF9F27',
  motivated: '#6FCF97',
  anxious: '#E07060',
  neutral: '#C8C4BA',
};

export const MOOD_LABELS: Record<MoodType, string> = {
  calm: 'Calm',
  stressed: 'Stressed',
  motivated: 'Motivated',
  anxious: 'Anxious',
  neutral: 'Neutral',
};

interface MoodFaceProps {
  mood: MoodType;
  size?: number;
  onClick?: () => void;
  selected?: boolean;
}

export function MoodFace({ mood, size = 28, onClick, selected }: MoodFaceProps) {
  const color = MOOD_COLORS[mood];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        outline: selected ? `2.5px solid ${color}` : 'none',
        outlineOffset: '2px',
        borderRadius: '50%',
      }}
    >
      <circle cx="14" cy="14" r="14" fill={color} />

      {mood === 'calm' && (
        <>
          <ellipse cx="10" cy="12" rx="1.4" ry="1.4" fill="rgba(0,0,0,0.32)" />
          <ellipse cx="18" cy="12" rx="1.4" ry="1.4" fill="rgba(0,0,0,0.32)" />
          <path d="M10 17.5 Q14 20.5 18 17.5" stroke="rgba(0,0,0,0.32)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </>
      )}

      {mood === 'stressed' && (
        <>
          <ellipse cx="10" cy="12.5" rx="1.2" ry="1.2" fill="rgba(0,0,0,0.32)" />
          <ellipse cx="18" cy="12.5" rx="1.2" ry="1.2" fill="rgba(0,0,0,0.32)" />
          <path d="M10 18.5 Q14 15.5 18 18.5" stroke="rgba(0,0,0,0.32)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M8.5 9.5 L11 10.8" stroke="rgba(0,0,0,0.22)" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M19.5 9.5 L17 10.8" stroke="rgba(0,0,0,0.22)" strokeWidth="1.2" strokeLinecap="round" />
        </>
      )}

      {mood === 'motivated' && (
        <>
          <ellipse cx="10" cy="11.5" rx="1.7" ry="1.7" fill="rgba(0,0,0,0.32)" />
          <ellipse cx="18" cy="11.5" rx="1.7" ry="1.7" fill="rgba(0,0,0,0.32)" />
          <path d="M9 17 Q14 21.5 19 17" stroke="rgba(0,0,0,0.32)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </>
      )}

      {mood === 'anxious' && (
        <>
          <ellipse cx="10" cy="12" rx="2" ry="2" fill="rgba(0,0,0,0.32)" />
          <ellipse cx="18" cy="12" rx="2" ry="2" fill="rgba(0,0,0,0.32)" />
          <line x1="10.5" y1="18.5" x2="17.5" y2="18.5" stroke="rgba(0,0,0,0.32)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11 18.5 Q14 17 17 18.5" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" strokeLinecap="round" />
        </>
      )}

      {mood === 'neutral' && (
        <>
          <ellipse cx="10" cy="12" rx="1.4" ry="1.4" fill="rgba(0,0,0,0.32)" />
          <ellipse cx="18" cy="12" rx="1.4" ry="1.4" fill="rgba(0,0,0,0.32)" />
          <line x1="10.5" y1="18" x2="17.5" y2="18" stroke="rgba(0,0,0,0.32)" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
