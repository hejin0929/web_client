/** @type {import('next').NextConfig} */
const withAntdLess = require("next-plugin-antd-less");
const path = require("path");

const nextConfig = withAntdLess({
  reactStrictMode: true,
  transpilePackages: ["antd"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // 添加Less配置选项（可选）
});

module.exports = nextConfig;
