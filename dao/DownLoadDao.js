var conn = require("./connection");
var databaseQuery = require("./DatabaseQuery");
function queryMessage(language,success){
    var sql = "select link,loadTitle"+language+" As loadTitle,loadContent"+language+" As loadContent from loadtab";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection,sql,success);
}
module.exports = {
    "queryMessage":queryMessage
};