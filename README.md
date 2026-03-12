# Read2Application — 读书方法论实践工具

> “将读过的每本书的方法论提取出来，变成当下能用的武器。”

本项目是一个基于 AI 驱动的读书笔记加工工具。它不仅能帮助您收录书中的核心方法论，更能通过大语言模型（LLM）的语义理解，将静态的方法论转化为针对您个人实际情况的“专属行动指南”。

## 🌟 核心亮点

- **AI 语义匹配**：输入您面临的问题（如“最近工作压力大”），自动跨书籍匹配相关方法论。
- **互动式计划生成**：AI 会向您发起追问并根据回答优化计划，支持多次对话微调直到满意。
- **高颜值导出**：一键导出为符合 Claude 审美风格的行动计划长图，支持移动端预览与打印。
- **Monorepo 架构**：基于 pnpm + React + Express + Prisma 构建，结构清晰，性能卓越。

## 📂 目录结构

- `packages/frontend/`: 前端代码 (React 19 + NutUI)
- `packages/backend/`: 后端服务 (Express 5.x + Prisma)
- `docs/`: 详细技术文档与功能规格说明

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 配置数据库 (packages/backend/.env)
DATABASE_URL="postgresql://..."

# 初始化数据库
cd packages/backend
npx prisma migrate dev
npx prisma db seed

# 启动开发服务器
cd ../..
pnpm dev
```

---

> [!IMPORTANT]
> 关于数据库模型设计、API 详细规范及全部已实现功能的说明，请查阅 [**docs/README_FULL.md**](file:///d:/代码/13-自己的项目/read2application/docs/README_FULL.md)。
