const nodemailer = require('nodemailer');
const moment = require('moment');
const path = require('path');

function SendEmail(parseArr, success) {
    var sendText = parseArr.MessageContent + "\n发件人:" + parseArr.company + "(" + parseArr.YourName + ")\n发件人联系方式:" + parseArr.phone + "\n发件人邮箱:" + parseArr.YourEmail;
    const transporter = nodemailer.createTransport({
        host: "smtp.qq.com",
        port: 465,
        auth: {
            "user": '1434706848@qq.com',
            "pass": 'zyaowjubmeubjihj'
        }
    });
    var emailCotent = {
        from: "yeshuiyuan@foxmail.com",
        to: '1434706848@qq.com',
        subject: "客户消息",
        text: sendText,
    };
    transporter.sendMail(emailCotent, (error, info) => {
        if (error) {
            success("error");
        }
        success("success");
    });
}
module.exports = {
    "SendEmail": SendEmail
};