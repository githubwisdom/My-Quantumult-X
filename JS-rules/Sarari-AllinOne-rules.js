# ================ Safari全能搜索 开始 ================
# Safari 内输入 命令 + 空格 + 关键词 快速指定搜索引擎搜索
#  注：先进入设置更改 Safari 默认搜索引擎为 DuckDuckGO
# 可自行修改指令或者添加搜索引擎
# mitm：duckduckgo.com

hostname = duckduckgo.com

# gm (谷歌图片)
^https:\/\/duckduckgo.com\/\?q=gm\+([^&]+).+ url 302 https://www.google.com/search?&tbm=isch&q=$1

# gh (github)
^https:\/\/duckduckgo.com\/\?q=gh\+([^&]+).+ url 302 https://github.com/search?q=$1

# sof (Stack Overflow)
^https:\/\/duckduckgo.com\/\?q=sof\+([^&]+).+ url 302 https://stackoverflow.com/search?q=$1

# se(StackExchange)
^https:\/\/duckduckgo.com\/\?q=se\+([^&]+).+ url 302 https://stackexchange.com/search?q=$1

# wa(WolfamAlpha)
^https:\/\/duckduckgo.com\/\?q=wa\+([^&]+).+ url 302 https://www.wolframalpha.com/input/?i=$1

# wiki (维基百科)
^https:\/\/duckduckgo.com\/\?q=wiki(\+|%20)([^&]+).+ url 302 http://wikipedia.org/wiki/$2

# wk(维基百科中文)
^https:\/\/duckduckgo.com\/\?q=wk(\+|%20)([^&]+).+ url 302 https://zh.wikipedia.org/wiki/$2

# bd (百度搜索)
^https:\/\/duckduckgo.com\/\?q=bd\+([^&]+).+ url 302 https://www.baidu.com/s?wd=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+bd.+ url 302 https://www.baidu.com/s?wd=$1

# yh (油猴搜索)
^https:\/\/duckduckgo.com\/\?q=yh\+([^&]+).+ url 302 https://greasyfork.org/zh-CN/scripts?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+yh.+ url 302 https://greasyfork.org/zh-CN/scripts?q=$1 

# bi (必应搜索)
^https:\/\/duckduckgo.com\/\?q=bi\+([^&]+).+ url 302 https://cn.bing.com/search?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+bi.+ url 302 https://cn.bing.com/search?q=$1
# ios (苹果应用搜索)
^https:\/\/duckduckgo.com\/\?q=ios\+([^&]+).+ url 302 https://www.qimai.cn/search/index/search/$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+ios.+ url 302 https://www.qimai.cn/search/index/search/$1

# mg (Magi)
^https:\/\/duckduckgo.com\/\?q=mg(\+|%20)([^&]+).+ url 302 https://magi.com/search?q=$2

# tf(google搜索Testflight)
^https:\/\/duckduckgo.com\/\?q=tf(\+|%20)([^&]+).+ url 302 https://www.google.com/search?as_q=$2&as_sitesearch=testflight.apple.com

# > 翻译
# yd(有道翻译)
^https:\/\/duckduckgo.com\/\?q=yd\+([^&]+).+ url 302 http://dict.youdao.com/search?q=$1

# trc(Google翻译到中文)
^https:\/\/duckduckgo.com\/\?q=trc\+([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=zh-CN&text=$1

# tre(Google翻译到English)
^https:\/\/duckduckgo.com\/\?q=tre\+([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=$1

# trj(Google翻译到日语)
^https:\/\/duckduckgo.com\/\?q=trj\+([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=ja&text=$1



# 社区
# db(豆瓣)
^https:\/\/duckduckgo.com\/\?q=db\+([^&]+).+ url 302 https://m.douban.com/search/?query=$1

# zh(知乎)
^https:\/\/duckduckgo.com\/\?q=zh\+([^&]+).+ url 302 https://www.zhihu.com/search?type=content&q=$1

# wb(微博)
^https:\/\/duckduckgo.com\/\?q=wb\+([^&]+).+ url 302 https://s.weibo.com/weibo/$1

# wx(微信)
^https:\/\/duckduckgo.com\/\?q=wx\+([^&]+).+ url 302 https://weixin.sogou.com/weixinwap?query=$1

# rd(Reddit)
^https:\/\/duckduckgo.com\/\?q=rd\+([^&]+).+ url 302 https://www.reddit.com/search?q=$1

# tw(Twitter)
^https:\/\/duckduckgo.com\/\?q=tw\+([^&]+).+ url 302 https://twitter.com/search?q=$1

# ssp(少数派)
^https:\/\/duckduckgo.com\/\?q=ssp\+([^&]+).+ url 302 https://sspai.com/search/post/$1

# tt(头条)
^https:\/\/duckduckgo.com\/\?q=tt\+([^&]+).+ url 302 https://so.toutiao.com/search?keyword=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+tt.+ url 302 https://so.toutiao.com/search?keyword=$1

# up xxx (Unsplash)
^https:\/\/duckduckgo.com\/\?q=up\+([^&]+).+ url 302 https://unsplash.com/s/photos/$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+up.+ url 302 https://unsplash.com/s/photos/$1

# csdn(CSDN)
^https:\/\/duckduckgo.com\/\?q=csdn\+([^&]+).+ url 302 https://so.csdn.net/so/search/s.do?q=$1&t=&u= 

# > 购物
# zdm(什么值得买)
^https:\/\/duckduckgo.com\/\?q=zdm\+([^&]+).+ url 302 https://search.m.smzdm.com/?v=b&s=$1

# amz(亚马逊)
^https:\/\/duckduckgo.com\/\?q=amz\+([^&]+).+ url 302 https://www.amazon.cn/gp/aw/s/?k=$1

# jd(京东)
^https:\/\/duckduckgo.com\/\?q=jd\+([^&]+).+ url 302 https://so.m.jd.com/ware/search.action?keyword=$1

# tb(淘宝)
^https:\/\/duckduckgo.com\/\?q=tb\+([^&]+).+ url 302 https://s.m.taobao.com/h5?q=$1

# tm(天猫)
^https:\/\/duckduckgo.com\/\?q=tm\+([^&]+).+ url 302 https://s.m.tmall.com/m/search.htm?q=$1

# > 视频资源
# ac(Acfun)
^https:\/\/duckduckgo.com\/\?q=ac\+([^&]+).+ url 302 https://www.acfun.cn/search?keyword==$1

# bli(哔哩哔哩)
^https:\/\/duckduckgo.com\/\?q=bli\+([^&]+).+ url 302 https://m.bilibili.com/search?keyword=$1

# ytb(YouTube)
^https:\/\/duckduckgo.com\/\?q=ytb\+([^&]+).+ url 302 https://www.youtube.com/results?search_query=$1

# ph(PornHub)
^https:\/\/duckduckgo.com\/\?q=ph\+([^&]+).+ url 302 https://cn.pornhub.com/video/search?search=$1


# > 苹果商店切换
#源链接爬虫于>>https://www.liangjianghu.com/searchads-appstore-switch
#Created by ddgksf2013，使用方法：输入区号，搜索即可
# cn  (切换至中国区)
^https:\/\/duckduckgo.com\/\?q=cn&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143465&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=cn&urlDesc=
# hk  (切换至香港区)
^https:\/\/duckduckgo.com\/\?q=hk&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143463&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=hk&urlDesc=
# tw  (切换至台湾区)
^https:\/\/duckduckgo.com\/\?q=tw&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143470&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=tw&urlDesc=
# us  (切换至美国区)
^https:\/\/duckduckgo.com\/\?q=us&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143441&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=us&urlDesc=
# jp  (切换至日本区)
^https:\/\/duckduckgo.com\/\?q=jp&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143462&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=jp&urlDesc=
# kr  (切换至韩国区)
^https:\/\/duckduckgo.com\/\?q=kr&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143466&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=kr&urlDesc=
# tr  (切换至土耳其区)
^https:\/\/duckduckgo.com\/\?q=tr&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143480&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=tr&urlDesc=



# > 网盘

# gd(Google Drive)
^https:\/\/duckduckgo.com\/\?q=gd\+([^&]+).+ url 302 https://www.google.com/search?q=%22Google+Drive%22+$1

# tgd(t.me/gdurl 搜索Google Drive)
^https:\/\/duckduckgo.com\/\?q=tgd\+([^&]+).+ url 302 https://t.me/s/gdurl?q=$1

# zgd(zhao.pp.ua搜索Google Drive)
^https:\/\/duckduckgo.com\/\?q=zgd(\+|%20)([^&]+).+ url 302 https://zhao.pp.ua/?q=$2

# > 默认搜索

# bi(Bing)
^https:\/\/duckduckgo.com\/\?q=bi\+([^&]+).+ url 302 https://cn.bing.com/search?q=$1

# bd(BaiDu)
^https:\/\/duckduckgo.com\/\?q=bd\+([^&]+).+ url 302 https://www.baidu.com/s?wd=$1

# ddg(DckDuckgo)
^https:\/\/duckduckgo.com\/\?q=ddg\+([^&]+).+ url 302 https://duckduckgo.com/?ia=about&q=$1

# 无指令(谷歌)
^https:\/\/duckduckgo.com\/\?q=([^&]+).+ url 302 https://www.google.com/search?q=$1

# 阻止google.com 跳转到google.com.hk
^https?:\/\/(www\.)?g\.cn url 302 https://www.google.com
^https?:\/\/(www\.)?google\.cn url 302 https://www.google.com





# ================ Safari全能搜索 结束 ================
