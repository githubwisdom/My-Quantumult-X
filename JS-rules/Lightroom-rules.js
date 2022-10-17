# 重写规则配置片段包含若干条重写规则，并可以包含若干作用于 MitM 的主机名；可通过资源引用的方式使用。
# 片段文件将保存在 Quantumult X 目录下的 Profiles 子目录中。
# 样例可参见 https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-import-rewrite.snippet
 
#须添加hostname：photos.adobe.io, lcs-mobile-cops.adobe.io
 
[rewrite_local]
;^http://example.com/resource1/4/ url reject-dict
#lightroom
^https:\/\/photos\.adobe\.io\/v2\/accounts* url script-response-body https://raw.githubusercontent.com/githubwisdom/My-Quantumult-X/main/JS-file/Lightroom.js

[mitm]
hostname = photos.adobe.io, lcs-mobile-cops.adobe.io
