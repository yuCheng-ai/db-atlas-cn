export interface DecisionSignal {
  label: string;
  value: string;
}

export interface StackLayer {
  role: string;
  choices: string[];
  note: string;
}

export interface SolutionBundle {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  whenToUse: string[];
  startSimple: StackLayer[];
  scaleUp: StackLayer[];
  avoid: string[];
  decisionRule: string;
}

export const decisionSignals: DecisionSignal[] = [
  { label: "业务主库", value: "是否需要事务、一致性、用户权限、长期稳定运行" },
  { label: "本地优先", value: "是否要求单机、零运维、能随应用一起交付" },
  { label: "搜索", value: "是否需要中文分词、相关性排序、过滤和高亮" },
  { label: "向量", value: "是否需要语义相似度、RAG、Embedding 检索" },
  { label: "图谱", value: "你要的是工程关系查询，还是 RDF / 本体 / 推理" },
  { label: "分析", value: "是否以聚合、报表、行为分析、CSV/Parquet 查询为主" },
  { label: "时序", value: "是否天然按时间写入和查询，比如指标、日志、IoT" },
  { label: "运维", value: "团队是否能承担集群、分片、备份、监控和成本" },
];

export const solutionBundles: SolutionBundle[] = [
  {
    slug: "standard-saas",
    title: "普通业务系统 / SaaS 后台",
    shortTitle: "业务系统",
    description: "先解决事务、一致性、权限和备份，再按瓶颈外挂缓存、搜索和分析层。",
    whenToUse: ["多人协作", "订单、客户、权限、配置等核心数据", "长期运行，需要可备份可迁移"],
    startSimple: [
      { role: "主库", choices: ["PostgreSQL", "MySQL"], note: "大多数业务系统先用关系型数据库，不要一开始拆太多库。" },
      { role: "本地/单机版", choices: ["SQLite"], note: "桌面工具、单用户应用、演示版可以先用 SQLite。" },
    ],
    scaleUp: [
      { role: "缓存", choices: ["Redis", "Valkey"], note: "只缓存热点和临时状态，不替代主库。" },
      { role: "搜索", choices: ["Meilisearch", "OpenSearch", "Elasticsearch"], note: "搜索需求明显时独立出来，避免把主库 SQL 写成搜索引擎。" },
      { role: "分析", choices: ["DuckDB", "ClickHouse"], note: "报表和行为分析不要拖垮 OLTP 主库。" },
    ],
    avoid: ["把 Elasticsearch 当业务主库", "没有并发写需求却过早上 MySQL/PostgreSQL 集群", "一开始就 Redis 化所有状态"],
    decisionRule: "默认 PostgreSQL；团队更熟 MySQL 就用 MySQL；单机工具优先 SQLite。",
  },
  {
    slug: "local-excel-agent",
    title: "Excel / CSV / 本地数据工作台",
    shortTitle: "本地数据",
    description: "把文件、表格和轻量结构化数据接到一起，重点是低运维和快速查询。",
    whenToUse: ["本地 Excel / CSV 管理", "桌面软件或单文件部署", "需要 Agent 读取表格、生成报表"],
    startSimple: [
      { role: "事务存储", choices: ["SQLite"], note: "保存项目、用户配置、表结构、任务状态。" },
      { role: "分析查询", choices: ["DuckDB"], note: "直接查 CSV / Parquet / JSON，适合本地报表和数据探索。" },
    ],
    scaleUp: [
      { role: "多人协作", choices: ["PostgreSQL"], note: "从单机版升级到团队版时再引入服务端主库。" },
      { role: "全文搜索", choices: ["Meilisearch"], note: "搜索表名、字段、文档、记录说明。" },
    ],
    avoid: ["用重型大数据组件处理几百 MB 的本地文件", "把所有 Excel 先导入 MySQL 再分析", "忽视文件版本和结构变更记录"],
    decisionRule: "本地工具用 SQLite + DuckDB；多人协作再升级 PostgreSQL。",
  },
  {
    slug: "agent-rag-stack",
    title: "Agent 知识库 / RAG",
    shortTitle: "RAG",
    description: "RAG 不是只有向量库，生产系统通常需要事实主库、向量检索、关键词检索和任务状态。",
    whenToUse: ["文档问答", "Agent 工具记忆", "企业知识库", "需要语义搜索 + 关键词搜索"],
    startSimple: [
      { role: "事实主库", choices: ["PostgreSQL"], note: "保存文档、chunk、来源、权限、任务状态。" },
      { role: "向量检索", choices: ["pgvector", "Qdrant"], note: "中小规模先 pgvector；独立向量服务可用 Qdrant。" },
      { role: "关键词检索", choices: ["Meilisearch"], note: "中小规模和快速上线优先，中文体验较友好。" },
    ],
    scaleUp: [
      { role: "混合搜索", choices: ["OpenSearch", "Elasticsearch"], note: "权限过滤、复杂检索、日志和搜索平台化时再上。" },
      { role: "大规模向量", choices: ["Milvus"], note: "向量规模很大、团队能承担集群运维时再考虑。" },
    ],
    avoid: ["小项目一开始就 Milvus 集群", "只做向量召回，不做关键词召回", "不保存文档来源、权限和版本"],
    decisionRule: "小项目 PostgreSQL + pgvector；中等规模 PostgreSQL + Qdrant + Meilisearch；复杂检索再上 OpenSearch。",
  },
  {
    slug: "ontology-kg-stack",
    title: "本体论系统 / 语义知识图谱",
    shortTitle: "本体图谱",
    description: "先判断你要的是属性图工程查询，还是 RDF、OWL、SPARQL 和语义推理。",
    whenToUse: ["概念、关系、规则、推理", "RDF 三元组", "SPARQL 查询", "本体管理"],
    startSimple: [
      { role: "RDF / SPARQL", choices: ["Apache Jena Fuseki", "RDF4J"], note: "适合本体、三元组、语义规则和 Java 生态。" },
      { role: "业务主库", choices: ["PostgreSQL"], note: "保存用户、权限、任务、版本、审计等工程数据。" },
    ],
    scaleUp: [
      { role: "企业 RDF", choices: ["GraphDB"], note: "需要更强推理、可视化和企业功能时再评估。" },
      { role: "属性图", choices: ["Neo4j"], note: "路径查询、关系探索、工程图关系可搭配使用。" },
      { role: "搜索", choices: ["OpenSearch", "Meilisearch"], note: "给实体、概念、文档加全文检索入口。" },
    ],
    avoid: ["把 Neo4j 等同于本体系统", "只建节点边，不定义概念层和约束", "把 RDF 三元组库当普通业务主库"],
    decisionRule: "本体和推理先看 Jena / RDF4J；路径关系和图遍历再看 Neo4j。",
  },
  {
    slug: "search-stack",
    title: "站内搜索 / 文档搜索 / 商品搜索",
    shortTitle: "搜索",
    description: "搜索系统看重分词、相关性、过滤、高亮和更新延迟，不要强行塞进业务主库。",
    whenToUse: ["文章、商品、文档检索", "中文分词", "搜索排序和过滤", "用户可见搜索体验"],
    startSimple: [
      { role: "轻量搜索", choices: ["Meilisearch"], note: "部署简单，适合中小规模站内搜索。" },
      { role: "业务主库", choices: ["PostgreSQL", "MySQL"], note: "主库仍然保存权威业务数据。" },
    ],
    scaleUp: [
      { role: "复杂搜索", choices: ["OpenSearch", "Elasticsearch"], note: "需要复杂聚合、日志、权限过滤、海量数据时使用。" },
      { role: "向量混合", choices: ["OpenSearch", "Qdrant"], note: "语义搜索和关键词搜索混合时再引入。" },
    ],
    avoid: ["用 LIKE 做正式搜索体验", "把搜索引擎当唯一数据源", "忽视索引同步失败和重建机制"],
    decisionRule: "轻量产品先 Meilisearch；复杂搜索平台选 OpenSearch / Elasticsearch。",
  },
  {
    slug: "analytics-stack",
    title: "报表 / BI / OLAP 分析",
    shortTitle: "分析报表",
    description: "分析层和业务主库分开，避免大聚合查询拖垮在线业务。",
    whenToUse: ["BI 报表", "用户行为分析", "聚合查询", "CSV/Parquet 探索"],
    startSimple: [
      { role: "本地分析", choices: ["DuckDB"], note: "适合单机、本地文件、中小规模分析。" },
      { role: "业务主库", choices: ["PostgreSQL", "MySQL"], note: "在线业务数据仍在 OLTP 主库。" },
    ],
    scaleUp: [
      { role: "实时 OLAP", choices: ["ClickHouse"], note: "高性能列式分析，适合日志、行为和报表。" },
      { role: "实时事件分析", choices: ["Apache Druid", "Apache Pinot"], note: "面向高并发分析查询和实时摄入。" },
    ],
    avoid: ["直接在主库跑重型 BI", "数据量不大却引入复杂数仓链路", "没有口径管理就做报表平台"],
    decisionRule: "本地和小规模用 DuckDB；正式分析层优先 ClickHouse；实时事件产品再看 Druid / Pinot。",
  },
  {
    slug: "timeseries-stack",
    title: "日志 / 指标 / IoT 时序数据",
    shortTitle: "时序监控",
    description: "时序数据重点是高频写入、时间范围查询、保留策略和降采样。",
    whenToUse: ["监控指标", "应用日志", "IoT 遥测", "按时间窗口聚合"],
    startSimple: [
      { role: "PostgreSQL 生态", choices: ["TimescaleDB"], note: "想保留 SQL 和 PostgreSQL 生态时优先。" },
      { role: "专用时序", choices: ["InfluxDB"], note: "指标采集生态成熟，适合监控和遥测。" },
    ],
    scaleUp: [
      { role: "日志分析", choices: ["OpenSearch", "ClickHouse"], note: "日志全文搜索和聚合分析可分层处理。" },
      { role: "冷热分层", choices: ["对象存储", "Parquet", "DuckDB"], note: "历史数据进入低成本归档和离线分析。" },
    ],
    avoid: ["把高频指标直接写入普通业务表", "不设计保留周期", "只存原始数据不做降采样"],
    decisionRule: "SQL 友好选 TimescaleDB；监控遥测选 InfluxDB；日志分析另配 OpenSearch / ClickHouse。",
  },
];
