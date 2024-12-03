import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable static export
  output: 'export',
  
  // Ensure correct image handling for static export
  images: {
    unoptimized: true
  },

  // Asset prefix configuration
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? '/' // or '/your-repo-name/' if in a subdirectory
    : undefined,

  // Helps with GitHub Pages routing
  trailingSlash: true,

  // Webpack configuration for additional asset handling
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp3|wav|mpe?g|mov|avi|pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/media',
            outputPath: `${isServer ? '../' : ''}static/media`,
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },

  // Optional: TypeScript path aliases
  typescript: {
    // Optionally enable type checking during build
    tsconfigPath: './tsconfig.json'
  },

  // Optional: Add any environment variables or other configurations
  env: {
    // Custom environment variables
    // NEXT_PUBLIC_EXAMPLE: process.env.NEXT_PUBLIC_EXAMPLE
  },

  // Redirect and rewrite rules (if needed)
  // async rewrites() {
  //   return [
  //     // Custom rewrite rules
  //   ]
  // },
}

export default nextConfig