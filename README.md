# 恋爱纪念日记 · Love Diary
一个温馨、简洁、美观的恋爱纪念网站，支持日记记录、纪念日管理、相册、自动倒计时与坚果云自动同步。

## 功能介绍
- 💕 相恋时间自动倒计时
- 💌 恋爱日记：新增、删除、自动保存
- 🎂 纪念日管理：添加重要日子
- ☁️ 坚果云自动同步：日记、纪念日、相恋时间自动备份
- 📱 移动端友好，界面简洁美观
- 🔄 数据永不丢失，支持备份与恢复

## 使用方法
1. 直接打开 index.html 进入首页
2. 在 setting.html 设置相恋时间、纪念日
3. 日记在 diary.html 中记录
4. 坚果云配置后可实现自动备份/自动同步
5. 所有数据保存在本地，安全私密

## 项目结构
LoveDiary/ <br/>
├─ index.html      # 首页 <br/>
├─ diary.html      # 日记页 <br/>
├─ album.html      # 相册页 <br/>
├─ collect.html    # 收藏页 <br/>
├─ setting.html    # 设置与坚果云同步 <br/>
├─ 404.html        # 自动跳转首页 <br/>
├─ worker.js       # Cloudflare 代理，解决跨域 <br/>
├─ .gitignore      # Git 忽略文件 <br/>
└─ README.md       # 说明文档

## 技术说明
- 纯前端 HTML + CSS + JS
- 本地存储 localStorage
- 支持坚果云 WebDAV 同步
- 无需服务器，双击即可使用
- 可部署到 GitHub Pages

## 寄语
送给最爱的人的恋爱纪念网站
简单、温暖、永久保存
💗 愿所有美好都被温柔记录