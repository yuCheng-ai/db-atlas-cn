export interface ProjectPlaybook {
  slug: string;
  title: string;
  summary: string;
  useWhen: string[];
  minimalStack: string[];
  productionStack: string[];
  dataBoundary: string[];
  avoid: string[];
  upgradeTrigger: string;
}

export const projectPlaybooks: ProjectPlaybook[] = [
  {
    slug: "excel-agent-workbench",
    title: "Excel + Agent + 数据库工作台",
    summary: "把 Excel、CSV、结构化表、知识库和自动化任务统一管理。静态选型重点是本地优先、结构版本、分析查询和多人升级路径。",
    useWhen: ["用户当前主要靠 Excel 协作", "需要把表结构管理起来", "需要本地分析和后续团队协作"],
    minimalStack: ["SQLite：项目、用户配置、表结构、任务状态", "DuckDB：CSV / Parquet / Excel 导入后的分析查询", "Meilisearch：表名、字段、文档说明的轻量搜索"],
    productionStack: ["PostgreSQL：多人协作主库", "DuckDB / ClickHouse：分析层", "对象存储：原始文件和版本归档", "Meilisearch / OpenSearch：搜索层"],
    dataBoundary: ["原始文件不要直接等同于业务事实", "表结构、字段含义、版本变更需要独立记录", "分析结果和人工确认结果要分开"],
    avoid: ["一开始就做重型 ERP", "把 Excel 全部硬塞进固定关系表", "没有版本记录就让 Agent 改数据"],
    upgradeTrigger: "当从单机工具变成多人协作、权限管理和审计需求出现时，从 SQLite 升级到 PostgreSQL。",
  },
  {
    slug: "enterprise-rag",
    title: "企业知识库 / RAG",
    summary: "企业知识库不是单纯向量库。静态架构应展示事实主库、文档存储、向量索引、关键词索引和权限边界。",
    useWhen: ["有大量文档问答", "需要权限过滤", "需要同时支持语义搜索和关键词搜索"],
    minimalStack: ["PostgreSQL + pgvector：文档、chunk、向量、权限和任务状态", "对象存储：原始文档", "Meilisearch：标题、原文、编号、实体名搜索"],
    productionStack: ["PostgreSQL：事实和权限", "Qdrant：独立向量检索", "OpenSearch：复杂全文和混合搜索", "对象存储：文档归档"],
    dataBoundary: ["文档原文、chunk、embedding、召回日志要分开", "权限过滤不能只靠前端", "生成答案不是事实数据"],
    avoid: ["只建向量库不存来源", "所有内容都塞进 prompt", "没有权限字段就开始企业部署"],
    upgradeTrigger: "当向量检索、权限过滤、关键词检索互相影响性能时，把 pgvector 拆成 Qdrant / OpenSearch 等独立索引层。",
  },
  {
    slug: "ontology-system",
    title: "本体论系统 / 语义图谱",
    summary: "本体系统的重点是概念、关系、规则、推理和版本，不只是画节点和边。",
    useWhen: ["需要 RDF / OWL / SPARQL", "需要概念层和规则层", "需要语义推理或知识约束"],
    minimalStack: ["Apache Jena Fuseki：RDF 三元组和 SPARQL", "PostgreSQL：用户、项目、版本、审核、任务", "Meilisearch：实体、概念、文档搜索"],
    productionStack: ["GraphDB：企业级 RDF 和推理", "PostgreSQL：工程主库", "Neo4j：属性图路径分析", "OpenSearch：全文搜索"],
    dataBoundary: ["本体定义、实例数据、业务流程、文档资料要分层", "RDF 三元组库不替代业务主库", "属性图和 RDF 不是同一类问题"],
    avoid: ["把 Neo4j 当作本体系统本身", "只建关系不定义概念约束", "没有命名空间和版本策略"],
    upgradeTrigger: "当推理规则、可视化、权限、导入导出和团队协作复杂化时，从 Jena/Fuseki 组合升级到企业 RDF 方案。",
  },
  {
    slug: "comic-production-platform",
    title: "AI 漫剧 / 内容生产工作台",
    summary: "内容生产平台的数据不是一个表能解决：剧本、角色、分镜、素材、任务、时间轴和版本需要分层。",
    useWhen: ["有剧本、角色、分镜、素材库", "需要多项目多集管理", "需要搜索素材和追踪生成任务"],
    minimalStack: ["PostgreSQL：项目、剧集、角色、分镜、任务状态", "对象存储：图片、音频、视频、源文件", "Meilisearch：素材和剧本文本搜索"],
    productionStack: ["PostgreSQL：业务主库", "OpenSearch：全文搜索与日志", "Qdrant：角色/场景/镜头语义检索", "ClickHouse：生产效率和成本分析"],
    dataBoundary: ["剧本正文、结构化分镜、素材文件、生成日志要分开", "任务状态和最终资产要分开", "提示词版本需要可追溯"],
    avoid: ["把所有内容存成一坨 JSON", "没有版本号就覆盖剧本", "只做素材库不做生产状态"],
    upgradeTrigger: "当项目数、素材数、生成任务和搜索需求增长时，增加搜索层、向量层和分析层。",
  },
  {
    slug: "desktop-pet-memory",
    title: "桌宠记忆 / 设备交互系统",
    summary: "桌宠记忆要区分短期上下文、长期事实、用户偏好、设备日志和多模态素材。",
    useWhen: ["有对话记忆", "有设备状态和用户偏好", "需要本地优先或低成本部署"],
    minimalStack: ["SQLite：本地用户资料、偏好、事件、摘要", "向量扩展或轻量向量库：语义回忆", "文件系统/对象存储：音频、图片、日志"],
    productionStack: ["PostgreSQL：账号、设备、配置、记忆事实", "Qdrant：长期语义记忆", "TimescaleDB / InfluxDB：设备遥测", "对象存储：多模态文件"],
    dataBoundary: ["每轮聊天记录不等于长期记忆", "用户事实、偏好、临时情绪、设备日志要分开", "可删除和可审计是必须项"],
    avoid: ["无限累加上下文", "把噪音识别结果直接记成事实", "设备端保存过多敏感数据"],
    upgradeTrigger: "当从单机演示变成多设备账号体系时，把 SQLite 迁移到 PostgreSQL，并把语义记忆拆到独立索引。",
  },
  {
    slug: "single-file-enterprise-tool",
    title: "单文件企业内网工具",
    summary: "面向中小企业内网，核心是低部署成本、可备份、少依赖、权限和日志。",
    useWhen: ["内网部署", "不想维护复杂组件", "需要消息、文件、知识库或流程"],
    minimalStack: ["SQLite：单机主库", "文件系统：附件和导出文件", "Meilisearch 可选：搜索层"],
    productionStack: ["PostgreSQL：多人和长期运行", "对象存储或 NAS：附件", "OpenSearch / Meilisearch：搜索", "TimescaleDB：运行日志和指标"],
    dataBoundary: ["核心业务表和附件文件分开", "系统日志和业务事实分开", "配置、权限、审计要独立建模"],
    avoid: ["为了显得企业级就引入一堆中间件", "附件直接塞数据库", "没有备份恢复流程"],
    upgradeTrigger: "当并发写、权限、审计、备份和多人协作超过单机边界时，升级 PostgreSQL。",
  },
];
