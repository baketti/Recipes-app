/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "img.spoonacular.com",
          port:"",
          pathname: "**/recipes/**",
        },
        {
          protocol: 'https',
          hostname: "img.spoonacular.com",
          port: "",
          pathname: "**/ingredients_100x100/**",
        }
    ],
  },
  transpilePackages: ['@mui/x-charts'],
};

export default nextConfig;
