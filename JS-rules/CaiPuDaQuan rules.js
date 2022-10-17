# 菜谱大全(2022.01.19).    apiios_dq.xiangha.com, appweb_dq.xiangha.com, 101.200.225.157
[rewrite_local]
^https?:\/\/apiios_dq\.xiangha\.com\/v\d\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/CaiPuDaQuan.js
^https?:\/\/appweb_dq\.xiangha\.com\/center\/pay\/home url script-response-body https://raw.githubusercontent.com/githubwisdom/My-Quantumult-X/main/JS-file/CaiPuDaQuan.js
[mitm]
hostname = apiios_dq.xiangha.com, appweb_dq.xiangha.com, 101.200.225.157
