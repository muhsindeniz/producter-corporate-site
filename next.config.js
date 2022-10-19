/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    styledComponents: true
  },
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    API_KEY: "",
    AUTH_DOMAIN: "",
    PROJECT_ID: "",
    STORAGE_BUCKET: "",
    MESSAGING_SENDER_ID: "",
    APP_ID: "",
    MEASUREMENT_ID: "",
    SITE_URL: ""
  }
}

module.exports = nextConfig
