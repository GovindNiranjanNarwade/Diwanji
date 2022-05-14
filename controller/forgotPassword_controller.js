const user = require("../model/user_model")
exports.emailSend=async(req,res)=>{
    console.log(req.body.Email);
    let data = await user.findOne({Email:req.body.Email});
    console.log(data);
    const responseType = {};
    if(data){
        let otpcode =Math.floor((Math.random()*10000)+1);
        let otpData = new  otp({
            Email:req.body.Email,
            code:otpcode,
            expireIn:new Date().getTime() + 300 *1000
        })
        let  otpResponse= await  otpData.save();
        responseType.statusText ='Success'
        responseType.message = 'Please check Your Email Id';

    }
    else{
        responseType.statusText ='error'
        responseType.message = 'Email Id not Exit'; 
    }
   res.json(responseType)
   
}
exports.changePassword=async(req,res)=>{
   let  data = await otp.find({Email:req.body.Email,code:req.body.otp});
   const responseType = {};
   if(data){
       let currentTime =new Date().getTime();
let diff =data.expireIn -currentTime;
if(diff <0){
    responseType.message= 'error'
    responseType.statusText ='Please Resend OTP'
}else{
  let emailexit =await user.findOne({Email:req.body.Email})  
  emailexit.password =req.body.password;
  emailexit.save();
  responseType.message ='Your Password Changed Successfully' 
  responseType.statusText = 'Success'
}
    }
    else{
        responseType.message= 'Invalid Otp'
        responseType.statusText ='Please Resend OTP'

    }
    
    res.json(responseType)
    
}
exports.sendEmail = (to =req.body.Email, subject="Mail form Diwanji Service" ,text=`Forgot Password using this code ${otpcode}`)=>{
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