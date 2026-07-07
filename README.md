# 数据库选型地图 · Database Field Guide CN

面向开发者、Agent 系统和企业数据平台的数据库选择指南。一份中文的数据库选型参考，帮助你根据实际需求选择合适的数据库或数据库组合。

## ✨ 特性

- 🔍 **按名称、类型、场景、关键词搜索** — 快速过滤数据库列表
- 🗂️ **12 种分类** — 关系型、嵌入式、文档、KV/缓存、搜索引擎、向量、图、RDF、时序、OLAP、宽列、多模型
- 🎯 **按场景选型** — 7 大业务场景的推荐数据库组合
- 📚 **学习路径** — 4 条面向不同角色的渐进式学习路线
- 📋 **27 个数据库条目** — 详细的特性、适用/不适用场景、组合方案
- 🚀 **纯静态站点** — Astro + TypeScript，部署到 GitHub Pages

## 🚀 本地运行

```bash
npm install
npm run dev      # 启动开发服务器
npm run build    # 构建
npm run preview  # 预览构建结果
```

## 📁 项目结构

```
src/
├── components/          # Astro 组件
│   ├── DatabaseCard.astro
│   ├── Footer.astro
│   ├── Nav.astro
│   └── SearchAndFilter.astro
├── data/                # 静态数据文件
│   ├── databases.ts     # 数据库条目（核心数据）
│   ├── categories.ts    # 分类定义
│   └── scenarios.ts     # 场景选型推荐
├── layouts/
│   └── BaseLayout.astro
├── pages/               # 路由页面
│   ├── index.astro      # 首页
│   ├── about.astro      # 关于
│   ├── categories.astro # 分类说明
│   ├── learning-path.astro
│   ├── scenarios.astro  # 按场景选型
│   └── databases/
│       ├── index.astro  # 数据库列表
│       └── [slug].astro # 数据库详情
├── styles/
│   └── global.css
└── consts.ts            # 全站常量
```

## ✏️ 数据维护

所有数据库条目存放在 `src/data/databases.ts` 中，以 TypeScript 静态数组形式维护。

### 添加新数据库

编辑 `src/data/databases.ts`，在 `databases` 数组中添加新条目，格式如下：

```typescript
{
  name: "新数据库名称",
  slug: "new-db-slug",
  categories: ["relational"],
  summary: "一句话说明",
  description: "详细介绍",
  goodFor: ["场景1", "场景2"],
  badFor: ["不适用场景"],
  typicalUseCases: ["典型用途"],
  deployment: ["Docker", "本地"],
  language: "Rust",
  license: "MIT",
  difficulty: "低",
  maturity: "成熟",
  related: ["postgresql"],
  officialWebsite: "https://example.com",
  github: "https://github.com/example/db",
  vsAlternatives: "和其他相近数据库的区别",
  learningTip: "学习建议",
  commonCombinations: ["组合方案"],
}
```

## 📜 内容版权原则

- **不复制商业排名：** 本项目不复制 DB-Engines 等商业网站的排名、评分、描述和比较内容。所有数据库条目均为人工整理，基于官方文档摘要和开源社区的常识性认知。
- **尊重开源许可：** 引用的数据保留原始许可证说明。
- **可修正：** 如发现事实性错误或过时信息，欢迎通过 GitHub Issue 或 PR 反馈。

## 📝 技术栈

- [Astro](https://astro.build/) — 静态站点框架
- TypeScript
- 纯 CSS（无框架依赖）
- GitHub Pages + GitHub Actions

## 🗺️ 后续计划

- 补充更多数据库条目
- 增加数据库比较矩阵视图
- 添加 Dark Mode
- 社区贡献的实战经验和评测

## 📄 许可证

- 网站代码：MIT License
- 文档和数据库内容：[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
