var Control = require("../server/footControlServer");
var path = new Map();

//添加数据
function GetFoot(request, response) {
    request.on("data",function(params){
        var language = JSON.parse(params).language;
        Control.GetControl(language,function(result) {
            response.send(result);
            response.end();
        });
    });

}
path.set("/GetFoot", GetFoot);
module.exports.path = path;