// const path = require("path");
const images = require('next-images');
const withPlugins = require('next-compose-plugins');
const shortid = require('shortid');
// const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
// const optimizedImages = require('next-optimized-images');
// const withClassnamesMinifier = require('next-classnames-minifier').default;
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

const nextConfig = {
  env: {
    version: shortid.generate(),
    SERVER_URL: process.env.SERVER_URL,
  },
  swcMinify: true,
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Expect-CT header - is deprecated
          // {
          //   key: 'Expect-CT',
          //   value: 'enforce, max-age=86400',
          // },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'no-cors',
          },
          // {
          //   key: 'Referrer-Policy',
          //   value: 'strict-origin-when-cross-origin',
          // },
          // {
          //   key: 'Strict-Transport-Security',
          //   value: 'max-age=63072000; includeSubDomains; preload',
          // },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Download-Options',
            value: 'noopen',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            key: 'X-UA-Compatible',
            value: 'IE=edge; chrome=1',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/(.*).(avif|jpg|jpeg|png|webp|gif|ico|woff2|svg|css|js|json|mp3|mp4)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=189216000, immutable',
          },
        ],
      },
    ];
  },
  images: {
    unoptimized: true,
    domains: [],
  },
};

module.exports = withPlugins(
  [[images]], //[withBundleAnalyzer]], //[withClassnamesMinifier]
  nextConfig
);
