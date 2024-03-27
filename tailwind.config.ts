import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        colorBg2: "#212121",
        colorBg3: "#181818",
        colorBg5: "rgba(249,249,249, 0.08)",
        activeNavLink: "rgba(249,249,249, 0.08)",
        activeNavLinkHover: "rgba(249,249,249, 0.03)",
        colorGrey5: "#2a2e35",
      },
      borderColor: {
        borderColor2: "rgba(249,249,249, 0.08)",
        colorGrey5: "#2a2e35",
      },
      textColor: {
        colorGrey0: "#f8f8f8",
        colorGrey2: "#b2becd",
        colorGrey3: "#6c7983",
      },
      boxShadow: {
        shadow: "1px 7px 12px rgba(8, 18, 69, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
