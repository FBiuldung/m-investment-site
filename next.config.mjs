/** @type {import(\'next\').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  optimizeFonts: false, // 明确禁用字体优化
};

export default nextConfig;
