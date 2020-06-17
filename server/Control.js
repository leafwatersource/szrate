var GetControl = require("../dao/GetMenu");
// 获取导航条的信息
function GetMenu(params,success) {
    var language = JSON.parse(params).language;
    var parentMenu = null;
    var childMenu = null;
    GetControl.queryAllMenu(language,parent);
    function parent(data) {
        parentMenu = data;
        GetControl.queryAllChild(language,child);
    }

    function child(data) {
        childMenu = data;
        for (var i = 0; i < parentMenu.length; i++) {
            parentMenu[i]["ChildArr"] = [];
            for (var j = 0; j < childMenu.length; j++) {
                if (childMenu[j]["PartId"] === parentMenu[i]["Id"]) {
                    var childJSon = {};
                    childJSon["ChildName"] = childMenu[j]["ChildName"];
                    childJSon["ChildLink"] = childMenu[j]["ChildLink"];
                    parentMenu[i]["ChildArr"].push(childJSon);
                }
            }
        }
        success(parentMenu);
    }
}
// 获取关于的内容
function GetAbout(success) {
    GetControl.queryAboutContent(function(result) {
        result[0]["AboutContent"] = result[0]["AboutContent"].split("\\n");
        success(result)
    });
}
// 获取进度条的信息
function GetAboutProgressBar(success) {
    GetControl.queryAboutProgressBar(function(result) {
        success(result);
    })
}

function GetAboutDesc(success) {
    GetControl.queryAboutDesc(function(result) {
        success(result);
    })
}

// 获取尾部的信息
function GetFooterControl(success) {
    var footercontrol = [];
    GetControl.queryFooterControl(function(result) {
        var controljson = { message: [] };
        if (footercontrol.length === 0) {
            controljson["message"].push(result[0]);
            footercontrol.push(controljson);
        } else {
            for (var i = 0; i < footercontrol.length; i++) {
                for (var j = 0; j < result.length; j++) {
                    if (footercontrol[i][result[j]["type"]].length !== 0) {
                        footercontrol[i][result[j]["type"]].push(result[j]);
                    }
                }
            }
        }
        success(footercontrol);
    });
}

function AllControl(params,success) {
    var language = JSON.parse(params).language;
    GetControl.queryAllControl(language,function(result) {
        success(result);
    });
}

function PageTitle(lanugage,success) {
    GetControl.queryPageTitle(lanugage,function(result) {
        success(result);
    })
}

function Subtitle(lanugage,success) {
    GetControl.querysubtitle(lanugage,function(result) {
        success(result)
    })
}
module.exports = {
    "GetMenu": GetMenu,
    "GetFooterControl": GetFooterControl,
    "AllControl": AllControl,
    "PageTitle": PageTitle,
    "Subtitle": Subtitle
};