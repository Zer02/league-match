export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#0d0d0d",
          neon: "#00fff7",
          accent: "#ff00cc",
          dim: "#1a1a1a",
        },
      },
      boxShadow: {
        neon: "0 0 10px #00fff7, 0 0 20px #00fff7",
      },
    },
  },
  plugins: [],
};
