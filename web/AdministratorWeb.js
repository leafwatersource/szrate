var AdministratorServer = require("../server/AdministratorServer");
var utilResult = require("../util/RespUtil");
var path = new Map();

function Login(request, response) {
    request.on("data", function(Args) {
        AdministratorServer.UserInfo(Args, function(result) {
            response.writeHead(200);
            response.write(utilResult.writeResult("success", "查询成功", result));
            response.end();
        })
    })
}
path.set("/Login", Login);
module.exports.path = path;