var ArticleServer = require("../server/ArticleServer");
var utilResult = require("../util/RespUtil");
var path = new Map();
function SetLike(request, response) {
    request.on("data", function(arg) {
        var ArticleLikeArr = JSON.parse(arg).params;
        ArticleServer.SetLike(ArticleLikeArr, function(result) {
            response.send(result);
            response.end();
        });
    })

}

function GetArticleList(request, response) {
    request.on("data", function(arg) {
        var type = JSON.parse(arg).type;
        var language = JSON.parse(arg).language;
        var max = JSON.parse(arg).max;
        var min = JSON.parse(arg).min;
        if (type=== "lookArticle") {
            ArticleServer.GetArticleList(language, function(result) {
                response.writeHead(200);
                response.write(utilResult.writeResult("success", "查询成功", result));
                response.end();
            });
        } else if (type === "limitArticle") {
            ArticleServer.LimitArticle(language, max,min,function(result) {
                response.writeHead(200);
                response.write(utilResult.writeResult("success", "查询成功", result));
                response.end();
            })
        } else if (type === "FootArticle") {
            ArticleServer.FootArticle(language,function(result) {
                response.writeHead(200);
                response.write(utilResult.writeResult("success", "查询成功", result));
                response.end();
            })
        }

    });
}

function GetArticleCount(request, response) {
    ArticleServer.ArticleCount(function(result) {
        response.writeHead(200);
        response.write(utilResult.writeResult("success", "查询成功", result));
        response.end();
    });
}

function DelArticle(request, response) {
    request.on("data", function(ArticleTitle) {
        ArticleServer.DeleteArticle(function(result) {
            response.send(result);
            response.end();
        })
    });
}

function GetFeatures(request, response) {
    request.on("data",function(params){
        var language = JSON.parse(params).language;
        ArticleServer.Features(language,function(result) {
            response.writeHead(200);
            response.write(utilResult.writeResult("success", "查询成功", result));
            response.end();
        });
    })

}

function GetBenefits(request, response) {
    request.on("data",function(params){
        var language = JSON.parse(params).language;
        ArticleServer.Benefits(language,function(result) {
            response.writeHead(200);
            response.write(utilResult.writeResult("success", "查询成功", result));
            response.end();
        });
    });
}
//写文章,只能写中文的文章
function WriterArticle(request, response) {
    request.on("data", function(params) {
        var params = JSON.parse(params);
        ArticleServer.WArticle(params, function(result) {
            response.writeHead(200);
            response.write(utilResult.writeResult("success", "添加状态", result));
            response.end();
        });
    })
}
//删除文章
function DeleteArticle(request, response) {
    request.on("data", function(params) {
        params = JSON.parse(params).params.title;
        ArticleServer.deleteArticle(params, function(result) {
            response.writeHead(200);
            response.write(utilResult.writeResult("success", "删除状态", result));
            response.end();
        })
    })
}
//获取文章的内容
function GetArticleContent(request, response) {
    request.on("data", function(params) {
        var title = JSON.parse(params).title;
        var language = JSON.parse(params).language;
        ArticleServer.ArticleContent(language,title, function(result) {
            response.writeHead(200);
            response.write(utilResult.writeResult("success", "查询成功", result));
            response.end();
        })
    })
}
//获取文章
function GetArticle(request, response) {
    request.on("data", function(params) {
        var title = JSON.parse(params).params.title;
        ArticleServer.Article(title, function(result) {
            response.writeHead(200);
            response.write(utilResult.writeResult("success", "查询成功", result));
            response.end();
        })
    })
}
//修改文章的内容
function ChangeArticle(request, response) {
    request.on("data", function(params) {
        ArticleServer.updateArticle(params, function(result) {
            response.writeHead(200);
            response.write(utilResult.writeResult("success", "更新成功", result));
            response.end();
        })
    });
}
//管理员获取文章的各种语言
function GetArticleLanguageType(request,response){
    request.on("data",function(params){
        ArticleServer.ArticleLanguageType(params,function(result){
            response.writeHead(200);
            response.write(utilResult.writeResult("success","查询成功",result));
            response.end();
        })
    })
}
//管理员设置文章的各种语言
function WriteAritcleLanguage(request,response){
    request.on("data",function(params){
        ArticleServer.WAriticleLanguage(params,function(result){
            response.writeHead(200);
            response.write(utilResult.writeResult("success","添加成功",result));
            response.end();
        });
    });
}
path.set("/SetLike", SetLike);
path.set("/GetArticleList", GetArticleList);
path.set("/GetArticleCount", GetArticleCount);
path.set("/DelArticle", DelArticle);
path.set("/GetFeatures", GetFeatures);
path.set("/GetBenefits", GetBenefits);
path.set("/WriterArticle", WriterArticle);
path.set("/DeleteArticle", DeleteArticle);
path.set("/GetArticleContent", GetArticleContent);
path.set("/GetArticle", GetArticle);
path.set("/ChangeArticle", ChangeArticle);
path.set("/GetArticleLanguageType", GetArticleLanguageType);
path.set("/WriteAritcleLanguage", WriteAritcleLanguage);
module.exports.path = path;