import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/funciones/dictado-clinico-por-voz",
        destination: "/funciones/odontograma-por-voz",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
