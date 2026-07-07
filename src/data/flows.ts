export interface DecisionPath {
  question: string;
  when: string;
  recommend: string;
  next: string;
}

export interface DecisionFlow {
  slug: string;
  title: string;
  summary: string;
  paths: DecisionPath[];
}

export const decisionFlows: DecisionFlow[] = [
  {
    slug: "start",
    title: "从需求开始",
    summary: "先判断系统主要矛盾，不要直接从数据库品牌开始。",
    paths: [
      { question: "这是多人长期运行的业务系统吗？", when: "有用户、权限、订单、流程、配置、审计等核心数据", recommend: "PostgreSQL / MySQL", next: "先确定主库，再考虑缓存、搜索和分析层。" },
      { question: "这是单机工具或桌面应用吗？", when: "数据跟随应用交付，部署越轻越好", recommend: "SQLite", next: "需要分析 CSV / Parquet 时再加入 DuckDB。" },
      { question: "主要是报表和聚合分析吗？", when: "读多写少、大量 group by、用户行为或 BI", recommend: "DuckDB / ClickHouse", next: "不要直接压业务主库。" },
      { question: "主要是搜索体验吗？", when: "需要中文分词、过滤、高亮、相关性排序", recommend: "Meilisearch / OpenSearch", next: "主库保存权威数据，搜索引擎保存索引。" },
    ],
  },
  {
    slug: "ai-data",
    title: "AI / RAG / Agent 数据层",
    summary: "AI 场景不是只有向量库，仍然需要事实主库、索引、权限和任务状态。",
    paths: [
      { question: "文档量小、团队小、想快速上线？", when: "几万到几十万 chunk，主要做问答和检索", recommend: "PostgreSQL + pgvector", next: "先减少组件数量，避免过早分布式。" },
      { question: "语义检索和过滤条件都比较重？", when: "向量检索频繁，过滤字段多，需要独立服务", recommend: "PostgreSQL + Qdrant", next: "主库负责事实，Qdrant 负责向量。" },
      { question: "关键词检索不可缺？", when: "用户会搜标题、原文、编号、实体名", recommend: "Meilisearch / OpenSearch", next: "与向量召回做混合搜索。" },
      { question: "规模已经很大？", when: "向量量级和并发都明显超过单机能力", recommend: "Milvus / OpenSearch 集群", next: "先确认运维能力、备份策略和成本。" },
    ],
  },
  {
    slug: "graph-ontology",
    title: "图谱 / 本体 / 关系网络",
    summary: "先分清属性图和 RDF 本体，不要把所有图问题都塞给同一种数据库。",
    paths: [
      { question: "你要的是本体、概念、规则和推理吗？", when: "需要 RDF、OWL、SPARQL、语义约束", recommend: "Apache Jena Fuseki / RDF4J", next: "业务数据仍建议配 PostgreSQL。" },
      { question: "你要的是路径、邻居和关系遍历吗？", when: "组织关系、供应链、依赖网络、路径查询", recommend: "Neo4j", next: "把它作为关系分析层，不要替代全部业务主库。" },
      { question: "你只是有外键关系？", when: "普通订单、客户、部门、角色等结构化关系", recommend: "PostgreSQL / MySQL", next: "先别上图数据库。" },
    ],
  },
  {
    slug: "operations",
    title: "日志 / 指标 / 监控",
    summary: "时间序列和日志要考虑写入频率、保留周期、降采样和冷热分层。",
    paths: [
      { question: "主要是指标和 IoT 遥测？", when: "时间戳、设备、指标值、时间窗口聚合", recommend: "TimescaleDB / InfluxDB", next: "先设计保留周期和降采样。" },
      { question: "主要是日志全文检索？", when: "需要按关键词、服务、traceId 查日志", recommend: "OpenSearch", next: "历史冷数据归档到对象存储。" },
      { question: "主要是日志聚合分析？", when: "按天、服务、用户、事件做大量统计", recommend: "ClickHouse", next: "与日志搜索层分清职责。" },
    ],
  },
];
