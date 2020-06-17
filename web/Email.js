var Email = require("../server/EmailServer");
var path = new Map();

function SendEmail(request, response) {
    request.on("data", function(parseArr) {
        parseArr = JSON.parse(parseArr).params;
        Email.SendEmail(parseArr, function(result) {
            response.send(result);
            response.end();
        })
    });
}
path.set("/SendEmail", SendEmail);
module.exports.path = path;