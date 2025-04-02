# 📝 家长对班主任、班级及学校满意度调查问卷

一个基于 Vue 3 + Vite 开发的现代化问卷调查系统，用于收集家长对班主任、班级及学校工作的反馈。

## 🌟 功能特点

- 📱 响应式设计，支持移动端和桌面端
- 🎨 现代化的 UI 设计，使用 Element Plus 组件库
- 🔄 实时表单验证
- 📊 数据实时提交到后端
- 🎯 简单直观的用户界面

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 3.3.4 | 渐进式 JavaScript 框架 |
| Vite | 4.4.9 | 下一代前端构建工具 |
| Vue Router | 4.2.4 | Vue.js 官方路由 |
| Pinia | 2.1.6 | Vue 的状态管理库 |
| Element Plus | 2.3.9 | Vue 3 的组件库 |
| Node.js | >= 16.0.0 | JavaScript 运行时环境 |
| npm | >= 8.0.0 | Node.js 包管理器 |

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装步骤

1. 克隆项目
```bash
git clone https://github.com/331164885/parent-programming-survey.git
cd parent-programming-survey
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

## 📁 项目结构

```
parent-programming-survey/
├── src/
│   ├── api/          # API 接口
│   ├── assets/       # 静态资源
│   ├── components/   # 组件
│   ├── router/       # 路由配置
│   ├── stores/       # 状态管理
│   ├── App.vue       # 根组件
│   └── main.js       # 入口文件
├── public/           # 公共资源
└── index.html        # HTML 模板
```

## 🔧 配置说明

在 `src/api/config.js` 中配置后端 API 地址：

```javascript
const API_CONFIG = {
  BASE_URL: 'http://your-api-domain',
  // ... 其他配置
}
```

## 📝 开发说明

- 开发时请遵循 Vue 3 组合式 API 的规范
- 使用 Element Plus 组件时请参考其官方文档
- 提交代码前请确保代码格式正确

## 🤝 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👥 作者

- 331164885 - [GitHub](https://github.com/331164885)

## 🙏 致谢

感谢所有为本项目做出贡献的开发者！
