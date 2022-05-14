exports.sendSms = (phone, message) => {
    var unirest = require("unirest");
    console.log(phone, message, "called");
    var req = unirest(
      "GET",
      "https://www.fast2sms.com/dev/bulkV2"
    );
  
    req.query({
      authorization:
        "NK4kv7AYH3Epczqjsih1MDfwSyJWn862tCLuUZVraR0ePGlgmFEnuQ3J5cdbxSoMa2L6OliWhVFY0kz8",
      sender_id: "TXTIND",
      message: message,
      route: "v3",
      numbers: phone,
    });
  
    req.headers({
      "cache-control": "no-cache",
    });
    req.end(function (res) {
      if (res.error) throw new Error(res.error);
      console.log(res.body);
    });
  };
  