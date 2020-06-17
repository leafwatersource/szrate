var ArticleDao = require("../dao/ArticleDao");

function SetLike(ArticleLikeInfo, success) {
    ArticleDao.SetLike(ArticleLikeInfo, function(result) {
        success(result);
    });
}
// 获取文章列表
function GetArticleList(language,success) {
    var ArtitleTitle;
    ArticleDao.querArticleOverview(language,function(result) {
        ArtitleTitle = result;
        ArticleDao.queryArticleLists(language,function(ArticleLists) {
            for (var j = 0; j < ArtitleTitle.length; j++) {
                ArtitleTitle[j]["Articles"] = [];
                for (var i = 0; i < ArticleLists.length; i++) {
                    if (ArtitleTitle[j]["Id"] === ArticleLists[i]["ParentId"]) {
                        ArtitleTitle[j]["Articles"].push(ArticleLists[i]);
                    }
                }
            }
            success(ArtitleTitle);
        })
    });

}

function ArticleCount(success) {
    ArticleDao.queryArticleCount(function(result) {
        success(result);
    });
}

function LimitArticle(language,max,min, success) {
    if (min !== undefined && max !== undefined) {
        ArticleDao.queryLimitArticle(language,max,min, function(result) {
            success(result);
        })
    } else {
        ArticleDao.queryLimitArticle(language,5, 0, function(result) {
            success(result);
        });
    }
}

function DeleteArticle(success) {
    ArticleDao.DelArticle(function(result) {
        success(result);
    })
}

function FootArticle(language,success) {
    ArticleDao.queryFootArticle(language,function(result) {
        success(result);
    });
}

function Features(language,success) {
    ArticleDao.queryFeatures(language,function(result) {
        success(result);
    });
}

function Benefits(language,success) {
    ArticleDao.queryBenefits(language,function(result) {
        success(result);
    });
}

function WArticle(params, success) {
    var paramsArr = [];
    paramsArr.push(params.params.title);
    paramsArr.push(params.params.content);
    ArticleDao.WriteArticle(paramsArr, function(result) {
        success(result);
    })
}

function deleteArticle(title, success) {
    ArticleDao.DelArticle(title, function(result) {
        success(result);
    })
}

function ArticleContent(language,title, success) {
    ArticleDao.queryArticleContent(language,title, function(result) {
        success(result);
    });
}

function Article(title, success) {
    ArticleDao.queryArticle(title, function(result) {
        success(result);
    });
}

function updateArticle(params, success) {
    ArticleDao.updateArticle(params, function(result) {
        success(result);
    })
}

function ArticleLanguageType(params,success){
    var title = JSON.parse(params).title;
    var language = JSON.parse(params).LanguageType;
    var prevLanguage = JSON.parse(params).prevLanguage;
    ArticleDao.queryArticleType(title,language,prevLanguage,function(result){
        success(result);
    })
}
//管理员设置文章的语言
function WAriticleLanguage(params,success){
    var title = JSON.parse(params).title;
    var content = JSON.parse(params).content;
    var language = JSON.parse(params).language;
    var prevlanguage = JSON.parse(params).prevlanguage;
    var prevTitle = JSON.parse(params).prevTitle;
    ArticleDao.upDateArticleLanguage(title,content,language,prevlanguage,prevTitle,function (result) {
        success(result);
    })
}
module.exports = {
    "SetLike": SetLike,
    "GetArticleList": GetArticleList,
    "ArticleCount": ArticleCount,
    "LimitArticle": LimitArticle,
    "FootArticle": FootArticle,
    "DeleteArticle": DeleteArticle,
    "Features": Features,
    "Benefits": Benefits,
    "WArticle": WArticle,
    "deleteArticle": deleteArticle,
    "ArticleContent": ArticleContent,
    "Article": Article,
    "updateArticle": updateArticle,
    "ArticleLanguageType":ArticleLanguageType,
    "WAriticleLanguage":WAriticleLanguage
};