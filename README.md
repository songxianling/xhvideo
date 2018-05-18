# 香哈-不冷视频

> 基于 vue 2.0+ 开发，用webpack打包

## 技术栈:
> * vue ^2.5.2
> * vue-router ^3.0.1
> * vuex ^3.0.1
> * axios ^0.18.0
> * stylus ^0.54.5
> * vant ^1.1.3
> * cross-env ^5.1.5


## 项目结构[src]

``` bash

├── api                      # 接口相关
├── assets                   # 相关资源
│   ├── images               # 图片
│   └── css                  # styl样式
│   └── js                   # js文件
├── components               # 全部公共组件
│   └── xhHead.vue           # 头部组件
├── config                   # api及相关地址配置
├── page                     # 全部页面
├── router                   # 路由配置
├── store                    # vuex全局状态管理
    ├── index.js             # 组装模块并导出 store
    ├── actions.js           # 根级别的 action
    ├── getters.js           # 根级别的 getters
    ├── mutations.js         # 根级别的 mutation
    ├── state.js             # 根级别的 state
    └── mutation-types.js    # 常量替代 mutation 事件类型
└── utils                    # 工具类

```
## 关键命令

``` bash
# 加载模块
npm install

# 运行测试环境，已配置热更新
npm run dev

# 打包用于生产环境
npm run build-ceshi

# 打包用于生产环境
npm run build-prod
```
