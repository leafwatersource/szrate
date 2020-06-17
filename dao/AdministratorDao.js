var conn = require("./connection");
var config = require("../config");
var databaseQuery = require("./DatabaseQuery");

function queryUser(username, success) {
    var sql = "select count(UserName) As count from UserLogin where Muser = '" + username + "'";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function queryUserPass(UserName, UserPass, success) {
    var sql = "select count(UserName) As count from UserLogin where Muser = '" + UserName + "' and Mpass = '" + UserPass + "'";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}

function queryName(UserName, UserPass, success) {
    var sql = "select Name from UserLogin where Muser = '" + UserName + "' and Mpass = '" + UserPass + "'";
    var connection = conn.CreateConnectSzrateDatabase();
    databaseQuery.select(connection, sql, success);
}
function find_name(){

}
module.exports = {
    "queryUser": queryUser,
    "queryUserPass": queryUserPass,
    "queryName": queryName
};

