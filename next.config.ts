import type { NextConfig } from "next";

const STORE_URL = "https://criamood.lojavirtualnuvem.com.br";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/canecas", destination: `${STORE_URL}/canecas1/`, permanent: true },
      { source: "/azulejos", destination: `${STORE_URL}/azulejos1/`, permanent: true },
      { source: "/quadros", destination: `${STORE_URL}/mdf1/`, permanent: true },
      { source: "/squeezes", destination: `${STORE_URL}/garrafas1/`, permanent: true },
      { source: "/kits", destination: `${STORE_URL}/produtos/`, permanent: true },
      { source: "/toalhas", destination: `${STORE_URL}/produtos/`, permanent: true },
    ];
  },
};

export default nextConfig;
