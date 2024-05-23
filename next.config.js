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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /\/__tests__\// }))
  
    return config
  },
};

export default nextConfig;
