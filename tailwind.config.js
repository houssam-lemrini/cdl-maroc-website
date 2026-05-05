/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        graphite: {
          950: "#050608",
          900: "#0a0d10",
          850: "#101419",
          800: "#151b21",
          700: "#202832",
        },
        signal: {
          cyan: "#22d3ee",
          emerald: "#34d399",
          red: "#ef4444",
        },
      },
      boxShadow: {
        glow: "0 0 60px rgba(34, 211, 238, 0.18)",
        emerald: "0 0 48px rgba(52, 211, 153, 0.16)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 15%, rgba(34, 211, 238, 0.16), transparent 30%), radial-gradient(circle at 80% 10%, rgba(52, 211, 153, 0.12), transparent 26%), linear-gradient(135deg, #050608 0%, #0a0d10 45%, #101419 100%)",
      },
    },
  },
  plugins: [],
};
