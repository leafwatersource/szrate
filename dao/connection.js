var mysql = require("mysql");
var GlobalConfig = require("../config");
var szrateDatabase = JSON.parse(GlobalConfig["szrateDatabase"]);

function CreateConnectSzrateDatabase() {
    var connection = mysql.createConnection(szrateDatabase);
    return connection;
}
module.exports = {
    "CreateConnectSzrateDatabase": CreateConnectSzrateDatabase
};