/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  redirects: async () => {
    return [
      {
        source: "/foo",
        destination: "/about",
        permanent: false,
      },
    ];
  },
  rewrites: async () => {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;
