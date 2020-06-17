var conn = require("./connection");
var config = require("../config");
var databaseQuery = require("./DatabaseQuery");
var language = config["language"];

function queryAllMenu(language,success) {
    var sql = "select Id,Menu" + language + " As MenuName,MenuLink from control";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function queryAllChild(language,success) {
    var sql = "select PartId,Child" + language + " As ChildName ,ChildLink  from childcontrol";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}


function queryFooterControl(success) {
    //获取页脚的控件
    var sql = "select controlname" + language + " As controlname,type from footercontrol";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function queryAllControl(language,success) {
    // 获取首页当中所有的控件
    var sql = "select AboutContent" + language + " As AboutContent,AboutDesc" + language + " As AboutDesc,AboutTitle" + language + " As AboutTitle,AboutNum,AboutType from About";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function queryPageTitle(language,success) {
    var sql = "select Title" + language + " As PageTitle from PageTitle";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success)
}

function querysubtitle(language,success) {
    var sql = "select titleName" + language + " As titleName,itemLink from subtitle";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success)
}
module.exports = {
    "queryAllMenu": queryAllMenu,
    "queryAllChild": queryAllChild,
    "queryFooterControl": queryFooterControl,
    "queryAllControl": queryAllControl,
    "queryPageTitle": queryPageTitle,
    "querysubtitle": querysubtitle
};