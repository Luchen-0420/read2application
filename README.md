# Read2Application — 读书方法论实践工具

将读过的每本书的方法论提取出来，形成可搜索、可匹配、可落地的实践工具集。

## 核心功能

1. **书籍 & 方法论管理** — 添加书籍，为每本书录入多条方法论（名称、描述、步骤、标签）
2. **智能搜索 & 匹配** — 输入一个目标（如"开源节流"），自动匹配相关方法论与书籍
3. **实施计划生成** — 根据选中的方法论与用户自身情况，生成结构化的行动计划并可保存查看
4. **AI 设置与自动化录入** — 用户可配置自己的 LLM API，支持输入整段文字由 AI 提炼方法论，且支持根据书名自动查询豆瓣补全书籍基础信息
5. **预置示例数据** — 数据库初始化时写入若干经典书籍方法论（如《小狗钱钱》、《原子习惯》等）作为示范

---

## 技术栈与架构 (pnpm workspace monorepo)

| 层级 | 技术选型 | 说明 |
|---|---|---|
| 包管理 | pnpm workspace | 统一管理前后端依赖，结构清晰 |
| 前端框架 | React 18 + TypeScript | 强类型，配合 Vite 构建 |
| UI 组件库 | NutUI React (Taro) | 移动端优先的京东风格组件库 |
| 状态管理 | Zustand | 轻量级状态管理，替代 Context |
| 样式 | CSS Modules / Vanilla CSS | 配合 NutUI 定制主题 |
| 后端框架 | Express 4.x + TypeScript | 提供 RESTful API |
| 数据库 | PostgreSQL | 关系型数据库，存储书籍、方法论、标签 |
| ORM / Query | Prisma 或 pg (纯 SQL) | 建议使用 Prisma 简化 TS 类型推导 |
| 运行时 | Node.js 18+ (tsx) | 后端直接运行 TS 源码 |

---

## 目录结构设计 (Monorepo)

```text
read2application/
├── package.json          # Root package.json (pnpm workspace)
├── pnpm-workspace.yaml   # Workspace 配置 (packages/*)
├── packages/
│   ├── frontend/         # React SPA
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── api/      # Axios 请求封装
│   │   │   ├── assets/
│   │   │   ├── components/ # 纯展示组件
│   │   │   ├── pages/    # 页面级组件
│   │   │   ├── store/    # Zustand 状态
│   │   │   ├── types/    # TS 类型定义
│   │   │   └── App.tsx
│   │   └── vite.config.ts
│   │
│   └── backend/          # Express API server
│       ├── package.json
│       ├── prisma/       # Prisma schema & migrations
│       ├── src/
│       │   ├── controllers/
│       │   ├── routes/
│       │   ├── services/ # 包含搜索/匹配逻辑
│       │   ├── types/
│       │   └── index.ts  # 入口文件
│       └── tsconfig.json
```

---

## 数据库设计 (PostgreSQL)

### `Book` 表
- `id`: UUID (PK)
- `title`: String
- `author`: String
- `cover_url`: String (可选)
- `summary`: Text
- `created_at`: DateTime
- `updated_at`: DateTime

### `Methodology` 表
- `id`: UUID (PK)
- `book_id`: UUID (FK -> Book)
- `name`: String
- `description`: Text
- `steps`: JSONB (步骤数组 `[{ order: 1, content: "..." }]`)
- `applicable_scenarios`: Text
- `created_at`: DateTime

### `Tag` 表 (多对多关联)
- `id`: UUID (PK)
- `name`: String (Unique)

### `MethodologyTag` 表 (关联表)
- `methodology_id`: UUID (FK)
- `tag_id`: UUID (FK)

### `Plan` 表
- `id`: UUID (PK)
- `title`: String
- `summary`: String
- `content`: Json (Phases and Actions)
- `created_at`: DateTime

---

## 核心 API 路由设计 (Express)

- **GET `/api/books`** - 获取书籍列表（支持分页、搜索）
- **GET `/api/books/:id`** - 获取单本书籍详情（包含其所有方法论）
- **POST `/api/books`** - 创建新书籍
- **POST `/api/books/:id/methodologies`** - 为指定书籍添加方法论

- **GET `/api/match?query=开源节流`** - 智能搜索与匹配接口
  - *逻辑*：后端接收 query，分词后与 `Methodology` 的 `name`, `description`, `steps` 以及关联的 `Tag` 进行多字段模式匹配，按相关度返回排序后的方法论列表。

- **GET `/api/douban/search?q=书名`** - 代理请求查询书籍基本信息
- **POST `/api/ai/extract`** - 用户粘贴一段长文本，AI 自动提炼并返回结构化的方法论 JSON

- **POST `/api/plan/inquiry`** - AI 根据选中的"方法论"生成针对用户的追问。
- **POST `/api/plan/generate`** - 接收用户对追问的回答 and 选中的方法论，调用大语言模型 API 生成具体、可落地的实施计划。
- **GET `/api/plans`** & **POST `/api/plans`** - 行动计划的查询与保存接口。

---

## 前端核心页面 (NutUI / React)

1. **首页 (`HomePage`)**
   - 顶部搜索/匹配入口
   - "猜你想解决的问题"（标签云）
   - 最新收录的方法论推荐卡片 (Cards)

2. **库 (`LibraryPage` 原发现页)**
   - 按书籍进行分组（手风琴或列表）
   - 每本书下方折叠展示其拥有的所有方法论

3. **添加/录入页 (`AddPage` 升级版)**
   - Step 1: 书籍信息：支持输入书名后点击"从豆瓣获取"，自动填充作者、简介和封面
   - Step 2: 方法论录入：增加"AI 自动提炼"选项卡，粘贴大段文本一键转换为表单结构

4. **匹配结果与计划定制页 (`MatchResultPage` & Custom Plan Flow)**
   - 展示搜索匹配的方法论，用户勾选
   - **AI 对话采集**: 根据选择的方法论生成追问
   - **生成计划**: 生成包含时间线的实施计划，点击保存入库

5. **计划列表页 (`PlansPage`)**
   - 查看所有历史上生成的专属行动计划

6. **设置页 (`SettingsPage`)**
   - 允许用户配置自定义的 AI API Key、Base URL 以及选择模型，数据保存在 LocalStorage，请求时通过 Header 携带。

---

## 实施步骤

1. **环境搭建**: 初始化 `pnpm workspace`，分别建好 `frontend` (Vite+React) 和 `backend` (Express+TS)。
2. **数据库初始化**: 编写 Prisma Schema，执行 migration，并编写一个 seed 脚本插入几本默认书籍（如《小狗钱钱》等）。
3. **后端 API 开发**: 实现 CRUD 接口和基础的模糊匹配接口。
4. **前端基础框架**: 配置 NutUI 主题，搭建 React Router 结构，配置 Zustand。
5. **前端页面开发**: 对接 API，实现展示、录入、搜索匹配三大核心流程。
6. **联调与测试**: 确保前后端连通，数据流转正常。

---

## 视觉设计方向 (Claude 风格)

- **排版 (Typography)**: 
  - 全局英文推荐无衬线体 (`Söhne`, `Inter`, `system-ui`)，中文推荐无衬线体 (`Noto Sans SC`, `PingFang SC`)。
  - 阅读正文和引用部分可混合使用衬线体 (`Noto Serif SC`)，提升纸质书般的阅读质感。
- **色彩 (Color Palette)**:
  - 背景：抛弃纯白，使用柔和温暖的卡其灰白 (`#FDFDFD` 或 `#F9F9F8`)，或者深色模式下的深空灰 (`#1E1E1E`)。
  - 文本：主文本使用深灰 (`#2D2D2D`)，次文本使用浅灰 (`#6B6B6B`)，降低对比度带来的视觉疲劳。
  - 强调色：采用 Claude 标志性的复古赭石色/砖红色（如 `#D97757`）或低饱和度的灰蓝色。
- **布局 & 装饰 (Layout & Decor)**:
  - 极致留白 (Whitespace)，增加元素间距。
  - 卡片和区域划分使用极细边框 (`1px solid #E5E5E5`)，而不是大范围使用阴影。
  - 非常轻柔的圆角 (`8px` 或 `12px`)。
  - 交互反馈干脆利落，避免过度夸张的动画，保持"严肃、冷静、优雅"的工具氛围。

---

> [!TIP]
> **全量功能更新日志**：关于最新实现的下述功能，请参阅 [docs/README_FULL.md](file:///d:/代码/13-自己的项目/read2application/docs/README_FULL.md)
> - **AI 互动计划微调**：生成后可直接对话调整。
> - **高清图导出打印**：固定 720px 宽度捕获与排版优化。
> - **方法库深度管理**：支持删除单条方法论及计划。
