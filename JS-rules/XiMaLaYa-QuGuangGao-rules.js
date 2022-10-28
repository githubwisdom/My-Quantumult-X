// ==UserScript==
// @ScriptName        喜马拉雅_AdBlock
// @Author            @ddgksf2013
// @ForHelp           若有屏蔽广告的需求，可公众号后台回复APP名称
// @WechatID          公众号墨鱼手记
// @TgChannel         https://t.me/ddgksf2021
// @Contribute        https://t.me/ddgksf2013_bot
// @Feedback          📮 ddgksf2013@163.com 📮
// @UpdateTime        2022-08-23
// @Attention         如果广告仍然存在，请清除缓存或卸载应用重新安装
// @Function          去广告配置（自用，不定期更新）
// @Suitable          自行观看“# > ”注释内容
// @Attention         如需引用请注明出处，谢谢合作！
// @ScriptURL         https://gitlab.com/ddgksf2013/Cuttlefish/-/raw/master/Rewrite/AdBlock/Ximalaya.conf
// ==/UserScript==


hostname = *.xima*.*, *.xmcdn.*
# ～ XiMaLaYa_喜马拉雅_修复轮播Ad失效Bug@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/discovery-feed\/focus\/queryF url reject
# ～ XiMaLaYa_喜马拉雅_播放页_Live@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/mobile-playpage\/view\/ url reject
# ～ XiMaLaYa_喜马拉雅_MyInfo红点提醒@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/chaos-notice-web\/v1\/message\/preview\/list url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽大红包Tips@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/social-web\/bottomTabs\/dynamicEntrance\/status url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽gif弹窗Ad@ddgksf2013
^https?:\/\/.*\.xmcdn\.com\/\w{8}\/\w{4}-\w{16}\/.+gif$ url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽Aged请求@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/(dog-portal\/checkOld|(child-mobile\/child|aged-mobile\/aged)\/mode\/query) url reject
# ～ XiMaLaYa_喜马拉雅_部分Tab弹窗@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/discovery-feed\/isShowUserGiftPendant url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽红点提示@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/mobile-user\/unread url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽minor请求@ddgksf2013
^https?:\/\/.*\.xima.*\.com/mobile-user/minorProtection/pop url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽隐私搜集@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/collector\/xl\/v\d url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽版本更新@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/butler-portal\/versionCheck url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽开屏广告@ddgksf2013
^https?:\/\/(adse\.wsa|adse|adbehavior|xdcs-collector)\.xima.*\.com\/.* url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽位置请求@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/mobile\/discovery\/v\d\/location url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽热搜词@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/hotWord url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽搜索框定时_Ad@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/guideWord url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽实时Ad请求@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/api\/v\d\/adRealTime url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽ting_Ad@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/ting\/(loading|feed|home)? url reject
# ～ XiMaLaYa_喜马拉雅_屏蔽首页滚动_Ad@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/discovery-feed\/v\d\/mix url script-response-body https://gitlab.com/ddgksf2013/Cuttlefish/-/raw/master/Script/xmly_json.js
# ～ XiMaLaYa_喜马拉雅_屏蔽Tab页滚动_Ad@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/discovery-category\/v\d/category url script-response-body https://gitlab.com/ddgksf2013/Cuttlefish/-/raw/master/Script/xmly_json.js
# ～ XiMaLaYa_喜马拉雅_去除我的页面Ad_Tag@ddgksf2013
^https?:\/\/.*\.xima.*\.com\/mobile-user\/v\d\/homePage url script-response-body https://gitlab.com/ddgksf2013/Cuttlefish/-/raw/master/Script/xmly_json.js
