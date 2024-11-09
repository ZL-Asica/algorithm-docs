# ZLA-Algo

[![GitHub License][license-badge]][license-link]
[![Node.js][node-badge]][node-link]
[![pnpm Version][pnpm-badge]][pnpm-link] |
[![Docusaurus][Docusaurus-badge]][Docusaurus-link]
[![Cloudflare][cloudflare-badge]][cloudflare-link]
[![Eslint][eslint-badge]][eslint-link]
[![Prettier][prettier-badge]][prettier-link]

**ZLA-Algo** 是 ZL Asica 的个人算法学习记录网站，基于 [Docusaurus](https://docusaurus.io/) 搭建，记录 Leetcode 思路、题解及代码。大家可以随时提交 issue，帮助修复 typo 或优化逻辑。

## 项目结构

```plaintext
.
├── LICENSE                     # 开源许可证
├── LICENSE-CC                  # 内容使用许可证
├── README.md                   # 项目说明文件
├── babel.config.js             # Babel 配置文件
├── docs                        # 文档内容（按类别组织）
├── docusaurus.config.ts        # Docusaurus 配置文件
├── eslint.config.js            # ESLint 配置文件
├── node_modules                # 项目依赖
├── package.json                # 项目依赖与脚本
├── pnpm-lock.yaml              # pnpm 锁文件
├── prettier.config.cjs         # Prettier 配置文件
├── sidebars.js                 # Docusaurus 侧边栏配置
├── src                         # 网站源码
│   ├── css
│   |   └── custom.css          # 自定义样式
│   ├── pages
│   │   ├── index.module.css    # 首页样式
│   │   └── index.tsx           # 首页组件
│   └── theme
│        └── Footer
│            └── index.tsx      # 页脚组件
├── static                      # 静态资源文件
└── tsconfig.json               # TypeScript 配置文件
```

<!-- Badge Links -->

[license-badge]: https://img.shields.io/github/license/ZL-Asica/ZLA-Algo
[node-badge]: https://img.shields.io/badge/node%3E=18.0-339933?logo=node.js&logoColor=white
[pnpm-badge]: https://img.shields.io/github/package-json/packageManager/ZL-Asica/ZLA-Algo?label=&logo=pnpm&logoColor=fff&color=F69220
[Docusaurus-badge]: https://img.shields.io/badge/Docusaurus-3ECC5F?logo=docusaurus&logoColor=fff
[cloudflare-badge]: https://img.shields.io/badge/Cloudflare-F38020?logo=Cloudflare&logoColor=white
[eslint-badge]: https://img.shields.io/badge/eslint-4B32C3?logo=eslint&logoColor=white
[prettier-badge]: https://img.shields.io/badge/Prettier-F7B93E?logo=Prettier&logoColor=white

<!-- Badge URL Links -->

[license-link]: https://github.com/ZL-Asica/eslint-config/blob/main/LICENSE
[node-link]: https://nodejs.org/
[pnpm-link]: https://pnpm.io/
[Docusaurus-link]: https://docusaurus.io/
[cloudflare-link]: https://www.cloudflare.com/
[eslint-link]: https://www.npmjs.com/package/eslint-config-zl-asica
[prettier-link]: https://www.npmjs.com/package/@zl-asica/prettier-config
