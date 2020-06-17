var conn = require("./connection");
var config = require("../config");
var databaseQuery = require("./DatabaseQuery");
var language = config["language"];

function queryFootControl(language,success) {
    var sql = "select type,controlname" + language + " As controlname from footercontrol";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}
module.exports = {
    "queryFootControl": queryFootControl
};