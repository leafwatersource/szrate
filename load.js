var fs = require("fs");
var globalConfig = require("./config");
//这个是判断是否是重复的接口
var controllerSet = [];
var pathMap = new Map();

//读取目录的路径
var files = fs.readdirSync(globalConfig["webpath"]); //目录下的所有文件

for (var i = 0; i < files.length; i++) {
    var temp = require("./" + globalConfig["webpath"] + "/" + files[i]); //引入文件
    if (temp.path) {
        for (var [key, value] of temp.path) {
            if (pathMap.get(key) == null) {
                pathMap.set(key, value);
            } else {
                throw new Error("url path异常, url:" + key);
            }
        }
        controllerSet.push(temp);
    }
}


// var fs = require("fs");
// var gloable = require("./config")
// var controllerset = [];
// var pathMap = new Map();
// var files = fs.readdirSync(globalConfig["webpath"]);
// for (var i =0;i<files.length;i++){
//     var temp = require("./"+globalConfig["webpath"]+"/"+files[i]);
//     if(temp.path){
//         for (var [key,value] of temp.path) {
//             if(pathMap.get(key) == null){
//                 pathMap.set(key,value)
//             }else{
//                 throw new Error("url path 异常,url:"+key)
//             }
//         }
//     }
//     controllerset.push(temp);
// }

module.exports = pathMap;