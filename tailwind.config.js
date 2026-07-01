/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			bg: {
  				base: 'var(--bg-base)',
  				surface1: 'var(--bg-surface-1)',
  				surface2: 'var(--bg-surface-2)',
  				surface3: 'var(--bg-surface-3)',
  				surface4: 'var(--bg-surface-4)',
  			},
  			border: {
  				subtle: 'var(--border-subtle)',
  				DEFAULT: 'var(--border-default)',
  				strong: 'var(--border-strong)',
  			},
  			text: {
  				primary: 'var(--text-primary)',
  				secondary: 'var(--text-secondary)',
  				muted: 'var(--text-muted)',
  			},
  			accent: {
  				blue: {
  					400: 'var(--accent-blue-400)',
  					500: 'var(--accent-blue-500)',
  					600: 'var(--accent-blue-600)',
  				},
  				amber: {
  					400: 'var(--accent-amber-400)',
  					500: 'var(--accent-amber-500)',
  					600: 'var(--accent-amber-600)',
  				},
  			},
  			error: 'var(--semantic-error)',
  			success: 'var(--semantic-success)',
  			// deprecated — remove once `grep -r "brand-" src/` is clean
  			brand: {
  				primary: 'var(--brand-primary)',
  				secondary: 'var(--brand-secondary)',
  				accent: 'var(--brand-accent)',
  			}
  		},
  		fontFamily: {
  			sans: ['var(--font-inter)', 'sans-serif'],
  			display: ['var(--font-display)', 'sans-serif'],
  		},
  		fontSize: {
  			'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
  			'display-lg': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
  			'display-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
  			'display-sm': ['1.875rem', { lineHeight: '1.2' }],
  		},
  		backgroundImage: {
  			'gradient-primary': 'var(--gradient-primary)',
  		},
  		boxShadow: {
  			card: 'var(--shadow-card)',
  			cardHover: 'var(--shadow-card-hover)',
  			glowBlue: 'var(--shadow-glow-blue)',
  			glowAmber: 'var(--shadow-glow-amber)',
  			button: 'rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px'
  		},
  		borderRadius: {
  			lg: 'var(--radius-lg)',
  			md: 'var(--radius-md)',
  			sm: 'var(--radius-sm)',
  			xl: 'var(--radius-xl)',
  			pill: 'var(--radius-pill)'
  		},
  		spacing: {
  			section: 'var(--space-section)',
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
