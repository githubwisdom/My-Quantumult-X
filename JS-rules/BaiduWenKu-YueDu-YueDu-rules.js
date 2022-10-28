/******************************

脚本功能：百度文库☆解锁VIP文档阅读权限
下载地址：https://is.gd/NYKRaD
软件版本：8.1.01
脚本作者：彭于晏💞
更新时间：2022-10-21
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************/

[rewrite_local]

^https:\/\/appwk\.baidu\.com\/naapi\/user\/getinfo url script-response-body https://raw.githubusercontent.com/githubwisdom/My-Quantumult-X/main/JS-file/BaiduWenKu-YueDu.js

[mitm]

hostname = appwk.baidu.com
