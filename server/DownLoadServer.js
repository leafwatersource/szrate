var DownLoadDao = require("../dao/DownLoadDao");
function Message (language,success){
    DownLoadDao.queryMessage(language,function(result){
        success(result);
    });
}
module.exports = {
    "Message":Message
};