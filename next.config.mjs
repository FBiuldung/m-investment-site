/** @type {import('next').NextConfig} */
const nextConfig = {
  // 删除 output: 'export' 行
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
