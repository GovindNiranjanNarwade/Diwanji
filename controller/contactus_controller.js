const contactus = require("../model/contactus_model")
exports.createContactus = async(req,res)=>{
    const result = await contactus.create(req.body)
    try {
        res.json({
        message:"create a contact details",
        success:"true",
        data:result
        })
    } catch (error) {
        res.json({
            message:"Something went worng "+{error} ,
            success:"false",
            data:null
            }) 
    }

}
exports.getContactus = async(req,res)=>{
    const result = await contactus.find()
    try {
        res.json({
        message:"get a contact details",
        success:"true",
        data:result
        })
    } catch (error) {
        res.json({
            message:"Something went worng "+{error} ,
            success:"false",
            data:null
            }) 
    }

}