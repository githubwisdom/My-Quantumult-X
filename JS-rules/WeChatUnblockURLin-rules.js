#跳过中间界面，支付宝链接、被封禁链接进行通知弹窗跳转，在微信中用快照显示被封禁的链接（可选），在微信中进行强制重定向（可选），群聊 / 扫码均可使用，可选项可在脚本 2、3 行更改，也可在 BoxJs 中更改。
hostname = weixin110.qq.com, security.wechat.com,

^https\:\/\/(weixin110\.qq|security.wechat)\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\? url script-response-body https://raw.githubusercontent.com/githubwisdom/My-Quantumult-X/main/JS-file/WeChatUnblockURLin.js
