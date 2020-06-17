var conn = require("./connection");
var dataBase = require("./DatabaseQuery");
function querySystemLanguage(success){
    var sql = "select itemName,attr1 from System where languageType = 'CN'";
    var connection = conn.CreateConnectSzrateDatabase();
    dataBase.select(connection,sql,success);
}
module.exports = {
  "querySystemLanguage":  querySystemLanguage
};