# 使用的npm库
* colors
* npmlog
* semver
# require 引入文件的规则
默认支持.js .json .node 文件，不是其中三个的话都以.js规则来解析

# 获取当前进程使用的node版本
```js
process.version
```

# root-check
root账号启动检测。降级至普通权限用户
1.0版本是commonjs包
2.0是ESM包