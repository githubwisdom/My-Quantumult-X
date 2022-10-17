#!name=FT中文网
#!desc=FT中文网
[Script]
FT中文网=type=http-response,pattern=^https?:\/\/user\.ftmailbox\.cn\/ios-receipt-validation\.php.*,requires-body=1,script-path=https://raw.githubusercontent.com/githubwisdom/My-Quantumult-X/main/JS-file/TF-Chinese.js
[MITM]
hostname= %APPEND% user.ftmailbox.cn
