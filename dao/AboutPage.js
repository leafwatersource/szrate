var conn = require("./connection");
var config = require("../config");
var databaseQuery = require("./DatabaseQuery");
function querAboutPageInfo(language,success){
    var sql = "select Title"+language+" As Title,item"+language+" As item from aboutpage";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection,sql,success);
}
module.exports = {
    "querAboutPageInfo":querAboutPageInfo
};