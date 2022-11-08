/******************************

脚本功能：黄油相机+解锁VIP
下载地址：http://mtw.so/5tlBLV
软件版本：8.18.0
脚本作者：彭于晏
更新时间：2022-9-5
问题反馈：QQ+89996462
TG群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************/

[rewrite_local]

https:\/\/api4\.bybutter\.com\/v4\/* url script-response-body https://raw.githubusercontent.com/githubwisdom/My-Quantumult-X/main/JS-file/HuangYouXiangJi.js



[MITM]
hostname = %APPEND% api4.bybutter.com
