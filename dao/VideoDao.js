var conn = require("./connection");
var config = require("../config");
var databaseQuery = require("./DatabaseQuery");
var language = config["language"];

function queryAllVideo(language,success) {
    var sql = "select VideoTitle" + language + " As VideoTitle,VideoDesc" + language + " As VideoDesc,VideoLink from videotab";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}
module.exports = {
    "queryAllVideo": queryAllVideo
};