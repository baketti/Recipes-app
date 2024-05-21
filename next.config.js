/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "img.spoonacular.com",
          port:"",
          pathname: "**/recipes/**",
        }
    ],
    },
    transpilePackages: ['@mui/x-charts'],
};

export default nextConfig;
