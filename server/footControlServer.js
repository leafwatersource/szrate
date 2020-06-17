var GetControl = require("../dao/footerDao");

function GetFootControl(language,success) {
    GetControl.queryFootControl(language,function(result) {
        var footArr = [],
            message = {},
            footer = {},
            contact = {};
        result.forEach(function(ele, index) {
            if (ele.type.indexOf("Message") !== -1) {
                message[ele.type] = ele.controlname;
            } else if (ele.type.indexOf("Contact") !== -1) {
                contact[ele.type] = ele.controlname;
            } else if (ele.type.indexOf("Footer") !== -1) {
                footer[ele.type] = ele.controlname;
            }
        });
        footArr[0] = message;
        footArr[1] = contact;
        footArr[2] = footer;
        success(footArr);
    });
}
module.exports = {
    "GetControl": GetFootControl
};