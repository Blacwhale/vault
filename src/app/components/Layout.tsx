import { Outlet, NavLink, useLocation } from 'react-router';
import { Home, IndianRupee, Target, Smile, Compass } from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { path: '/', label: 'Home', Icon: Home },
  { path: '/spend', label: 'Spend', Icon: IndianRupee },
  { path: '/goals', label: 'Goals', Icon: Target },
  { path: '/mood', label: 'Mood', Icon: Smile },
  { path: '/vision', label: 'Vision', Icon: Compass },
];

export function Layout() {
  const location = useLocation();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100dvh',
        backgroundColor: '#0A0B0B',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '390px',
          height: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FAF9F6',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Scrollable content with Page Transitions */}
        <motion.div
          className="no-scrollbar"
          key={location.pathname}
          initial={{ opacity: 0, y: 12, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}
        >
          <Outlet />
        </motion.div>

        {/* Bottom Navigation */}
        <div
          style={{
            flexShrink: 0,
            height: '64px',
            backgroundColor: 'rgba(250, 249, 246, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(0,0,0,0.04)',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.02)',
            display: 'flex',
            alignItems: 'stretch',
            zIndex: 50,
            position: 'relative',
          }}
        >
          {navItems.map(({ path, label, Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                position: 'relative',
              }}
            >
              {({ isActive }) => (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
                  {isActive ? (
                    <motion.div
                      layoutId="activeTabIndicator"
                      style={{
                        position: 'absolute',
                        top: '0px',
                        width: '28px',
                        height: '3px',
                        borderRadius: '0 0 4px 4px',
                        backgroundColor: '#D4AF37',
                      }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  ) : null}
                  <Icon
                    size={20}
                    color={isActive ? '#0A0B0B' : '#A4A496'}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    style={{ transition: 'color 0.2s ease', marginTop: '6px' }}
                  />
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '11px',
                      color: isActive ? '#0A0B0B' : '#A4A496',
                      fontWeight: isActive ? '600' : '400',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {label}
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
