const nextTranslate = require("next-translate-plugin");
const { defaultLocale, locales } = require("./i18n.json");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale,
    locales,
    localeDetection: false,
  },
  output: "standalone",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextTranslate(nextConfig);
