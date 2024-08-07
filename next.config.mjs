/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{hostname:'rest.cloudinary.com'}]
    }
};

export default nextConfig;
