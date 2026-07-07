/**
 * 全站常量
 * 修改 base 时需与 astro.config.mjs 中的 base 保持一致
 */

/** 站点标题 */
export const SITE_TITLE = "数据库选型地图";
export const SITE_TITLE_EN = "Database Field Guide CN";

/** GitHub Pages 部署的 base 路径 */
export const BASE = "/db-atlas-cn/";

/** 路径工具：拼接 base + 路径 */
export function withBase(pth: string): string {
  const normalized = pth.startsWith("/") ? pth.slice(1) : pth;
  return `${BASE}${normalized}`;
}
