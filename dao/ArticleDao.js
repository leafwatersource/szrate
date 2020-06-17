var conn = require("./connection");
var config = require("../config");
var databaseQuery = require("./DatabaseQuery");
var language = config["language"];
// 用户点击喜欢文章
function SetLike(ArticleLikeInfo, success) {
    var sql = "UPDATE articlelist SET ArticleLike= ? WHERE ArticleTitle" + language + "=?";
    ArticleLikeInfo = [ArticleLikeInfo.ArticleLikeNum, ArticleLikeInfo.title];
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.update(connection, sql, ArticleLikeInfo, success);
}

function queryArticleLists(language,success) {
    var sql = "select ParentId,ArticleTitle" + language + " As ArticleTitle,ArticleContent" + language + " As ArticleContent,ArticleTime" + language + " As ArticleTime,ArticleLike  from articlelist  limit 12";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function querArticleOverview(language,success) {
    var sql = "select Id,Title" + language + " As Title  from article";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function queryArticleCount(success) {
    var sql = "select count(*) As count from articlelist";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function queryLimitArticle(language,max,min , success) {
    var sql = "select ArticleTitle" + language + " As ArticleTitle,\
     ArticleContent" + language + " As ArticleContent,\
     ArticleTime" + language + " As ArticleTime, ArticleLike,Announcer,AnnouncerText" + language + " As AnnouncerText,\
     ReadText" + language + " As ReadText,LikeText" + language + " As LikeText from articlelist limit " + min + "," + max;
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function queryFootArticle(language,success) {
    var sql = "select ArticleTitle" + language + " As ArticleTitle,Category" + language + " As Category,Announcer  from articlelist limit 0,5";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function queryFeatures(language,success) {
    var sql = "select itemName" + language + " As itemName,content" + language + " As content,iconClass from OwnedFeatures";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function queryBenefits(language,success) {
    var sql = "select itemName" + language + " As itemName,content" + language + " As content,iconClass from Benefits";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function WriteArticle(params, success) {

    var sql = "INSERT INTO articlelist(ArticleTitleCN,ArticleContentCN,ArticleTimeCN,ArticleLike) VALUES(?,?,?,?)";
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var time = year + "年" + month + "月" + day + "日";
    params.push(time, 0);
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.insert(connection, sql, params, success)
}

function DelArticle(title, success) {
    var sql = "DELETE FROM articlelist WHERE ArticleTitle" + language + "='" + title + "'";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.del(connection, sql, success);
}

function queryArticleContent(language,title, success) {
    var sql = "select ArticleContent" + language + " As ArticleContent from articlelist where ArticleTitle" + language + "='" + title + "'";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function queryArticle(title, success) {
    var sql = "select ArticleTitleCN As ArticleTitle,ArticleContentCN As ArticleContent from articlelist where ArticleTitleCN = '" + title + "'";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success)
}

function updateArticle(params, success) {
    var title = JSON.parse(params).params.title;
    var content = [JSON.parse(params).params.content];
    var sql = "UPDATE articlelist SET ArticleContentCN= ? WHERE ArticleTitleCN ='" + title + "'";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.update(connection, sql, content, success);
}
function queryArticleType(title,LanguageType,prevLanguage,success){
    var sql = "select ArticleTitle"+LanguageType+" As ArticleTitle,ArticleContent"+LanguageType+" As ArticleContent from articlelist where ArticleTitle"+prevLanguage+"='"+title+"'";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection,sql,success);
}
function upDateArticleLanguage(title,content,language,prevlanguage,prevTitle,success){
    var params = [title,content];
    var sql = "UPDATE articlelist SET ArticleTitle"+language+"= ?,ArticleContent"+language+"=? WHERE ArticleTitle"+prevlanguage+"='" + prevTitle + "'";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.update(connection,sql,params,success);
}
module.exports = {
    "SetLike": SetLike,
    "querArticleOverview": querArticleOverview,
    "queryArticleLists": queryArticleLists,
    "queryArticleCount": queryArticleCount,
    "queryLimitArticle": queryLimitArticle,
    "queryFootArticle": queryFootArticle,
    "queryFeatures": queryFeatures,
    "queryBenefits": queryBenefits,
    "WriteArticle": WriteArticle,
    "DelArticle": DelArticle,
    "queryArticleContent": queryArticleContent,
    "queryArticle": queryArticle,
    "updateArticle": updateArticle,
    "queryArticleType":queryArticleType,
    "upDateArticleLanguage":upDateArticleLanguage
};