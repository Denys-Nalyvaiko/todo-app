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
        activeNavLink: "rgba(249,249,249, 0.08)",
        activeNavLinkHover: "rgba(249,249,249, 0.03)",
      },
      borderColor: {
        borderColor2: "rgba(249,249,249, 0.08)",
      },
      textColor: {
        colorGrey3: "#6c7983",
        colorGrey0: "#f8f8f8",
      },
    },
  },
  plugins: [],
};
export default config;
