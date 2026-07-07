/**
 * 站点路径工具
 * 配合 astro.config.mjs 中的 base 配置使用
 * - dev 时 base 为 "/"
 * - build 时 base 为 "/db-atlas-cn/"
 */

/** 获取带 base 前缀的路径 */
export function p(pth: string): string {
  // Baked-in base path — 与 astro.config.mjs 中的 base 保持一致
  // 修改时两处同步更新
  const BASE = "/db-atlas-cn/";
  const normalized = pth.startsWith("/") ? pth.slice(1) : pth;
  return `${BASE}${normalized}`;
}
