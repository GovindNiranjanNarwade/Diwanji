const enquiry = require("../model/enquiry_model")
exports.createEnquiry = async(req,res)=>{
    const result = await enquiry.create(req.body)
    try {
        res.json({
        message:"create a Enquiry Details",
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
exports.getEnquiry = async(req,res)=>{
    const result = await enquiry.find()
    try {
        res.json({
        message:"get a Enquiry Details",
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
exports.deleteEnquiry = async(req,res)=>{
    const result = await enquiry.findByIdAndDelete(req.params.id)
    try {
        res.json({
        message:"Delete a Enquiry Details",
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