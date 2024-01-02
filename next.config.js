 // YOU HAVE TO CHANGE IT BCZ NEXT JS NOT ALLOWS IMAGES TO BE RENDERED FROM UNKNOWN SOURDE LIKE DB SO PASTE IT ..
 /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
