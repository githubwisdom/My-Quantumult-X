# 美图秀秀(2022.01.17)    api.xiuxiu.meitu.com, h5.xiuxiu.meitu.com
# 注：解锁高级会员（包括但不限于：付费海报模板、高级滤镜、高级素材等），无须登陆
[rewrite_local]
^https?:\/\/(h5|api)\.xiuxiu\.meitu\.com\/v\d\/(h\d\/vip|vip|user)\/ url script-response-body https://raw.githubusercontent.com/githubwisdom/My-Quantumult-X/main/JS-file/MeiTuXiuXiu.js

[mitm]
hostname = api.xiuxiu.meitu.com, h5.xiuxiu.meitu.com
