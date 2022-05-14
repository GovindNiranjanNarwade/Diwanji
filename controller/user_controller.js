const user = require("../model/user_model")
exports.createUser = async(req,res)=>{
    const result = await user.create(req.body)
    try {
        res.json({
        message:"create a user",
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
exports.getUser = async(req,res)=>{
    const result = await user.find()
    
    try {
        res.json({
        count:result.length,
        message:"get a user",
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
exports.deleteUser = async(req,res)=>{
    const result = await user.findByIdAndDelete(req.params.id)
    
    try {
        res.json({
        message:"delete a user",
        success:"true",
        data:null
        })
    } catch (error) {
        res.json({
            message:"Something went worng "+{error} ,
            success:"false",
            data:null
            }) 
    }

}
exports.SingleUser = async(req,res)=>{
    const result = await user.findById(req.params.id)
    
    try {
        res.json({
        message:"get a Single user Details",
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
exports.updateUser=async(req,res)=>{
    const result = await user.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,});
    try {
        res.json({
        message:"update a user",
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