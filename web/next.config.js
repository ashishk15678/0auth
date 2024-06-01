

const nextConfig = {



  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.freepik.com" }
    ]
  }
  ,
  experimental: {
    reactCompiler: true,
  },

};

module.exports = nextConfig;
