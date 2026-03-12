# Read2Application — 读书方法论实践工具

将读过的每本书的方法论提取出来，通过 AI 深度加工，形成可搜索、可匹配、可落地的专属实践指南。

## 🌟 核心功能

1. **书籍 & 方法论管理** — 添加书籍，为每本书录入多条方法论（名称、描述、步骤、标签）。支持 AI 自动从长文本提炼结构化方法论。
2. **智能搜索 & 匹配** — 输入当前目标或困扰，自动匹配相关方法论。开启 AI 密钥后支持 **AI 语义匹配**（语义理解而非简单的关键词）。
3. **互动式计划生成** — 
   - **AI 追问**：根据选中的方法论，由 AI 生成针对用户的追问以获取更多背景。
   - **交互微调**：生成初稿后可直接与 AI 交流修改意见（如“更简单一点”、“侧重理财”），实时更新计划。
4. **高颜值行指南导出** — 支持将定制计划一键导出为高清 PNG 图片（优化排版与底部留白），方便打印或分享。
5. **管理与删除** — 计划生成需手动“确认收录”；支持删除已生成的计划以及单个方法论。
6. **自动化录入** — 根据书名自动查询豆瓣补全书籍封面、作者和简介。

---

## 🛠️ 技术栈与架构 (pnpm workspace)

| 层级 | 技术选型 | 说明 |
|---|---|---|
| 包管理 | pnpm workspace | 统一管理前后端依赖 |
| 前端 | React 19 + TypeScript | 配合 Vite 构建 |
| UI库 | NutUI React | 移动端优先设计 |
| 状态管理 | Zustand | 轻量级状态管理 |
| 后端 | Express 5.x + TypeScript | 提供 RESTful API |
| 数据库 | PostgreSQL + Prisma | 存储书籍、方法论、计划等 |
| AI | OpenAI SDK | 集成场景化匹配与计划生成 |

---

## 📂 目录结构

```text
read2application/
├── packages/
│   ├── frontend/         # React SPA (api, components, pages, store)
│   └── backend/          # Express Server (controllers, routes, services)
├── docs/                 # 项目文档与技术规格
└── README.md             # 本文件
```

---

## 📊 数据库设计 (Prisma)

### `Book` / `Methodology` / `Plan`
- 核心模型支持完整的 CRUD。
- `Methodology` 关联 `Book` (Cascade Delete)。
- `MethodologyTag` 实现方法论与标签的多对多关联。
- `Plan` 存储经过 AI 互动生成的最终执行方案。

---

## 🚀 快速开始

1. **安装依赖**: `pnpm install`
2. **配置环境**: 在 `packages/backend/` 创建 `.env` 并设置 `DATABASE_URL`。
3. **运行迁移**: `cd packages/backend && npx prisma migrate dev`
4. **启动项目**: 根目录下运行 `pnpm dev`

---

## 💡 视觉设计方向

- **色彩**：柔和卡其灰白背景 (`#FDFDFD`) + 复古赭石强调色 (`#D97757`)。
- **布局**：Claude 风格极致留白，移除夸张阴影，追求纸质书般的质感。

> [!NOTE]
> 更多详细设计规格请参阅 [docs/README_FULL.md](file:///d:/代码/13-自己的项目/read2application/docs/README_FULL.md)。
