#!name=FT中文网
#!desc=FT中文网
[Script]
FT中文网=type=http-response,pattern=^https?:\/\/user\.ftmailbox\.cn\/ios-receipt-validation\.php.*,requires-body=1,script-path=https://raw.githubusercontent.com/githubwisdom/My-Quantumult-X/main/JS-file/TF-Chinese.js
[MITM]
hostname= %APPEND% user.ftmailbox.cn

#注：需在分流中新建规则，将danla2f5eudt1.cloudfront.net设置为直连，不然打不开页面
