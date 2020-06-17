var videoDao = require("../dao/VideoDao");

function AllVideo(language,success) {
    videoDao.queryAllVideo(language,function(result) {
        success(result);
    })
}
module.exports = {
    "AllVideo": AllVideo
};