/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export as static files (required for Netlify)
  // This creates an 'out' folder with all your pages as HTML files
  output: 'export',
  
  // Add trailing slashes to URLs for better compatibility
  // Example: /about becomes /about/
  trailingSlash: true,
  
  // Disable image optimization for static export
  // Netlify can't run Next.js image optimization on static sites
  images: {
    unoptimized: true
  }
};

export default nextConfig;
