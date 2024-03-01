module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
  images: {
    domains: ["localhost"]
  },
  i18n: {
    locales: ['en', 'ru', 'tm'],
    defaultLocale: 'en',
  },
}

