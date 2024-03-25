/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        basePath: process.env.BASE_PATH || '',
    },
};

export default nextConfig;
