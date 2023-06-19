/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "images.pexels.com", "lh3.googleusercontent.com", "res.cloudinary.com", "craigourparkprimary.files.wordpress.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
