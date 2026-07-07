import { defineConfig } from "astro/config";

// GitHub Pages 部署配置
// - 如果仓库名是 <username>.github.io，则 base 设为 '/'（根路径）
// - 如果仓库名是其他名称（如 db-atlas-cn），则 base 设为 '/仓库名/'
// - 当前仓库: yuCheng-ai/db-atlas-cn，需要设置 base: '/db-atlas-cn/'
// - 如果使用自定义域名，改回 base: '/'
export default defineConfig({
  site: "https://yucheng-ai.github.io",
  base: "/db-atlas-cn/",
  output: "static",
});
