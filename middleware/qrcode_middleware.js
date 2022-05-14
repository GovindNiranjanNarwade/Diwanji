
// Require the package
const QRCode = require('qrcode')


 const user = require("../model/user_model")
// Creating the data
let data = {
    name:"Employee Name",
    age:27,
    department:"IT",
    id:"aisuoiqu3234738jdhf100223"
}
 
// Converting the data into String format
let stringdata = JSON.stringify(data)
 
// Print the QR code to terminal
QRCode.toString(stringdata,{type:'terminal'},
                    function (err, QRcode) {
 
    if(err) return console.log("error occurred")
 
    // Printing the generated code
    console.log(QRcode)
})
   
// Converting the data into base64
QRCode.toDataURL(stringdata, function (err, code) {
    if(err) return console.log("error occurred")
 
    // Printing the code
    // console.log(code)
})

var Jimp = require("jimp");

var fs = require('fs')

var qrCode = require('qrcode-reader');


var QRcode = fs.readFileSync(QRcode + '/image.png');


Jimp.read(buffer, function(err, image) {
	if (err) {
		console.error(err);
	}
	
	let qrcode = new qrCode();
	qrcode.callback = function(err, value) {
		if (err) {
			console.error(err);
		}
		// Printing the decrypted value
		console.log(value.result);
	};
	// Decoding the QR code
	qrcode.decode(image.bitmap);
});
