const admin = require("../model/admin_model")
brycpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Adminlogin = async(req,res) =>{
    try {
     const {email,password} = req.body
     const result = await admin.findOne({email}) 
     if(!result){
         return res.json({
             success:false,
             message:"Plese enter your correct email",
             data:null
 
         })
        }
    //  email found
     const verify = await brycpt.compare(password,result.password)  
     if(!verify){
        return res.json({
            success:false,
            message:"Plese enter your correct password",
            data:null
 
        }) 
 }
 const token = await jwt.sign({user:result._id},process.env.JWT_SECRET_KEY)
 // all email and pasword match
 res.json({
    success:true,
    message:"You are logged in",
    data:result,
     token
 
 })
 console.log(result);
    } catch (error) {
     res.json({
         success:false,
         message:`Something went worng ${error}`,
         data:null
         
      
      })  
      console.log(error);
    }
 }
 module.exports = Adminlogin