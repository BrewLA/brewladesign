import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      maxWidth: {
        "desktop" : "89rem",
      },
      colors: {
        "red-primary-light": "#FFF5F5",
        "red-primary-dark": "#2F2626",
        "blue-primary-light": "#F5FBFF",
        "blue-primary-dark": "#2A2E31",
        "purple-primary-light": "#F8F5FF",
        "purple-primary-dark": "#2E2A31",
        "green-primary-light": "#E6FFED",
        "green-primary-dark": "#2C3E2F",
        gray: {
          "50" : "#f5f5f5",
          "100" : "#D9D9D9",
          "200" : "#BFBFBF",
          "300" : "#A6A6A6",
          "400" : "#8C8C8C",
          "500" : "#737373",
          "600" : "#595959",
          "700" : "#323232",
          "800" : "#1a1a1a",
          "900" : "#141414",
        },
      },
      fill: {
        "red-primary-light": "#FFF5F5",
        "red-primary-dark": "#2F2626",
        "blue-primary-light": "#F5FBFF",
        "blue-primary-dark": "#2A2E31",
        "purple-primary-light": "#F8F5FF",
        "purple-primary-dark": "#2E2A31",
        "green-primary-light": "#E6FFED",
        "green-primary-dark": "#2C3E2F",
      },
      backgroundColor: {
        gray: {
          "50" : "#f5f5f5",
          "100" : "#D9D9D9",
          "200" : "#BFBFBF",
          "300" : "#A6A6A6",
          "400" : "#8C8C8C",
          "500" : "#737373",
          "600" : "#595959",
          "700" : "#323232",
          "800" : "#1a1a1a",
          "900" : "#141414",
        },
        red: {
          primary: {
            "light" : "#FFF5F5",
            "dark" : "#2F2626",
          },
          secondary: {
            "light" : "#E8B0B0",
            "dark" : "#B98A8A",
          },
          tertiary: {
            "light" : "#C89191",
            "dark" : "#DFA0A0",
          }
        },
        blue: {
          primary: {
            "light" : "#F5FBFF",
            "dark" : "#2A2E31",
          },
          secondary: {
            "light" : "#B0D8E8",
            "dark" : "#8AB8D8",
          },
          tertiary: {
            "light" : "#91B9C8",
            "dark" : "#A0CFEF",
          }
        },
        purple: {
          primary: {
            "light" : "#F8F5FF",
            "dark" : "#2E2A31",
          },
          secondary: {
            "light" : "#C3B0E8",
            "dark" : "#B88AD8",
          },
          tertiary: {
            "light" : "#A291C8",
            "dark" : "#CFA0EF",
          }
        },
        green: {
          primary: {
            "light" : "#E6FFED",
            "dark" : "#2C3E2F",
          },
          secondary: {
            "light" : "#B8E8B0",
            "dark" : "#8FB88A",
          },
          tertiary: {
            "light" : "#94C891",
            "dark" : "#A6CFA0",
          }
        },
      },
      borderColor: {
        gray: {
          "50" : "#f5f5f5",
          "100" : "#D9D9D9",
          "200" : "#BFBFBF",
          "300" : "#A6A6A6",
          "400" : "#8C8C8C",
          "500" : "#737373",
          "600" : "#595959",
          "700" : "#323232",
          "800" : "#1a1a1a",
          "900" : "#141414",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
