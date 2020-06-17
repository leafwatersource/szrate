var path = new Map();
var DownLoadWeb = require("../server/DownLoadServer");
var utilResult = require("../util/RespUtil");

function GetDownLoadMessage(request, response) {
    request.on("data", function (params) {
        var language = JSON.parse(params).language;
        DownLoadWeb.Message(language, function (result) {
            response.writeHead(200);
            response.write(utilResult.writeResult("success", "查询成功", result));
            response.end();
        })
    })
}

path.set("/GetDownLoadMessage", GetDownLoadMessage);
module.exports.path = path;