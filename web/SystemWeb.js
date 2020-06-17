var SystemServer = require("../server/SystemServer");
var resultUtil = require("../util/RespUtil");
var path = new Map();
function GetLanguage(request,response){
    SystemServer.SystemLanguage(function(result){
        response.writeHead(200);
        response.write(resultUtil.writeResult("success","查询成功",result));
        response.end();
    });
}
path.set("/GetLanguage",GetLanguage);
module.exports.path = path;