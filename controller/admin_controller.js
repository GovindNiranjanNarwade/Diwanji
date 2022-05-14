const admin = require("../model/admin_model")
exports.getAdmin = async(req,res)=>{
    try {
        const result = await admin.find()
        res.json({
            count:result.length,
            success:true,
            message:"All Admin",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}