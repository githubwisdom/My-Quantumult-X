#!name= 火狐影视恢复永久会员
#!desc=火狐

##下载地址
##https://apps.apple.com/cn/app/id1609379913

[Script]
# > 火狐影视恢复永久会员
火狐 = type=http-response,pattern= ^http:\/\/huo\.hzzykj\.net\/\/app\/api\/MembershipInformation,requires-body=1,max-size=0,script-path= https://gitlab.com/ioshkj/,script-update-interval=0

[MITM]
hostname = %APPEND% huo.hzzykj.net
