/** @type {import('next').NextConfig} */
const nextConfig = {

    experimental: {
        esmExternals: 'loose', // This helps with the CommonJS/ESM warning
      },
};

module.exports = nextConfig; 