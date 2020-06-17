var fs = require("fs");
var configArr = fs.readFileSync("./server.config").toString().split("\r\n"); //读取文件的内容
var globalconfig = {};
for (var i = 0; i < configArr.length; i++) {
    globalconfig[configArr[i].split("=")[0]] = configArr[i].split("=")[1];
}
module.exports = globalconfig;