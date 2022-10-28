#百度网盘 解锁在线视频倍率/清晰度

[rewrite_local]
https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/BaiduCloud.js

[mitm]
hostname = pan.baidu.com
