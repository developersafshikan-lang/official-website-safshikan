export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              bg: '#0A0E17',
              surface: '#111726',
              surfaceLight: '#182238',
              card: '#0F172A',
              cardHover: '#16223D',
              border: '#1E293B',
              borderHover: '#334155',
              accent: '#2563EB',
              accentLight: '#3B82F6',
              textPrimary: '#F8FAFC',
              textSecondary: '#94A3B8',
              textMuted: '#64748B'
            }
          },
          fontFamily: {
            heading: ['"Plus Jakarta Sans"', 'sans-serif'],
            sans: ['Inter', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }
        }
      }
    }
