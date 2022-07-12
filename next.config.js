/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_APP_SERVICE_ID: process.env.APP_SERVICE_ID,
    NEXT_APP_TEMPLATE_ID: process.env.APP_TEMPLATE_ID,
    NEXT_APP_USER_ID: process.env.APP_USER_ID,
  },
};

module.exports = nextConfig
