#解锁Spotify Premium会员
[rewrite_local]
^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontent.com/githubwisdom/My-Quantumult-X/main/JS-file/SpotifyMumber.js

[mitm]
hostname = spclient.wg.spotify.com
