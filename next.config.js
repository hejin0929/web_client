/** @type {import('next').NextConfig} */
const withLess = require("@zeit/next-less");

const nextConfig = withLess({
  reactStrictMode: true,
  serverRuntimeConfig: {},
  // 添加Less配置选项（可选）
  lessLoaderOptions: {
    /* 在这里可以添加Less loader的配置 */
    // 示例：启用CSS Modules
    modules: true,
  },
});

module.exports = nextConfig;
