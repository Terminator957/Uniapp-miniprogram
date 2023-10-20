# 简介

微信小程序基座

# vscode 开发需要安装的插件

- uni-create-view (不强制推荐)
- uni-helper (强烈建议安装)
- uniapp 小程序扩展 (强烈建议安装)

# 开发

```bash
# 配置
1. 一键安装 .vscode 目录中推荐的插件
2. node 版本 16+
3. pnpm 版本 8.x

# 克隆项目
git clone [http://36.155.115.57:8096/wangxiuji/webmanage-uniapp.git](https://github.com/Terminator957/Uniapp-miniprogram.git)

# 进入项目目录
cd Uniapp-miniprogram

# 安装依赖
pnpm i

# 启动服务
pnpm dev:mp-weixin
```

# 调试

- install  Weixin Mini Program Devtools

[下载微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)

-  import dist/dev/mp-weixin run

使用微信开发者工具导入dist/dev/mp-weixin目录开始调试项目
