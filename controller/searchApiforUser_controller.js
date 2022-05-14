const user= require("../model/user_model")
exports.SearchuserByName = async(req,res)=>{
    const result = await user.findOne(req.body.Firstname)
    
    try {
        res.json({
        count:result.length,
        message:"get a user By Name",
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