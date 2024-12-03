/** @type {import('next').NextConfig} */
const nextConfig = {
  // For GitHub Pages deployment
  output: 'export', // Enable static export
  images: {
    unoptimized: true // Needed for static export
  },
  
  // Correct asset prefix configuration
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? '/' // Use leading slash for production
    : undefined,

  // If deploying to a GitHub Pages subdirectory
  // Replace 'your-repo-name' with your actual repository name
  basePath: process.env.NODE_ENV === 'production' 
    ? '/your-repo-name' 
    : undefined,
}

module.exports = nextConfig