
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			dark: '#0F172A',
  			light: '#F9FAFB',
  			oceanBlue: '#1E90FF',
  			midnight: '#1A1A2E',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			],
  			heading: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			card: '0 4px 12px rgba(0,0,0,0.05)',
  			hover: '0 15px 30px rgba(79, 70, 229, 0.15)'
  		},
  		borderRadius: {
  			'2xl': '1.5rem',
  			'3xl': '2rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			fadeIn: 'fadeIn 1s ease-in-out',
  			slideUp: 'slideUp 0.8s ease-out'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: 1
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Core Palette (مناسبة للخلفيات المتدرجة)
//         primary: "#4F46E5",   // Indigo قوي
//         secondary: "#6366F1", // Indigo فاتح
//         accent: "#FACC15",    // Yellow مميز
//         dark: "#0F172A",      // Slate-900
//         light: "#F9FAFB",     // Gray-50

//         // Extra Modern Colors
//         neonPink: "#FF2D95",
//         oceanBlue: "#1E90FF",
//         emerald: "#2ECC71",
//         sunset: "#FF6B6B",
//         midnight: "#1A1A2E",

//         // Background tones (لخلفيات sections)
//         softBlue: "#E0E7FF",
//         softPurple: "#EDE9FE",
//         softPink: "#FCE7F3",
//       },

//       fontFamily: {
//         sans: ["Inter", "ui-sans-serif", "system-ui"],
//         heading: ["Poppins", "ui-sans-serif", "system-ui"],
//         fancy: ["Playfair Display", "serif"],
//       },

//       boxShadow: {
//         card: "0 4px 12px rgba(0,0,0,0.1)",
//         hover: "0 6px 20px rgba(0,0,0,0.15)",
//         neon: "0 0 20px rgba(255,45,149,0.6)",
//       },

//       borderRadius: {
//         xl: "1rem",
//         "2xl": "1.5rem",
//         "3xl": "2rem",
//       },

//       backgroundImage: {
//         "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
//         "gradient-conic": "conic-gradient(from 180deg, var(--tw-gradient-stops))",
//       },

//       animation: {
//         fadeIn: "fadeIn 1s ease-in-out",
//         slideUp: "slideUp 0.8s ease-out",
//         pulseSlow: "pulse 3s infinite",
//       },

//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: 0 },
//           "100%": { opacity: 1 },
//         },
//         slideUp: {
//           "0%": { transform: "translateY(20px)", opacity: 0 },
//           "100%": { transform: "translateY(0)", opacity: 1 },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
