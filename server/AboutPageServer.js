var AboutPageDao = require("../dao/AboutPage");
function AboutPageInfo(language,success){
    AboutPageDao.querAboutPageInfo(language,function(result){
        success(result);
    });
}
module.exports = {
    "AboutPageInfo":AboutPageInfo
};


