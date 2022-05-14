const plan =require("../model/plan_model")
exports.createPlan =async(req,res)=>{
    const result= await plan.create(req.body)
    try {
        res.json({
            message:"Create a Plan",
            success:true,
            data:result
        })
    } catch  {
        res.json({
            message:"Something Went Worng ",
            success:false,
            data:null
        })
    }
}
exports.getPlan =async(req,res)=>{
    const result= await plan.find()
    try {
        res.json({
            count:result.length,
            message:"get a Plan",
            success:true,
            data:result
        })
    } catch  {
        res.json({
            message:"Something Went Worng ",
            success:false,
            data:null
        })
    }
}
exports.deletePlan =async(req,res)=>{
    const result= await plan.findByIdAndDelete(req.params.id)
    try {
        res.json({
            message:"Delete a Plan",
            success:true,
            data:null
        })
    } catch  {
        res.json({
            message:"Something Went Worng ",
            success:false,
            data:null
        })
    }
}