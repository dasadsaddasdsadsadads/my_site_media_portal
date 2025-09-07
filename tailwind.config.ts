import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        // Section-specific colors
        indigo: {
          100: "hsl(244, 100%, 96%)",
          500: "hsl(238, 80%, 58%)",
          600: "hsl(238, 73%, 53%)",
          800: "hsl(238, 70%, 40%)",
        },
        purple: {
          100: "hsl(270, 100%, 96%)",
          500: "hsl(270, 91%, 65%)",
          600: "hsl(270, 84%, 59%)",
          800: "hsl(270, 75%, 45%)",
        },
        pink: {
          100: "hsl(330, 100%, 96%)",
          500: "hsl(330, 87%, 67%)",
          600: "hsl(330, 81%, 60%)",
          800: "hsl(330, 75%, 45%)",
        },
        red: {
          500: "hsl(0, 84%, 60%)",
        },
        green: {
          100: "hsl(150, 100%, 96%)",
          500: "hsl(142, 76%, 36%)",
          600: "hsl(142, 70%, 32%)",
          800: "hsl(142, 75%, 25%)",
        },
        teal: {
          500: "hsl(173, 58%, 39%)",
        },
        yellow: {
          100: "hsl(55, 100%, 96%)",
          500: "hsl(45, 93%, 47%)",
          600: "hsl(45, 87%, 42%)",
          800: "hsl(45, 82%, 35%)",
        },
        orange: {
          500: "hsl(25, 95%, 53%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          from: { 
            opacity: "0", 
            transform: "translateY(20px)" 
          },
          to: { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
