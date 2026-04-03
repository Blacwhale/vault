import { motion } from 'motion/react';
import { Compass, Target, Brain } from 'lucide-react';

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

export function VisionScreen() {
  return (
    <div style={{ backgroundColor: '#FAF9F6', minHeight: '100%' }}>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <div style={{ ...HERO_STYLE, padding: '48px 20px 80px' }}>
        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: 'rgba(245,239,224,0.5)' }}>
          <span>9:41</span>
          <span>●●● WiFi</span>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#D4AF37', letterSpacing: '0.16em', marginBottom: '8px' }}>
            THE VAULT PHILOSOPHY
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', color: '#F5EFE0', lineHeight: '1.1', marginBottom: '16px' }}>
            Master the mind.<br />Master the money.
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: 'rgba(245,239,224,0.6)', lineHeight: '1.5', maxWidth: '280px' }}>
            Wealth is rarely a mathematics problem. It is almost exclusively a psychological one.
          </div>
        </motion.div>
      </div>

      {/* ── CONTENT CARDS ──────────────────────────────────────── */}
      <div style={{ padding: '0 16px 40px', marginTop: '-40px' }}>
        
        {/* Card 1: The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          style={{
            ...FLOAT_CARD_STYLE,
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Target size={18} color="#D4AF37" />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              The Problem
            </span>
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', color: '#F5EFE0', marginBottom: '12px', lineHeight: '1.3' }}>
            Legacy apps are sterile spreadsheets.
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'rgba(245,239,224,0.5)', lineHeight: '1.6' }}>
            Traditional finance platforms track capital execution but ignore human emotion. They tell you <i>what</i> happened to your money, but fail to tell you <i>why</i>.
          </div>
        </motion.div>

        {/* Card 2: The Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          style={{
            ...FLOAT_CARD_STYLE,
            borderRadius: '16px',
            padding: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Brain size={18} color="#5DCAA5" />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#5DCAA5', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              The Vault Solution
            </span>
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', color: '#F5EFE0', marginBottom: '12px', lineHeight: '1.3' }}>
            Correlating capital with psychology.
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: 'rgba(245,239,224,0.5)', lineHeight: '1.6', marginBottom: '20px' }}>
            Vault seamlessly layers your emotional states over your transaction ledgers. By identifying psychological spending triggers, you achieve definitive control over your financial vector.
          </div>
          
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ padding: '8px 16px', borderRadius: '24px', backgroundColor: '#D4AF37', color: '#0A0B0B', fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 500 }}>
              Read the Manifesto
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
