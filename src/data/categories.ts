/** 数据库分类条目 */
export interface Category {
  slug: string;
  name: string;
  description: string;
  whenToUse: string;
  whenNotToUse: string;
}

export const categories: Category[] = [
  {
    slug: "relational",
    name: "关系型数据库",
    description:
      "以表（行和列）为基本存储模型，通过 SQL 进行查询。强调 ACID 事务、数据一致性和关系完整性。",
    whenToUse:
      "业务系统主库、财务系统、订单管理、任何需要严格一致性的场景。",
    whenNotToUse:
      "非结构化日志、大规模的全文搜索、高维向量相似度检索。",
  },
  {
    slug: "embedded",
    name: "嵌入式数据库",
    description:
      "以库或文件形式嵌入应用程序进程内运行，无需独立服务器。零配置、低运维，适合单机或移动端。",
    whenToUse:
      "移动应用、桌面软件、边缘设备、CI 测试、单机小工具和数据探索。",
    whenNotToUse:
      "多用户高并发写入、需要独立扩展写能力的 Web 服务主库。",
  },
  {
    slug: "document",
    name: "文档数据库",
    description:
      "以 JSON/BSON 文档为基本数据单元，模式灵活。适合半结构化数据和快速迭代开发。",
    whenToUse:
      "内容管理、用户画像、产品目录、IoT 数据采集、快速原型开发。",
    whenNotToUse:
      "需要复杂多表 join 的业务报表、严格 ACID 跨文档事务。",
  },
  {
    slug: "kv-cache",
    name: "Key-Value / 缓存",
    description:
      "以键值对为核心的数据结构存储，通常有极高读写吞吐和低延迟。常作为缓存加速层。",
    whenToUse:
      "会话管理、计数器、排行榜、消息队列、热点数据缓存、分布式锁。",
    whenNotToUse:
      "需要灵活复杂查询的业务主存储、长期冷数据归档。",
  },
  {
    slug: "search-engine",
    name: "搜索引擎",
    description:
      "为全文搜索、分词、faceted search 和相关性排序优化的数据库。核心是倒排索引。",
    whenToUse:
      "全文搜索、日志检索、商品搜索、站内搜索、autocomplete 和建议词。",
    whenNotToUse:
      "取代关系型数据库做事务型主库、需要频繁更新且搜索实时性要求不高的场景。",
  },
  {
    slug: "vector",
    name: "向量数据库",
    description:
      "专为高维向量（embedding）的相似度检索优化。支持 ANN 索引（HNSW、IVF 等），是 RAG 和语义搜索的关键组件。",
    whenToUse:
      "语义搜索、RAG 知识库、图像/视频相似度检索、推荐系统、异常检测。",
    whenNotToUse:
      "精确匹配查询、传统 OLTP 业务主库、不需要向量检索的应用。",
  },
  {
    slug: "graph",
    name: "图数据库",
    description:
      "以节点（实体）和边（关系）为基本模型，擅长多跳关系遍历和图模式匹配。",
    whenToUse:
      "社交网络、推荐引擎、反欺诈、IT 资产拓扑、权限和依赖分析。",
    whenNotToUse:
      "简单的 CRUD 业务表单、需要聚合大量数据生成报表的 OLAP 场景。",
  },
  {
    slug: "rdf",
    name: "RDF / 本体数据库",
    description:
      "基于 RDF（三元组）和 SPARQL 查询语言。强调语义互操作性、本体推理和知识图谱标准化。",
    whenToUse:
      "知识图谱、本体建模、语义标注、标准化元数据管理、科学数据发布。",
    whenNotToUse:
      "高频事务型业务系统、对查询延迟要求极低的实时应用。",
  },
  {
    slug: "time-series",
    name: "时序数据库",
    description:
      "针对按时间戳写入和查询的时间序列数据优化。通常支持自动分区、降采样、保留策略。",
    whenToUse:
      "DevOps 监控、IoT 遥测、金融行情、应用性能管理、传感器数据。",
    whenNotToUse:
      "频繁更新已写入历史记录的业务系统、需要跨表 join 的复杂报表。",
  },
  {
    slug: "olap",
    name: "OLAP / 分析型数据库",
    description:
      "为大规模批量查询和聚合分析而优化。列式存储、高压缩比、向量化查询执行。",
    whenToUse:
      "实时分析、BI 报表、用户行为分析、大规模聚合查询、数据仓库。",
    whenNotToUse:
      "替代 OLTP 业务主库、高频单行插入和更新的场景。",
  },
  {
    slug: "wide-column",
    name: "宽列数据库",
    description:
      "以列族为基本结构，适合大规模可扩展写入。强调可用性和分区容忍性（AP），弱化一致性。",
    whenToUse:
      "大规模时序事件采集、推荐系统用户行为存储、需要高写入吞吐的分布式系统。",
    whenNotToUse:
      "复杂 join 和事务查询、对延迟敏感的实时单条记录查询。",
  },
  {
    slug: "multi-model",
    name: "多模型数据库",
    description:
      "在单一引擎内支持多种数据模型（文档、图、KV 等），减少多数据库运维复杂度。",
    whenToUse:
      "中小团队需要多种数据模型但不想维护多套数据库、快速迭代的探索型项目。",
    whenNotToUse:
      "每种模型都有极致性能要求、团队已具备多数据库运维能力。",
  },
];
