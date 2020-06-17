var SystemDao = require("../dao/SystemDao");

function SystemLanguage(success) {
    SystemDao.querySystemLanguage(function (result) {
        success(result);
    });
}

module.exports = {
    "SystemLanguage": SystemLanguage
};