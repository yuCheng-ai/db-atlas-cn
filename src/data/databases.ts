export interface Database {
  name: string;
  slug: string;
  categories: string[];
  summary: string;
  description: string;
  goodFor: string[];
  badFor: string[];
  typicalUseCases: string[];
  deployment: string[];
  language?: string;
  license?: string;
  difficulty: "低" | "中" | "高";
  maturity: "实验性" | "成熟" | "企业级";
  related: string[];
  officialWebsite?: string;
  github?: string;
  /** 与相近数据库的区别 */
  vsAlternatives?: string;
  /** 学习建议 */
  learningTip?: string;
  /** 常见组合 */
  commonCombinations?: string[];
}

export const databases: Database[] = [
  {
    name: "PostgreSQL",
    slug: "postgresql",
    categories: ["relational"],
    summary: "功能最全面的开源关系型数据库，支持丰富的数据类型、索引和扩展。",
    description:
      "PostgreSQL 是一个功能强大的开源对象-关系型数据库系统，已有超过 35 年的活跃开发历史。它以其可靠性、数据完整性和扩展能力而著称。支持 JSON/JSONB、全文搜索、地理空间数据（PostGIS）、向量检索（pgvector）、时序数据（TimescaleDB）等多种扩展。",
    goodFor: [
      "业务系统主库",
      "复杂查询和报表",
      "需要强事务一致性的场景",
      "多数据类型混合存储",
      "需要扩展定制查询引擎的场景",
    ],
    badFor: [
      "超大规模日志全文检索（应用搜索引擎）",
      "超大规模 OLAP（可搭配 ClickHouse）",
      "极高频率的简单 KV 读写（可用 Redis 缓存）",
    ],
    typicalUseCases: [
      "SaaS 业务主库",
      "金融和电商系统",
      "地理信息系统（GIS）",
      "数据仓库（配合 FDW）",
      "RAG 知识库（配合 pgvector）",
    ],
    deployment: ["Docker", "本地", "云服务", "托管服务"],
    language: "C",
    license: "PostgreSQL License",
    difficulty: "中",
    maturity: "企业级",
    related: ["mysql", "sqlite", "timescaledb"],
    officialWebsite: "https://www.postgresql.org/",
    github: "https://github.com/postgres/postgres",
    vsAlternatives:
      "相比 MySQL：PostgreSQL 在复杂查询、扩展能力和标准兼容性方面更强，但简单读场景的运维方案不如 MySQL 广泛。",
    learningTip:
      "从官方文档的 Tutorial 开始，然后掌握 EXPLAIN ANALYZE、索引类型和常用扩展（pg_stat_statements、pgvector）。",
    commonCombinations: [
      "PostgreSQL + Redis（缓存）",
      "PostgreSQL + ClickHouse（OLAP 分析层）",
      "PostgreSQL + pgvector + OpenSearch（RAG 知识库）",
      "PostgreSQL + PostGIS（地理信息）",
    ],
  },
  {
    name: "MySQL",
    slug: "mysql",
    categories: ["relational"],
    summary: "世界最流行的开源关系型数据库，广泛用于 Web 应用和 SaaS 系统。",
    description:
      "MySQL 是最广泛使用的开源关系型数据库，由 Oracle 维护。它以其易用性、丰富的运维工具和广泛的云服务支持而著称。InnoDB 存储引擎提供 ACID 事务，适合读多写少的 Web 应用。",
    goodFor: [
      "Web 应用主库",
      "读多写少的业务场景",
      "需要广泛云服务支持的场景",
      "CMS 和电商平台",
    ],
    badFor: [
      "复杂分析查询（OLAP）",
      "需要丰富扩展和自定义类型的场景",
      "全文搜索需求（应用搜索引擎）",
    ],
    typicalUseCases: [
      "网站和 CMS 后端",
      "电商和订单系统",
      "SaaS 多租户应用",
      "WordPress / Drupal 等 CMS",
    ],
    deployment: ["Docker", "本地", "云服务", "托管服务"],
    language: "C/C++",
    license: "GPLv2（社区版）",
    difficulty: "低",
    maturity: "企业级",
    related: ["postgresql", "mariadb", "percona-server"],
    officialWebsite: "https://www.mysql.com/",
    github: "https://github.com/mysql/mysql-server",
    vsAlternatives:
      "相比 PostgreSQL：MySQL 的运维生态更成熟（备份、主从复制方案广泛），但 SQL 标准支持和扩展能力较弱。",
    learningTip:
      "先理解 InnoDB 存储引擎、索引（B+Tree）和慢查询优化，再深入主从复制和读写分离方案。",
    commonCombinations: [
      "MySQL + Redis（缓存）",
      "MySQL + Elasticsearch（搜索层）",
      "MySQL + ClickHouse（分析层）",
    ],
  },
  {
    name: "SQLite",
    slug: "sqlite",
    categories: ["relational", "embedded"],
    summary: "零配置、嵌入式的轻量级关系型数据库，全球部署最广泛的数据库引擎。",
    description:
      "SQLite 是一个零配置、自包含、嵌入式的 SQL 数据库引擎。它不是客户端-服务器模式，而是直接读写磁盘上的数据库文件。每个移动设备、浏览器和桌面应用几乎都在使用它。",
    goodFor: [
      "移动应用本地存储",
      "桌面软件",
      "CI/CD 测试环境",
      "嵌入式设备",
      "单机小工具和脚本",
      "中小型网站（读多写少）",
    ],
    badFor: [
      "高并发写场景",
      "多服务器共享数据库",
      "需要细粒度用户权限管理",
      "超大数据库（数百 GB 以上）",
    ],
    typicalUseCases: [
      "iOS / Android 本地数据库",
      "Electron 应用",
      "Python 脚本数据存储",
      "嵌入式设备数据存储",
      "CI 测试数据库",
    ],
    deployment: ["嵌入式", "本地"],
    language: "C",
    license: "Public Domain",
    difficulty: "低",
    maturity: "企业级",
    related: ["duckdb", "postgresql"],
    officialWebsite: "https://www.sqlite.org/",
    github: "https://github.com/sqlite/sqlite",
    vsAlternatives:
      "相比 PostgreSQL / MySQL：SQLite 不需要服务进程，零运维，但并发写入能力和网络访问能力有限。",
    learningTip:
      "阅读官方文档的「Appropriate Uses For SQLite」页面，理解 SQLite 适合和不适合的场景。",
    commonCombinations: [
      "SQLite + Litestream（持续备份到 S3）",
      "SQLite + Turso（边缘分布式 SQLite）",
    ],
  },
  {
    name: "DuckDB",
    slug: "duckdb",
    categories: ["embedded", "olap"],
    summary: "嵌入式 OLAP 数据库，可直接查询 CSV、Parquet 文件，数据分析利器。",
    description:
      "DuckDB 是一个嵌入式 OLAP 数据库，被称为「SQLite for analytics」。它支持直接在 CSV、Parquet、JSON 文件上运行复杂 SQL 查询，无需导入数据。向量化查询引擎使其在分析场景下性能极佳。",
    goodFor: [
      "本地数据分析",
      "CSV / Parquet / JSON 查询",
      "数据管道中的中间处理",
      "Pandas / R 的 SQL 替代",
      "嵌入数据应用",
    ],
    badFor: [
      "多用户高并发事务写入",
      "Web 应用业务主库",
      "需要精细访问控制的场景",
    ],
    typicalUseCases: [
      "数据科学家本地分析",
      "ETL 管道中间处理",
      "在 Parquet 文件上运行 SQL",
      "Jupyter Notebook 数据分析",
      "无服务器函数中的数据查询",
    ],
    deployment: ["嵌入式", "本地"],
    language: "C++",
    license: "MIT",
    difficulty: "低",
    maturity: "成熟",
    related: ["sqlite", "clickhouse", "polars", "dremio"],
    officialWebsite: "https://duckdb.org/",
    github: "https://github.com/duckdb/duckdb",
    vsAlternatives:
      "相比 SQLite：都是嵌入式数据库，但 DuckDB 面向分析（OLAP），SQLite 面向事务（OLTP）。相比 ClickHouse：DuckDB 嵌入式部署，零运维，适合本地分析。",
    learningTip:
      "安装 CLI 后直接 `duckdb` 上手，阅读官方「Why DuckDB」和「Benchmarks」页面理解其定位。",
    commonCombinations: [
      "DuckDB + Python/Pandas",
      "DuckDB + MotherDuck（云端 DuckDB）",
      "DuckDB + dbt（数据建模）",
    ],
  },
  {
    name: "Redis",
    slug: "redis",
    categories: ["kv-cache"],
    summary: "极速内存数据结构存储，支持字符串、列表、哈希、集合等多种数据结构。",
    description:
      "Redis 是一个开源的内存数据结构存储系统，可用作数据库、缓存、消息代理和流处理引擎。它支持丰富的数据结构（字符串、哈希、列表、集合、有序集合、流、地理空间等），并提供持久化选项。",
    goodFor: [
      "缓存加速",
      "会话管理",
      "排行榜和计数器",
      "消息队列（Streams）",
      "分布式锁",
      "速率限制",
    ],
    badFor: [
      "大容量持久化主存储（成本高）",
      "复杂关联查询",
      "需要 SQL 查询的场景",
    ],
    typicalUseCases: [
      "Web 应用缓存层",
      "用户会话存储",
      "实时排行榜",
      "API 速率限制",
      "任务队列",
    ],
    deployment: ["Docker", "本地", "云服务", "托管服务"],
    language: "C",
    license: "RSALv2 / SSPLv1（Redis 7.4+）",
    difficulty: "低",
    maturity: "企业级",
    related: ["valkey", "dragonfly", "garnet"],
    officialWebsite: "https://redis.io/",
    github: "https://github.com/redis/redis",
    vsAlternatives:
      "Redis 在 2024 年变更了许可协议（RSALv2 / SSPLv1），Valkey 作为其 MIT 许可的社区替代品，由 Linux Foundation 维护，API 兼容。",
    learningTip:
      "从 Redis CLI 和基本数据类型（STRING、HASH、LIST、SET、ZSET）开始，再学习 Streams 和持久化配置。",
    commonCombinations: [
      "Redis + PostgreSQL / MySQL（缓存层）",
      "Redis + Celery（任务队列）",
      "Redis + WebSocket（消息广播）",
    ],
  },
  {
    name: "Valkey",
    slug: "valkey",
    categories: ["kv-cache"],
    summary:
      "Redis 的 MIT 许可社区替代品，由 Linux Foundation 维护，API 兼容 Redis。",
    description:
      "Valkey 是 Redis 变更许可后的社区分支，由 Linux Foundation 托管。它与 Redis API 完全兼容，保持 MIT 许可。核心贡献者来自 AWS、Google、Oracle 等公司。",
    goodFor: [
      "与 Redis 相同：缓存、会话、排行榜、消息队列",
      "希望保持开源 MIT 许可的团队",
    ],
    badFor: [
      "与 Redis 相同：大容量持久化主存储、复杂关联查询",
    ],
    typicalUseCases: [
      "缓存加速（MIT 许可替代 Redis）",
      "会话管理",
      "消息队列",
      "速率限制",
    ],
    deployment: ["Docker", "本地", "云服务"],
    language: "C",
    license: "MIT",
    difficulty: "低",
    maturity: "成熟",
    related: ["redis", "dragonfly", "garnet"],
    officialWebsite: "https://valkey.io/",
    github: "https://github.com/valkey-io/valkey",
    vsAlternatives:
      "相比 Redis：API 兼容，许可为 MIT，由社区中立维护。适合对许可合规有要求的团队。",
    learningTip: "如果你已经熟悉 Redis，可以直接切换到 Valkey，API 完全兼容。",
    commonCombinations: [
      "Valkey + PostgreSQL（缓存层）",
      "Valkey + Kubernetes（容器化部署）",
    ],
  },
  {
    name: "MongoDB",
    slug: "mongodb",
    categories: ["document"],
    summary:
      "最流行的文档型数据库，基于 JSON/BSON，支持灵活模式和水平扩展。",
    description:
      "MongoDB 是一个开源的文档型 NoSQL 数据库，以 BSON（类 JSON）格式存储数据。它支持灵活的 Schema、丰富的查询语言和水平扩展（分片）。Atlas 是其托管的云服务版本。",
    goodFor: [
      "快速迭代开发（模式常变）",
      "半结构化数据",
      "内容管理和产品目录",
      "IoT 数据采集",
      "水平扩展写入场景",
    ],
    badFor: [
      "复杂多表关联查询",
      "严格 ACID 跨文档事务",
      "固定模式的结构化数据",
    ],
    typicalUseCases: [
      "产品目录",
      "用户画像存储",
      "内容管理系统",
      "移动应用后端",
      "IoT 数据采集",
    ],
    deployment: ["Docker", "本地", "云服务（Atlas）"],
    language: "C++",
    license: "SSPL",
    difficulty: "中",
    maturity: "企业级",
    related: ["postgresql", "arangodb", "couchdb", "ferretdb"],
    officialWebsite: "https://www.mongodb.com/",
    github: "https://github.com/mongodb/mongo",
    vsAlternatives:
      "相比 PostgreSQL JSONB：PostgreSQL 可以替代文档模型的许多使用场景，且提供更强的事务和 SQL 支持。MongoDB 在水平扩展和原生文档查询方面更流畅。",
    learningTip:
      "从 MongoDB University 的免费课程开始，理解文档模型设计模式（vs 传统范式化设计）。",
    commonCombinations: [
      "MongoDB + Elasticsearch（全文搜索）",
      "MongoDB + Redis（缓存）",
      "MongoDB + Kafka（CDC 数据同步）",
    ],
  },
  {
    name: "Elasticsearch",
    slug: "elasticsearch",
    categories: ["search-engine"],
    summary:
      "基于 Lucene 的分布式搜索引擎，广泛应用于日志分析和全文检索。",
    description:
      "Elasticsearch 是一个基于 Apache Lucene 的分布式搜索和分析引擎。它支持全文搜索、结构化搜索、分析聚合和实时数据可视化（配合 Kibana）。ELK 栈（Elasticsearch + Logstash + Kibana）是业界标准的日志分析方案。",
    goodFor: [
      "全文搜索",
      "日志分析",
      "应用性能监控（APM）",
      "安全事件分析（SIEM）",
      "商品搜索和推荐",
    ],
    badFor: [
      "作为主数据库使用（不建议）",
      "高频更新的业务数据存储",
      "需要事务一致性的场景",
    ],
    typicalUseCases: [
      "站内搜索",
      "日志集中管理和分析",
      "商品目录搜索",
      "安全审计和告警",
      "APM 可观测性",
    ],
    deployment: ["Docker", "本地", "云服务（Elastic Cloud）"],
    language: "Java",
    license: "Elastic License 2.0 / SSPL",
    difficulty: "高",
    maturity: "企业级",
    related: ["opensearch", "meilisearch", "solr"],
    officialWebsite: "https://www.elastic.co/elasticsearch/",
    github: "https://github.com/elastic/elasticsearch",
    vsAlternatives:
      "OpenSearch 是 Elasticsearch 的 Apache 2.0 分支，API 兼容。在许可合规要求高的场景中推荐使用 OpenSearch。",
    learningTip:
      "先理解倒排索引原理，再学习 mapping、analyzer（分词器）、query DSL 和聚合。",
    commonCombinations: [
      "Elasticsearch + Kibana（可视化）",
      "Elasticsearch + Logstash（数据采集）",
      "Elasticsearch + Filebeat（日志采集）",
    ],
  },
  {
    name: "OpenSearch",
    slug: "opensearch",
    categories: ["search-engine", "vector"],
    summary:
      "Apache 2.0 许可的 Elasticsearch 替代品，由 AWS 主导，社区活跃。",
    description:
      "OpenSearch 是 Elasticsearch 7.10 的 Apache 2.0 许可分支，由 AWS 维护和主导开发。它在兼容 Elasticsearch API 的同时加入了向量搜索、异常检测、安全分析等新功能。",
    goodFor: [
      "全文搜索（Apache 2.0 许可）",
      "日志分析",
      "向量搜索 + 关键词混合检索",
      "安全事件分析",
    ],
    badFor: [
      "与 Elasticsearch 相同：不建议作为主数据库",
    ],
    typicalUseCases: [
      "站内搜索（Apache 2.0 合规）",
      "日志分析（OpenSearch Dashboards）",
      "RAG 知识库混合检索",
      "安全审计",
    ],
    deployment: ["Docker", "本地", "云服务（Amazon OpenSearch）"],
    language: "Java",
    license: "Apache 2.0",
    difficulty: "高",
    maturity: "成熟",
    related: ["elasticsearch", "meilisearch", "solr"],
    officialWebsite: "https://opensearch.org/",
    github: "https://github.com/opensearch-project/OpenSearch",
    vsAlternatives:
      "相比 Elasticsearch：OpenSearch 使用 Apache 2.0 许可，API 大部分兼容。Elastic 在高级功能（ML、APM）上更领先。",
    learningTip:
      "如果之前用过 Elasticsearch，迁移成本低。建议从向量搜索和混合检索新功能开始探索。",
    commonCombinations: [
      "OpenSearch + OpenSearch Dashboards",
      "OpenSearch + Data Prepper（数据采集）",
      "OpenSearch + PostgreSQL（RAG 场景）",
    ],
  },
  {
    name: "Meilisearch",
    slug: "meilisearch",
    categories: ["search-engine"],
    summary:
      "极简、快速的 Rust 搜索引擎，中文分词良好，部署配置简单。",
    description:
      "Meilisearch 是一个用 Rust 编写的开源搜索引擎，以极简的部署和配置著称。它内置模糊匹配、同义词、分词（包括中文 jieba 分词）、排序和过滤功能，适合中小规模搜索需求。",
    goodFor: [
      "中小规模站内搜索",
      "快速搭建搜索功能",
      "中文文档搜索",
      "需要极简运维的搜索场景",
      "RAG 关键词检索",
    ],
    badFor: [
      "超大规模日志分析（用 Elasticsearch/OpenSearch）",
      "需要复杂聚合和可视化的场景",
    ],
    typicalUseCases: [
      "文档网站搜索",
      "电商商品搜索",
      "博客搜索",
      "RAG 知识库关键词检索",
    ],
    deployment: ["Docker", "本地", "云服务（Meilisearch Cloud）"],
    language: "Rust",
    license: "MIT",
    difficulty: "低",
    maturity: "成熟",
    related: ["elasticsearch", "opensearch", "typesense"],
    officialWebsite: "https://www.meilisearch.com/",
    github: "https://github.com/meilisearch/meilisearch",
    vsAlternatives:
      "相比 Elasticsearch / OpenSearch：极其轻量，默认配置即可使用，但复杂聚合和大规模集群能力弱。",
    learningTip:
      "Docker 一键启动，通过官方文档的 Quick Start 可在 10 分钟内上手。",
    commonCombinations: [
      "Meilisearch + PostgreSQL（数据源）",
      "Meilisearch + Qdrant（RAG 混合检索）",
    ],
  },
  {
    name: "Qdrant",
    slug: "qdrant",
    categories: ["vector"],
    summary:
      "Rust 实现的高性能向量数据库，API 友好，支持丰富过滤条件。",
    description:
      "Qdrant 是一个用 Rust 编写的高性能向量相似度搜索引擎。它提供 REST 和 gRPC API，支持多种向量索引（HNSW 等）、过滤条件和负载（payload）存储。在 RAG 社区中使用广泛。",
    goodFor: [
      "RAG 知识库",
      "语义搜索",
      "推荐系统",
      "图像相似度检索",
      "Anomaly Detection",
    ],
    badFor: [
      "纯关键词搜索（配合搜索引擎）",
      "需要事务性数据存储的场景",
      "需要 SQL 分析查询的场景",
    ],
    typicalUseCases: [
      "AI Agent 知识库",
      "文档语义搜索",
      "电商推荐系统",
      "图片相似度搜索",
    ],
    deployment: ["Docker", "本地", "云服务（Qdrant Cloud）"],
    language: "Rust",
    license: "Apache 2.0",
    difficulty: "低",
    maturity: "成熟",
    related: ["milvus", "weaviate", "chroma", "postgresql"],
    officialWebsite: "https://qdrant.tech/",
    github: "https://github.com/qdrant/qdrant",
    vsAlternatives:
      "相比 Milvus：Qdrant 更轻量，单机性能优秀，API 设计现代。Milvus 在十亿级向量规模上更优。相比 Chroma：Qdrant 更适合生产环境。",
    learningTip:
      "从 Qdrant Cloud 免费 tier 开始，学习 collection 设计、向量 index 选择和 payload 过滤。",
    commonCombinations: [
      "Qdrant + Meilisearch / OpenSearch（混合检索）",
      "Qdrant + LangChain / LlamaIndex",
      "Qdrant + PostgreSQL（元数据存储）",
    ],
  },
  {
    name: "Milvus",
    slug: "milvus",
    categories: ["vector"],
    summary:
      "云原生分布式向量数据库，适合十亿级向量规模和高吞吐场景。",
    description:
      "Milvus 是一个云原生、分布式的向量数据库，由 Zilliz 公司开源（Linux Foundation 孵化项目）。它支持多种向量索引类型（IVF、HNSW、DiskANN 等），可以处理数十亿级别的向量数据。",
    goodFor: [
      "大规模 RAG 知识库",
      "十亿级向量检索",
      "高吞吐向量写入",
      "需要分布式扩展的向量搜索",
    ],
    badFor: [
      "小规模场景（用 Qdrant 或 pgvector 更轻量）",
      "资源受限的边缘设备",
    ],
    typicalUseCases: [
      "企业级 RAG 知识库",
      "大规模推荐系统",
      "图像/视频检索",
      "分子结构相似度搜索",
    ],
    deployment: ["Docker", "Kubernetes", "云服务（Zilliz Cloud）"],
    language: "Go / C++",
    license: "Apache 2.0",
    difficulty: "高",
    maturity: "成熟",
    related: ["qdrant", "weaviate", "chroma", "postgresql"],
    officialWebsite: "https://milvus.io/",
    github: "https://github.com/milvus-io/milvus",
    vsAlternatives:
      "相比 Qdrant：Milvus 分布式架构更成熟，适合超大规模。相比 pgvector：专用向量引擎，索引性能更强。",
    learningTip:
      "从 Zilliz Cloud 免费 tier 或 Milvus Lite（嵌入式版本）开始学习。",
    commonCombinations: [
      "Milvus + LangChain / LlamaIndex",
      "Milvus + OpenSearch（混合检索）",
      "Milvus + Kafka（数据流摄入）",
    ],
  },
  {
    name: "Weaviate",
    slug: "weaviate",
    categories: ["vector"],
    summary:
      "AI 原生向量数据库，内置向量化和多模态支持，支持 GraphQL 查询。",
    description:
      "Weaviate 是一个 AI 原生的向量数据库，内置了向量化模块（可使用 OpenAI、HuggingFace 等嵌入模型），支持多种数据类型（文本、图像等）。它使用 GraphQL API 进行查询，支持混合搜索（向量 + 关键词 + 过滤）。",
    goodFor: [
      "AI 原生应用",
      "多模态检索",
      "混合搜索（向量 + 关键词）",
      "GraphQL API 偏好者",
    ],
    badFor: [
      "非 AI 场景的简单向量检索（Qdrant 可能更直接）",
      "对 GraphQL 不熟悉的团队",
    ],
    typicalUseCases: [
      "多模态语义搜索",
      "AI 应用知识库",
      "内容推荐系统",
      "数据分类和聚类",
    ],
    deployment: ["Docker", "Kubernetes", "云服务（Weaviate Cloud）"],
    language: "Go",
    license: "BSD-3-Clause",
    difficulty: "中",
    maturity: "成熟",
    related: ["qdrant", "milvus", "chroma"],
    officialWebsite: "https://weaviate.io/",
    github: "https://github.com/weaviate/weaviate",
    vsAlternatives:
      "相比 Qdrant / Milvus：Weaviate 内嵌了向量化和多模态能力，减少外部组件依赖，但灵活性稍低。",
    learningTip:
      "使用 Weaviate Cloud Sandbox 免费 tier 快速体验，同时学习 GraphQL 查询语法。",
    commonCombinations: [
      "Weaviate + OpenAI API（自动向量化）",
      "Weaviate + LangChain",
    ],
  },
  {
    name: "Chroma",
    slug: "chroma",
    categories: ["vector", "embedded"],
    summary:
      "面向 AI 开发者的开源嵌入式向量数据库，Python 原生，快速原型首选。",
    description:
      "Chroma 是一个面向 AI 开发者设计的开源嵌入式向量数据库，Python 原生接口，使用简单。它支持多种嵌入函数和距离度量，适合快速原型和中小规模的 RAG 应用。",
    goodFor: [
      "快速原型开发",
      "Python AI 项目",
      "中小规模 RAG 应用",
      "Jupyter Notebook 环境",
    ],
    badFor: [
      "生产环境大规模部署（推荐 Qdrant / Milvus）",
      "需要多语言客户端支持的场景",
    ],
    typicalUseCases: [
      "LangChain / LlamaIndex 向量存储",
      "AI 原型和实验",
      "小型 RAG 应用",
    ],
    deployment: ["嵌入式", "Docker"],
    language: "Python",
    license: "Apache 2.0",
    difficulty: "低",
    maturity: "实验性",
    related: ["qdrant", "milvus", "weaviate"],
    officialWebsite: "https://www.trychroma.com/",
    github: "https://github.com/chroma-core/chroma",
    vsAlternatives:
      "相比 Qdrant / Milvus：Chroma 专注于开发者体验和快速原型，性能和生产化能力较弱。",
    learningTip:
      "在 Python 中 `pip install chromadb` 即可使用，配合 LangChain 教程快速上手。",
    commonCombinations: [
      "Chroma + LangChain / LlamaIndex",
      "Chroma + OpenAI API",
    ],
  },
  {
    name: "Neo4j",
    slug: "neo4j",
    categories: ["graph"],
    summary:
      "最流行的图数据库，使用 Cypher 查询语言，擅长关系遍历和路径分析。",
    description:
      "Neo4j 是最流行的原生图数据库，采用属性图模型。它使用 Cypher 作为查询语言（一种声明式图查询语言），支持 ACID 事务，提供丰富的图算法库（GDS）。",
    goodFor: [
      "社交关系分析",
      "推荐引擎",
      "反欺诈检测",
      "知识图谱（属性图）",
      "依赖和影响分析",
    ],
    badFor: [
      "简单 CRUD 业务表单",
      "大规模聚合报表",
      "不需要关系遍历的数据模型",
    ],
    typicalUseCases: [
      "社交网络和推荐",
      "金融反欺诈",
      "供应链追踪",
      "IT 资产拓扑",
      "知识图谱",
    ],
    deployment: ["Docker", "本地", "云服务（AuraDB）"],
    language: "Java",
    license: "GPLv3（社区版）",
    difficulty: "中",
    maturity: "企业级",
    related: ["apache-jena-fuseki", "graphdb", "arangodb"],
    officialWebsite: "https://neo4j.com/",
    github: "https://github.com/neo4j/neo4j",
    vsAlternatives:
      "相比 RDF 图数据库（Jena Fuseki、GraphDB）：Neo4j 使用属性图模型和 Cypher，更接近工程思维。RDF 更适合本体推理和语义互操作。",
    learningTip:
      "从 Neo4j Sandbox 在线环境开始，学习 Cypher 语法和基本图算法（PageRank、社区发现）。",
    commonCombinations: [
      "Neo4j + Apache Kafka（实时图更新）",
      "Neo4j + Elasticsearch（全文搜索 + 图关系）",
    ],
  },
  {
    name: "Apache Jena Fuseki",
    slug: "apache-jena-fuseki",
    categories: ["rdf"],
    summary:
      "Apache 基金会的开源 RDF 三元组存储和 SPARQL 服务器，支持 OWL 推理。",
    description:
      "Apache Jena Fuseki 是 Apache Jena 框架中的 SPARQL 服务器组件，提供 RDF 三元组的存储和查询服务。它支持 SPARQL 1.1 协议、OWL 推理和多种存储后端（内存、TDB2 持久化）。",
    goodFor: [
      "RDF 知识图谱",
      "本体（Ontology）存储和查询",
      "语义 Web 应用",
      "SPARQL 学习",
      "关联数据发布",
    ],
    badFor: [
      "高频事务型业务",
      "属性图查询（用 Neo4j 更合适）",
      "非语义场景的简单数据存储",
    ],
    typicalUseCases: [
      "本体论系统后端",
      "关联数据（Linked Data）发布",
      "语义标注和元数据管理",
      "知识图谱研究",
    ],
    deployment: ["Docker", "本地", "嵌入式（Java）"],
    language: "Java",
    license: "Apache 2.0",
    difficulty: "中",
    maturity: "成熟",
    related: ["rdf4j", "graphdb", "neo4j"],
    officialWebsite: "https://jena.apache.org/",
    github: "https://github.com/apache/jena",
    vsAlternatives:
      "相比 RDF4J：Jena 生态更独立和完善，Fuseki 是开箱即用的 SPARQL 服务器。RDF4J 更适合作为嵌入式 RDF 框架。",
    learningTip:
      "从 Apache Jena 官网的 SPARQL Tutorial 开始，学习 RDF 三元组模型、Turtle 序列化和 SPARQL 查询。",
    commonCombinations: [
      "Jena Fuseki + Protégé（本体编辑）",
      "Jena Fuseki + Python（rdflib 客户端）",
      "Jena Fuseki + Apache Kafka（知识图谱更新）",
    ],
  },
  {
    name: "RDF4J",
    slug: "rdf4j",
    categories: ["rdf"],
    summary:
      "Java 生态的 RDF 框架，支持多种存储后端，可嵌入 Java 应用。",
    description:
      "RDF4J 是一个模块化的 Java 框架，用于处理 RDF 数据。它提供 RDF 解析/序列化、存储（内存、原生、远程）、SPARQL 查询和推理功能。既可以独立运行 Server，也可以嵌入 Java 应用。",
    goodFor: [
      "Java 应用中的 RDF 处理",
      "需要多后端支持的 RDF 存储",
      "SPARQL 查询服务",
      "嵌入式的语义处理组件",
    ],
    badFor: [
      "非 Java 生态（推荐 Jena Fuseki 或 GraphDB）",
      "不熟悉 SPARQL 的团队",
    ],
    typicalUseCases: [
      "Java 企业应用中的语义模块",
      "元数据管理和语义标注",
      "RDF 数据管道处理",
      "SPARQL 终端服务",
    ],
    deployment: ["Docker", "嵌入式（Java）"],
    language: "Java",
    license: "BSD-3-Clause",
    difficulty: "中",
    maturity: "成熟",
    related: ["apache-jena-fuseki", "graphdb", "neo4j"],
    officialWebsite: "https://rdf4j.org/",
    github: "https://github.com/eclipse-rdf4j/rdf4j",
    vsAlternatives:
      "相比 Jena Fuseki：RDF4J 更模块化，作为嵌入库更灵活。Jena Fuseki 作为独立服务器更简单直接。",
    learningTip: "熟悉 Java 生态的开发者可直接引入 Maven 依赖，阅读官方文档的 Programming with RDF4J 教程。",
    commonCombinations: [
      "RDF4J + Spring Boot（Java 应用）",
      "RDF4J + Protégé（本体设计）",
    ],
  },
  {
    name: "GraphDB",
    slug: "graphdb",
    categories: ["rdf"],
    summary:
      "企业级 RDF 三元组数据库，OWL 推理能力突出，可视化界面完善。",
    description:
      "GraphDB 是 Ontotext 开发的企业级 RDF 三元组数据库，基于 RDF4J 框架。它提供强大的 OWL 推理能力、可视化工作台、全文搜索集成和集群支持。广泛用于企业知识图谱和语义数据管理。",
    goodFor: [
      "企业知识图谱",
      "需要强 OWL 推理的场景",
      "语义数据管理和发布",
      "文本分析和知识抽取",
    ],
    badFor: [
      "简单 CRUD 应用",
      "属性图模型场景（推荐 Neo4j）",
      "预算有限的个人项目（企业版收费）",
    ],
    typicalUseCases: [
      "企业级知识图谱",
      "生命科学和医药数据管理",
      "文化遗产和数字人文",
      "金融合规和风险管理",
    ],
    deployment: ["Docker", "本地", "云服务"],
    language: "Java",
    license: "GraphDB Free / Enterprise",
    difficulty: "中",
    maturity: "企业级",
    related: ["apache-jena-fuseki", "rdf4j", "neo4j"],
    officialWebsite: "https://graphdb.ontotext.com/",
    vsAlternatives:
      "相比 Jena Fuseki / RDF4J：GraphDB 提供开箱即用的企业级功能（推理、可视化、集群），但企业版需付费。",
    learningTip:
      "使用 GraphDB Free 版本体验，Workbench 界面适合初学者理解 RDF 和 SPARQL。",
    commonCombinations: [
      "GraphDB + Elasticsearch（全文搜索 connector）",
      "GraphDB + Kafka Sink Connector（数据摄入）",
    ],
  },
  {
    name: "InfluxDB",
    slug: "influxdb",
    categories: ["time-series"],
    summary:
      "最流行的开源时序数据库，专为 DevOps 监控和 IoT 数据设计。",
    description:
      "InfluxDB 是一个开源的时间序列数据库，用于存储和查询以时间为索引的数据。它提供自定义查询语言（Flux）、数据采集代理（Telegraf）和可视化（Chronograf 或 Grafana）。",
    goodFor: [
      "DevOps 监控指标",
      "IoT 遥测数据",
      "实时分析",
      "应用性能监控",
      "传感器数据存储",
    ],
    badFor: [
      "非时序数据存储",
      "需要跨表 join 的复杂报表",
      "更新已写入的时间序列历史记录",
    ],
    typicalUseCases: [
      "服务器和应用监控",
      "IoT 传感器数据采集",
      "金融行情数据",
      "实时分析仪表盘",
    ],
    deployment: ["Docker", "本地", "云服务（InfluxDB Cloud）"],
    language: "Rust",
    license: "MIT",
    difficulty: "中",
    maturity: "成熟",
    related: ["timescaledb", "victoriametrics", "tdengine"],
    officialWebsite: "https://www.influxdata.com/",
    github: "https://github.com/influxdata/influxdb",
    vsAlternatives:
      "相比 TimescaleDB：InfluxDB 是原生时序引擎，写入和存储效率更高。TimescaleDB 基于 PostgreSQL，可以复用 SQL 和 PG 生态。",
    learningTip:
      "从 InfluxDB Cloud 免费 tier 开始，学习 Line Protocol 写入格式和 Flux 查询语言。",
    commonCombinations: [
      "InfluxDB + Telegraf（数据采集）",
      "InfluxDB + Grafana（可视化）",
    ],
  },
  {
    name: "TimescaleDB",
    slug: "timescaledb",
    categories: ["time-series", "relational"],
    summary:
      "基于 PostgreSQL 的时序扩展，可沿用 SQL 和 PG 生态，支持超表自动分区。",
    description:
      "TimescaleDB 是基于 PostgreSQL 的开源时序数据库扩展。它引入「超表」（hypertable）概念，自动按时间分区和压缩。最大的优势是可以复用全部 PostgreSQL 功能（JOIN、索引、视图、扩展等）。",
    goodFor: [
      "需要 SQL 的时序数据场景",
      "时序数据与业务数据关联",
      "需要 PostgreSQL 生态的团队",
      "结合关系数据和时序数据的场景",
    ],
    badFor: [
      "极高写入速度场景（纯时序引擎更高效）",
      "不想维护 PostgreSQL 的团队",
    ],
    typicalUseCases: [
      "金融行情和交易数据",
      "IoT 遥测（+ 设备元数据关联）",
      "DevOps 指标（+ CMDB 关联）",
      "能源和电网监控",
    ],
    deployment: ["Docker", "本地", "云服务（Timescale Cloud）"],
    language: "C",
    license: "Timescale License (TSL)",
    difficulty: "中",
    maturity: "成熟",
    related: ["postgresql", "influxdb", "clickhouse"],
    officialWebsite: "https://www.timescale.com/",
    github: "https://github.com/timescale/timescaledb",
    vsAlternatives:
      "相比 InfluxDB：TimescaleDB 可以 JOIN 时序数据和关系数据，且完全兼容 PostgreSQL。InfluxDB 在纯时序写入吞吐上更优。",
    learningTip:
      "如果已经熟悉 PostgreSQL，直接安装 TimescaleDB 扩展，阅读官方文档的 Hypertable 和 Compression 章节。",
    commonCombinations: [
      "TimescaleDB + Grafana（可视化）",
      "TimescaleDB + PostgreSQL 生态工具",
    ],
  },
  {
    name: "ClickHouse",
    slug: "clickhouse",
    categories: ["olap"],
    summary:
      "极快的列式 OLAP 数据库，实时分析能力业界领先，SQL 兼容。",
    description:
      "ClickHouse 是一个开源的列式 OLAP 数据库，专为实时分析而设计。它的查询性能在同类产品中处于领先地位，支持 SQL 查询、向量化引擎、数据压缩和分布式部署。",
    goodFor: [
      "实时分析",
      "BI 报表",
      "用户行为分析",
      "广告技术（AdTech）",
      "日志聚合分析",
    ],
    badFor: [
      "高频单行插入和更新",
      "需要事务的 OLTP 场景",
      "频繁的单条记录查询（用 KV 存储）",
    ],
    typicalUseCases: [
      "实时用户行为分析",
      "广告投放和归因分析",
      "BI 报表数据层",
      "CDP（客户数据平台）",
    ],
    deployment: ["Docker", "本地", "云服务（ClickHouse Cloud）"],
    language: "C++",
    license: "Apache 2.0",
    difficulty: "中",
    maturity: "企业级",
    related: ["duckdb", "apache-druid", "apache-pinot"],
    officialWebsite: "https://clickhouse.com/",
    github: "https://github.com/ClickHouse/ClickHouse",
    vsAlternatives:
      "相比 DuckDB：ClickHouse 是服务端 OLAP 引擎，支持集群和超高并发。DuckDB 是嵌入式引擎，更适合本地分析。相比 Druid / Pinot：ClickHouse 更通用且 SQL 生态更丰富。",
    learningTip:
      "从 ClickHouse Cloud 免费 tier 开始，学习表引擎（MergeTree 系列）和物化视图。",
    commonCombinations: [
      "ClickHouse + PostgreSQL（业务层 + 分析层）",
      "ClickHouse + Grafana（可视化）",
      "ClickHouse + Kafka（实时摄入）",
      "ClickHouse + dbt（数据建模）",
    ],
  },
  {
    name: "Apache Druid",
    slug: "apache-druid",
    categories: ["olap"],
    summary:
      "为实时摄入和亚秒级分析查询设计的分布式 OLAP 引擎。",
    description:
      "Apache Druid 是一个高性能的实时分析数据库，专为快速聚合和亚秒级 OLAP 查询设计。它直接从 Kafka 等流数据源实时摄入数据，适合大规模事件驱动的分析场景。",
    goodFor: [
      "实时事件分析",
      "用户行为漏斗分析",
      "广告数据分析",
      "大规模时序聚合",
    ],
    badFor: [
      "单条记录的点查询",
      "频繁更新已写入的数据",
      "复杂关联查询",
    ],
    typicalUseCases: [
      "用户行为分析",
      "广告技术（AdTech）",
      "网络流量分析",
      "业务监控仪表盘",
    ],
    deployment: ["Docker", "Kubernetes", "云服务"],
    language: "Java",
    license: "Apache 2.0",
    difficulty: "高",
    maturity: "成熟",
    related: ["clickhouse", "apache-pinot", "duckdb"],
    officialWebsite: "https://druid.apache.org/",
    github: "https://github.com/apache/druid",
    vsAlternatives:
      "相比 ClickHouse：Druid 更面向事件流和实时摄入场景，架构更复杂。ClickHouse 在通用 SQL 分析和运维简便性方面更优。",
    learningTip:
      "从 Druid Quickstart（单机模式）开始，理解 Segment 分区模型和 Kafka 摄入配置。",
    commonCombinations: [
      "Druid + Apache Kafka（实时摄入）",
      "Druid + Apache Superset（可视化）",
    ],
  },
  {
    name: "Apache Pinot",
    slug: "apache-pinot",
    categories: ["olap"],
    summary:
      "LinkedIn 开源的实时分布式 OLAP 引擎，面向用户的分析产品。",
    description:
      "Apache Pinot 是 LinkedIn 开发的实时分布式 OLAP 数据存储，旨在为面向用户的分析应用提供低延迟查询。它支持从 Kafka 等流处理平台实时摄入数据。",
    goodFor: [
      "面向用户的分析产品",
      "实时仪表盘",
      "异常检测和告警",
      "大规模事件聚合",
    ],
    badFor: [
      "关联查询和表 join",
      "作为业务系统主库",
    ],
    typicalUseCases: [
      "LinkedIn Who Viewed My Profile 类功能",
      "Uber Eats 餐厅分析",
      "广告指标分析",
      "用户级分析产品",
    ],
    deployment: ["Docker", "Kubernetes", "云服务"],
    language: "Java",
    license: "Apache 2.0",
    difficulty: "高",
    maturity: "成熟",
    related: ["clickhouse", "apache-druid", "duckdb"],
    officialWebsite: "https://pinot.apache.org/",
    github: "https://github.com/apache/pinot",
    vsAlternatives:
      "相比 Druid：架构相似但 Pinot 更专注于面向用户的分析产品，查询延迟控制更精细。",
    learningTip:
      "从 Pinot Quickstart 开始，理解 Schema、Table Config 和不同类型的索引。",
    commonCombinations: [
      "Pinot + Apache Kafka（实时摄入）",
      "Pinot + Apache Superset（可视化）",
    ],
  },
  {
    name: "Cassandra",
    slug: "cassandra",
    categories: ["wide-column"],
    summary:
      "高可用、可扩展的宽列分布式数据库，无单点故障，适合大规模写入。",
    description:
      "Apache Cassandra 是一个高度可扩展的分布式宽列数据库，采用无中心节点架构（P2P）。它以可用性和分区容错性见长（AP 系统），适合大规模、高写入吞吐的分布式场景。",
    goodFor: [
      "大规模分布式写入",
      "需要多数据中心部署",
      "高可用性要求（无单点故障）",
      "时序事件记录",
    ],
    badFor: [
      "复杂 join 和事务查询",
      "频繁更新的单条记录",
      "需要 ACID 事务的场景",
    ],
    typicalUseCases: [
      "时序事件和日志存储",
      "用户活动追踪",
      "IoT 数据采集",
      "推荐系统特征存储",
    ],
    deployment: ["Docker", "Kubernetes", "本地", "云服务"],
    language: "Java",
    license: "Apache 2.0",
    difficulty: "高",
    maturity: "企业级",
    related: ["scylladb", "hbase", "dynamodb"],
    officialWebsite: "https://cassandra.apache.org/",
    github: "https://github.com/apache/cassandra",
    vsAlternatives:
      "ScyllaDB 是 Cassandra 的 C++ 重写版本，宣称具有更低的延迟和更高的吞吐量。DynamoDB 是 AWS 托管的类似模型服务。",
    learningTip:
      "理解 CAP 定理和 Cassandra 的数据模型（分区键、聚簇键），从 DataStax 的免费在线课程开始。",
    commonCombinations: [
      "Cassandra + Spark（分析查询）",
      "Cassandra + Elasticsearch（搜索索引）",
    ],
  },
  {
    name: "HBase",
    slug: "hbase",
    categories: ["wide-column"],
    summary:
      "Hadoop 生态的宽列数据库，基于 HDFS，适合超大规模稀疏数据。",
    description:
      "Apache HBase 是 Hadoop 生态中的宽列存储数据库，运行在 HDFS 之上。它参考了 Google Bigtable 的设计，适合海量稀疏数据的随机读写。",
    goodFor: [
      "超大规模稀疏数据随机读写",
      "Hadoop 生态集成",
      "TB-PB 级数据存储",
    ],
    badFor: [
      "小规模数据（运维成本高）",
      "非 Hadoop 生态系统",
      "对延迟敏感的实时查询",
    ],
    typicalUseCases: [
      "日志处理和时间序列",
      "推荐系统特征存储",
      "大规模消息存储",
      "图数据存储（配合 JanusGraph）",
    ],
    deployment: ["Docker", "Kubernetes", "本地（Hadoop 集群）"],
    language: "Java",
    license: "Apache 2.0",
    difficulty: "高",
    maturity: "成熟",
    related: ["cassandra", "scylladb", "hadoop"],
    officialWebsite: "https://hbase.apache.org/",
    github: "https://github.com/apache/hbase",
    vsAlternatives:
      "相比 Cassandra：HBase 强依赖 Hadoop 生态，更重。Cassandra 独立部署，更适合跨数据中心场景。",
    learningTip: "先熟悉 Hadoop 生态（HDFS、ZooKeeper），再学习 HBase 的 RowKey 设计和 Region 分区。",
    commonCombinations: [
      "HBase + Hadoop / Spark（数据处理）",
      "HBase + Phoenix（SQL 层）",
      "HBase + JanusGraph（图存储后端）",
    ],
  },
  {
    name: "ScyllaDB",
    slug: "scylladb",
    categories: ["wide-column"],
    summary:
      "Cassandra 的 C++ 重写版，低延迟、高吞吐，API 兼容 Cassandra。",
    description:
      "ScyllaDB 是 Apache Cassandra 的 C++ 重写版本，宣称在同一硬件上提供更低的延迟和更高的吞吐量。它与 Cassandra CQL API 兼容，使用 Seastar 异步框架实现。",
    goodFor: [
      "低延迟写入和读取",
      "高吞吐分布式存储",
      "Cassandra 用户的性能升级",
      "对 P99 延迟有严格要求的场景",
    ],
    badFor: [
      "与 Cassandra 相同：复杂 join、ACID 事务",
    ],
    typicalUseCases: [
      "实时推荐引擎",
      "广告平台",
      "流媒体元数据存储",
      "IoT 数据平台",
    ],
    deployment: ["Docker", "Kubernetes", "本地", "云服务（ScyllaDB Cloud）"],
    language: "C++",
    license: "AGPL / ScyllaDB Enterprise",
    difficulty: "高",
    maturity: "成熟",
    related: ["cassandra", "hbase", "dynamodb"],
    officialWebsite: "https://www.scylladb.com/",
    github: "https://github.com/scylladb/scylladb",
    vsAlternatives:
      "相比 Cassandra：ScyllaDB 性能更高（尤其是 P99 延迟），但社区规模和历史不如 Cassandra。",
    learningTip:
      "如果你已经熟悉 Cassandra，可以几乎零成本迁移到 ScyllaDB。新用户建议从 ScyllaDB University 开始。",
    commonCombinations: [
      "ScyllaDB + Spark（分析查询）",
      "ScyllaDB + Kafka（数据管道）",
    ],
  },
  {
    name: "ArangoDB",
    slug: "arangodb",
    categories: ["multi-model", "document", "graph"],
    summary:
      "支持文档、图和键值三种模型的开源多模型数据库，使用 AQL 查询语言。",
    description:
      "ArangoDB 是一个开源的多模型数据库，在单一引擎中支持文档（JSON）、图和键值三种数据模型。它使用自有的 AQL（ArangoDB Query Language）查询语言，可以跨模型进行 join 和遍历查询。",
    goodFor: [
      "需要多模型支持的中小团队",
      "文档存储 + 图遍历的场景",
      "减少多数据库运维复杂度",
    ],
    badFor: [
      "需要每种模型极致性能（专用引擎更优）",
      "团队更偏好 SQL 或 Cypher 等标准查询语言",
    ],
    typicalUseCases: [
      "社交网络应用",
      "推荐系统（文档 + 图）",
      "内容管理 + 关系分析",
      "快速迭代的探索型项目",
    ],
    deployment: ["Docker", "本地", "云服务（ArangoDB Oasis）"],
    language: "C++",
    license: "BSL / ArangoDB Enterprise",
    difficulty: "中",
    maturity: "成熟",
    related: ["neo4j", "mongodb", "postgresql"],
    officialWebsite: "https://www.arangodb.com/",
    github: "https://github.com/arangodb/arangodb",
    vsAlternatives:
      "相比 Neo4j + MongoDB 组合：ArangoDB 一个引擎替代两个数据库，降低运维成本。但专用引擎在各自领域性能更强。",
    learningTip:
      "从 ArangoDB Oasis 免费 tier 开始，学习 AQL 查询语言（融合了 SQL 和遍历语法）。",
    commonCombinations: [
      "ArangoDB + Foxx（内置微服务框架）",
      "ArangoDB + Kafka（数据同步）",
    ],
  },
];
