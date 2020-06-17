var videoServer = require("../server/VideoServer");
var utilResult = require("../util/RespUtil");
var path = new Map();

function GetAllVideo(request, response) {
request.on("data",function (params) {
    var language = JSON.parse(params).language;
    videoServer.AllVideo(language,function(result) {
        response.writeHead(200);
        response.write(utilResult.writeResult("success", "查询成功", result));
        response.end();
    })
});

}
path.set("/GetAllVideo", GetAllVideo);
module.exports.path = path;