var AdministratorDao = require("../dao/AdministratorDao");

function UserInfo(args, success) {
    var UserName = JSON.parse(args).params.username;
    var UserPass = JSON.parse(args).params.userpass;
    var type = JSON.parse(args).params.type;
    AdministratorDao.queryUser(UserName, function(result) {
        if (result[0].count == 1) {
            AdministratorDao.queryUserPass(UserName, UserPass, function(result) {
                if (result[0].count == 1) {
                    if (type == "GetName") {
                        AdministratorDao.queryName(UserName, UserPass, function(result) {
                            success(result);
                        })
                    } else {
                        success("success");
                    }
                } else {
                    success("密码错误");
                }
            })
        } else {
            success("用户名错误");
        }
    })
}
module.exports = {
    "UserInfo": UserInfo
};