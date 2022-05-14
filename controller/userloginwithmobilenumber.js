const user = require("../model/user_model")
exports.MobileNumberSend=async(req,res)=>{
    console.log(req.body.Mobile);
    let data = await user.findOne({Mobile:req.body.Mobile});
    console.log(data);
    const responseType = {};
    if(data){
        let otpcode =Math.floor((Math.random()*10000)+1);
        console.log(otpcode);
        // let otpData = new  otp({
        //     Mobile:req.body.Mobile,
        //     code:otpcode,
        //     expireIn:new Date().getTime() + 300 *1000
        // })
        // let  otpResponse= await  otpData.save();
        responseType.statusText ='Success'
        responseType.message = 'Please check   SMS in Registered Mobile Number';

    }
    else{
        responseType.statusText ='error'
        responseType.message = 'Mobile Number not Exit'; 
    }
   res.json(responseType)
   
}
exports.UserLogin=async(req,res)=>{
   let  data = await user.find({Mobile:req.body.Mobile,code:req.body.otp});
   const responseType = {};
   if(data){
       let currentTime =new Date().getTime();
let diff =data.expireIn -currentTime;
if(diff <0){
    responseType.message= 'error'
    responseType.statusText ='Please Resend OTP'
}else{
  let Mobileexit =await user.findOne({Mobile:req.body.Mobile})  
  Mobileexit.password =req.body.password;
  Mobileexit.save();
  responseType.message ='Your Login Successfully' 
  sendEmail()
  responseType.statusText = 'Success'
}
    }
    else{
        responseType.message= 'Invalid Otp'
        responseType.statusText ='Please Resend OTP'

    }
    
    res.json(responseType)
    
}
exports.sendEmail = (to =req.body.Mobile, subject="Mail form Diwanji Service" ,text="Welcome to Our Website")=>{
    const transproter = nodemailer.createTransport({
        service:'gmail',
        auth:{
          user:'govindpurva3@gmail.com',
          pass:"Purva@123"
        }
    })
    const options ={
        from:"govindpurva3@gmail.com",
        to:to,
        subject:subject,
        text:text
    }
    transproter.sendMail(options,(error,info)=>{
        error ? console.log("ERROR"+error):console.log("EMAIL SEND SUCCESSFULLY");
    })
}



