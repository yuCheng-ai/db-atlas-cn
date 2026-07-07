export interface ScenarioRecommendation {
  slug: string;
  name: string;
  why: string;
}

export interface Scenario {
  slug: string;
  title: string;
  description: string;
  recommendations: ScenarioRecommendation[];
  explanation: string;
}

export const scenarios: Scenario[] = [
  {
    slug: "business-main-db",
    title: "普通业务系统主库",
    description:
      "多人、多用户、长期运行的业务系统需要稳定可靠的事务型主存储。",
    recommendations: [
      {
        slug: "postgresql",
        name: "PostgreSQL",
        why: "功能最全面的开源关系型数据库，ACID 事务、丰富索引、扩展生态成熟。",
      },
      {
        slug: "mysql",
        name: "MySQL",
        why: "广泛使用、运维成熟、读扩展方案成熟，适合多数标准业务场景。",
      },
      {
        slug: "sqlite",
        name: "SQLite",
        why: "适合单机、本地、小工具和嵌入式应用，零运维成本。",
      },
    ],
    explanation:
      "PostgreSQL / MySQL 适合多人、多用户、长期运行的业务系统；SQLite 适合单机、本地、小工具和嵌入式应用。",
  },
  {
    slug: "local-csv-analysis",
    title: "本地 Excel / CSV 分析",
    description:
      "在本地对 CSV、Parquet、JSON 等文件做即席分析和数据探索。",
    recommendations: [
      {
        slug: "duckdb",
        name: "DuckDB",
        why: "专为 OLAP 分析优化的嵌入式数据库，可直接查询 CSV、Parquet、JSON 文件，零配置。",
      },
      {
        slug: "sqlite",
        name: "SQLite",
        why: "适合本地事务型存储，也可处理小规模分析查询。",
      },
    ],
    explanation:
      "DuckDB 适合本地分析、CSV、Parquet、临时数据探索；SQLite 适合本地事务型存储。",
  },
  {
    slug: "agent-rag",
    title: "Agent 知识库 / RAG",
    description:
      "为 AI Agent 或 RAG（检索增强生成）应用构建知识库，需要语义搜索和关键词检索。",
    recommendations: [
      {
        slug: "postgresql",
        name: "PostgreSQL + pgvector",
        why: "业务库和向量库合一，简化架构，pgvector 插件成熟稳定。",
      },
      {
        slug: "qdrant",
        name: "Qdrant",
        why: "高性能向量检索，Rust 实现，支持丰富过滤条件，生态完善。",
      },
      {
        slug: "milvus",
        name: "Milvus",
        why: "大规模向量检索，分布式架构，适合十亿级向量规模。",
      },
      {
        slug: "opensearch",
        name: "OpenSearch",
        why: "兼顾关键词检索和向量检索，适合需要混合搜索的场景。",
      },
      {
        slug: "meilisearch",
        name: "Meilisearch",
        why: "极简部署，中文分词良好，适合快速搭建搜索型 RAG。",
      },
    ],
    explanation:
      "向量库负责语义相似度，搜索引擎负责关键词检索，PostgreSQL 负责业务事实。三者组合是生产级 RAG 的常见架构。",
  },
  {
    slug: "ontology-kg",
    title: "本体论系统 / 知识图谱",
    description:
      "构建基于本体（ontology）、RDF 三元组和推理规则的知识图谱系统。",
    recommendations: [
      {
        slug: "apache-jena-fuseki",
        name: "Apache Jena Fuseki",
        why: "Apache 基金会开源项目，完整的 RDF 三元组存储和 SPARQL 服务器，支持 OWL 推理。",
      },
      {
        slug: "rdf4j",
        name: "RDF4J",
        why: "Java 生态的 RDF 框架，多后端支持，适合嵌入 Java 应用。",
      },
      {
        slug: "graphdb",
        name: "GraphDB",
        why: "企业级 RDF 三元组数据库，OWL 推理能力强，可视化界面完善。",
      },
      {
        slug: "neo4j",
        name: "Neo4j",
        why: "属性图模型的代表，Cypher 查询语言成熟，适合路径查询和工程化图关系。",
      },
    ],
    explanation:
      "RDF / SPARQL 更适合本体建模、三元组推理和语义图谱；Neo4j（属性图）更适合路径查询和工程化图关系。两者可以互补使用。",
  },
  {
    slug: "logs-metrics-timeseries",
    title: "日志 / 指标 / 时间序列",
    description:
      "采集、存储和查询按时间索引的监控指标、应用日志和 IoT 遥测数据。",
    recommendations: [
      {
        slug: "influxdb",
        name: "InfluxDB",
        why: "专为时序数据设计的查询语言（Flux），丰富的数据采集生态。",
      },
      {
        slug: "timescaledb",
        name: "TimescaleDB",
        why: "基于 PostgreSQL 的时序扩展，可沿用 PostgreSQL 生态和 SQL。",
      },
    ],
    explanation:
      "时序数据库适合按时间写入和查询指标、监控、IoT 数据。TimescaleDB 的优势在于可复用 PostgreSQL 的 SQL 和生态。",
  },
  {
    slug: "bigdata-olap",
    title: "大数据分析 / OLAP",
    description:
      "对大规模数据做聚合分析、BI 报表、用户行为分析和实时数据仓库。",
    recommendations: [
      {
        slug: "clickhouse",
        name: "ClickHouse",
        why: "极快的列式分析引擎，SQL 兼容，实时分析能力业界领先。",
      },
      {
        slug: "duckdb",
        name: "DuckDB",
        why: "嵌入式 OLAP，适合本地分析和中规模数据的快速探索。",
      },
      {
        slug: "apache-druid",
        name: "Apache Druid",
        why: "专为实时摄入和亚秒级分析查询设计，适合大规模事件分析。",
      },
      {
        slug: "apache-pinot",
        name: "Apache Pinot",
        why: "LinkedIn 开源的实时 OLAP 引擎，适合面向用户的分析产品。",
      },
    ],
    explanation:
      "OLAP 数据库适合聚合分析、报表、行为分析和大规模查询，不适合替代业务主库做高频事务处理。",
  },
  {
    slug: "fulltext-search",
    title: "全文搜索",
    description:
      "为文档、商品、文章等提供关键词检索、分词、过滤和相关性排序。",
    recommendations: [
      {
        slug: "elasticsearch",
        name: "Elasticsearch",
        why: "最广泛使用的搜索引擎，生态丰富，Kibana 提供可视化。",
      },
      {
        slug: "opensearch",
        name: "OpenSearch",
        why: "Apache 2.0 许可的 Elasticsearch 替代品，社区活跃。",
      },
      {
        slug: "meilisearch",
        name: "Meilisearch",
        why: "极简部署和运维，中文分词良好，适合中小规模搜索。",
      },
    ],
    explanation:
      "搜索引擎适合关键词检索、分词、过滤、排序和相关性查询。Elasticsearch / OpenSearch 适合大规模和复杂场景，Meilisearch 适合中小规模和快速搭建。",
  },
];
