# webnav
## 部署
Fork本项目，点击 github 项目的 Settings -> Pages

Source 选择 Deploy from a branch

Branch 选择 main ，路径选择 '/(root)'

可点击 Actions 查看构建过程，由于有缓存，可能构建完成之后，需要等几分钟才能看到最新的修改。

## 访问方法
浏览器访问 http://wylazy.github.io/webnav

把 wylazy 替换为你自己的 github 用户名

## 绑定域名
如果想绑定自己的域名，点击 github 项目的 Settings -> Pages

在 Custom domain 中填入自定义域名

回到域名注册商的平台，给该域名添加一个 CNAME 记录，指向 wylazy.github.io （把 wylazy 替换为你自己的 github 用户名）

## 配置导航页
修改 data.js，把导航网页配置进去。将修改推送到 github，后台会自动构建。

## 配置邀请页
修改 invite.data.js，配置邀请码或者邀请链接。
