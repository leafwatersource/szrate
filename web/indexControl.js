var Control = require("../server/Control");
var utilResult = require("../util/RespUtil");
var path = new Map();
//添加数据
function GetMenu(request, response) {
    request.on("data",function(params){
        Control.GetMenu(params,function(result) {
            response.writeHead(200);
            response.write(utilResult.writeResult("success", "查询成功", result));
            response.end();
        })
    });

}

function GetFooter(request, response) {
    Control.GetFooterControl(function(result) {
        response.writeHead(200);
        response.write(utilResult.writeResult("success", "查询成功", result));
        response.end();
    });
}

function GetAllControl(request, response) {
    request.on("data",function(params){
        Control.AllControl(params,function(result) {
            response.writeHead(200);
            response.write(utilResult.writeResult("success", "查询成功", result));
            response.end();
        });
    });
}

function GetSubmenu(request, response) {
    Control.AllSubmenu(function(result) {
        response.writeHead(200);
        response.write(utilResult.writeResult("success", "查询成功", result));
        response.end();
    })
}

function GetPageTitle(request, response) {
    request.on("data",function(params){
        var language = JSON.parse(params).language;
        Control.PageTitle(language,function(result) {
            response.writeHead(200);
            response.write(utilResult.writeResult("success", "查询成功", result));
            response.end();
        })
    });
}

function GetSubtitle(request, response) {
    request.on("data",function(params){

    var language = JSON.parse(params).language;
    Control.Subtitle(language,function(result) {
        response.writeHead(200);
        response.write(utilResult.writeResult("success", "查询成功", result));
        response.end();
    });
    })
}
path.set("/GetMenu", GetMenu);
path.set("/GetFooter", GetFooter);
path.set("/GetAllControl", GetAllControl);
path.set("/GetSubmenu", GetSubmenu);
path.set("/GetPageTitle", GetPageTitle);
path.set("/GetSubtitle", GetSubtitle);
module.exports.path = path;