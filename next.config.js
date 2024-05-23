/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Ottieni l'URL del modulo corrente
const __filename = fileURLToPath(import.meta.url);

// Ottieni il percorso della directory corrente
const __dirname = dirname(__filename);

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
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
   
      return config
    },
};

export default nextConfig;
