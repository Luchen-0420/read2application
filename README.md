# Read2Application — 读书方法论实践工具

将读过的每本书的方法论提取出来，通过 AI 深度加工，形成可搜索、可匹配、可落地的专属实践指南。

## 🌟 核心亮点

1. **AI 智能场景匹配**：基于 LLM 的语义理解，输入您当前面临的问题（如“最近总是焦虑”），自动匹配最适合的读书方法论。
2. **互动式计划生成**：
   - **追问环节**：AI 会根据选中的方法论，向您提出针对性的个人情况追问。
   - **迭代微调**：生成初稿后，您可以直接通过对话向 AI 提出修改意见（如“步骤稍微精简一些”），AI 将实时调整直到您满意。
3. **高颜值行指南导出**：支持将定制化的行动计划一键导出为高清 PNG 图片，方便打印、分享或作为手机壁纸提醒自己。
4. **手动收录确认**：只有在您对生成的计划完全满意并点击“确认收录”后，数据才会入库。
5. **极简优雅设计**：采用 Claude 式的复古审美，极致留白，提供纸质书般的沉浸式阅读与操作体验。

## 🛠️ 技术栈

本项目采用 **pnpm workspace** 管理的 Monorepo 架构：

- **前端**：React 18 + TypeScript + Vite + NutUI (移动端友好) + Lucide Icons
- **后端**：Express 5.x + TypeScript + Prisma ORM
- **数据**：PostgreSQL
- **AI 能力**：深度集成 OpenAI/DeepSeek API，支持自定义模型与 Base URL

## 🚀 快速开始

### 1. 克隆与安装

```bash
git clone https://github.com/Luchen-0420/read2application.git
cd read2application
pnpm install
```

### 2. 环境配置

在 `packages/backend/` 下创建 `.env` 文件，并配置数据库连接：

```env
DATABASE_URL="postgresql://username:password@localhost:5432/read2application?schema=public"
```

### 3. 数据库初始化

```bash
cd packages/backend
npx prisma migrate dev --name init
npx prisma db seed
```

### 4. 启动项目

在根目录下运行：

```bash
pnpm dev
```

- 前端地址：`http://localhost:5173`
- 后端地址：`http://localhost:3000`

## 📂 目录结构

- `packages/frontend/`: 基于 React 的单页应用。
- `packages/backend/`: 基于 Express 的 API 服务器，包含 AI 逻辑与数据库操作。
- `docs/`: 存放项目相关文档。

## 🤝 贡献与反馈

如果您有任何好的想法或发现 Bug，欢迎通过 Issue 或 Pull Request 告诉我们！
