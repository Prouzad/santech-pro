/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#000000",
      "secondary-label": "rgba(0, 0, 0, 0.6)",
      "tertiary-label": "rgba(0, 0, 0, 0.04)",
      "positive-label": "#34C759",
      "negative-label": "#FF3B30",
      "inverter-label": "rgba(255, 255, 255, 0.48)",
      "secondary-background": "rgba(0, 0, 0, 0.04)",
      "hover-button": "rgba(0, 0, 0, 0.08)",
      "stroke-background": "rgba(0, 0, 0, 0.12)",
      "brand-controls": "#FFE52B",
      "brand-interaction": "#F3D014",
      "secondary-controls": "rgba(0, 0, 0, 0.04)",
      "secondary-interaction": "rgba(0, 0, 0, 0.12)",
      "default-brand": "#FFE52B",
      "transparent-document": "rgba(121, 121, 175, 0.07)",
      "transparent-car": "rgba(177, 129, 187, 0.07)",
      "transparent-card": "rgba(113, 154, 198, 0.07)",
      "transparent-check": "rgba(165, 167, 17, 0.07)",
    },
    fontSize: {
      "header-40-bold": [
        "40px",
        {
          lineHeight: "48px",
          fontWeight: "700",
        },
      ],
      "header-20-bold": [
        "20px",
        {
          lineHeight: "32px",
          fontWeight: "700",
        },
      ],
      "body-16-regular": [
        "16px",
        {
          lineHeight: "26px",
          fontWeight: "400",
        },
      ],
      "body-16-medium": [
        "16px",
        {
          lineHeight: "26px",
          fontWeight: "500",
        },
      ],
      "body-14-regular": [
        "14px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      "body-14-medium": [
        "14px",
        {
          lineHeight: "24px",
          fontWeight: "500",
        },
      ],
      "body-12-regular": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "400",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
