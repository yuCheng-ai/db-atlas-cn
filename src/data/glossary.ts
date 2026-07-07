export interface GlossaryTerm {
  term: string;
  slug: string;
  category: string;
  plain: string;
  whenItMatters: string;
  related: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  { term: "OLTP", slug: "oltp", category: "工作负载", plain: "面向在线业务事务的数据库负载，例如下单、登录、修改配置。", whenItMatters: "需要强一致、频繁写入、低延迟读写时。", related: ["PostgreSQL", "MySQL", "SQLite"] },
  { term: "OLAP", slug: "olap", category: "工作负载", plain: "面向分析和聚合查询的数据库负载，例如报表、行为分析、数据探索。", whenItMatters: "需要大量 group by、scan、聚合统计时。", related: ["DuckDB", "ClickHouse", "Druid"] },
  { term: "ACID", slug: "acid", category: "事务", plain: "事务可靠性的四个性质：原子性、一致性、隔离性、持久性。", whenItMatters: "订单、支付、库存、权限、审计等不能乱的业务。", related: ["PostgreSQL", "MySQL", "SQLite"] },
  { term: "嵌入式数据库", slug: "embedded", category: "部署", plain: "数据库作为应用的一部分运行，不需要独立数据库服务。", whenItMatters: "桌面软件、移动端、单机工具、离线优先应用。", related: ["SQLite", "DuckDB"] },
  { term: "向量检索", slug: "vector-search", category: "AI / RAG", plain: "把文本、图片等转成向量后，按语义相似度查找。", whenItMatters: "RAG、语义搜索、相似文档、长期记忆。", related: ["pgvector", "Qdrant", "Milvus"] },
  { term: "全文搜索", slug: "fulltext-search", category: "搜索", plain: "对文本进行分词、索引、排序、高亮和过滤。", whenItMatters: "文档、商品、文章、日志、素材搜索。", related: ["Meilisearch", "OpenSearch", "Elasticsearch"] },
  { term: "混合搜索", slug: "hybrid-search", category: "AI / RAG", plain: "关键词搜索和向量搜索同时使用，再合并排序。", whenItMatters: "既要搜语义，也要搜编号、标题、专有名词。", related: ["OpenSearch", "Meilisearch", "Qdrant"] },
  { term: "属性图", slug: "property-graph", category: "图", plain: "节点和边都可以带属性，常用于路径、邻居和关系网络查询。", whenItMatters: "组织关系、供应链、依赖关系、路径分析。", related: ["Neo4j"] },
  { term: "RDF", slug: "rdf", category: "语义网", plain: "用主语、谓语、宾语三元组表达知识。", whenItMatters: "本体、标准化知识表达、语义互操作。", related: ["Apache Jena Fuseki", "RDF4J", "GraphDB"] },
  { term: "SPARQL", slug: "sparql", category: "语义网", plain: "查询 RDF 三元组数据的标准查询语言。", whenItMatters: "需要查询本体、概念、语义关系和推理结果。", related: ["Apache Jena Fuseki", "RDF4J", "GraphDB"] },
  { term: "列式存储", slug: "columnar", category: "分析", plain: "按列组织数据，更适合大范围扫描和聚合分析。", whenItMatters: "BI、报表、日志聚合、用户行为分析。", related: ["ClickHouse", "DuckDB", "Druid"] },
  { term: "时序数据", slug: "timeseries", category: "监控", plain: "天然按时间写入和查询的数据，例如指标、遥测、价格、传感器数据。", whenItMatters: "需要时间窗口聚合、降采样、保留策略。", related: ["TimescaleDB", "InfluxDB"] },
  { term: "缓存", slug: "cache", category: "架构", plain: "把热点数据或临时状态放到更快的存储中。", whenItMatters: "读压力大、会话状态、限流、排行榜、临时状态。", related: ["Redis", "Valkey"] },
  { term: "主库", slug: "source-of-truth", category: "架构", plain: "系统里保存权威业务事实的数据库。", whenItMatters: "需要明确哪些数据可以重建，哪些数据不能丢。", related: ["PostgreSQL", "MySQL", "SQLite"] },
];
