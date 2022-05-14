const review = require("../model/review_model")
exports.createReviewDetails = async(req,res)=>{
    const result = await review.create(req.body)
    try {
        res.json({
        message:"create a review Details",
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
exports.getReviewDetails = async(req,res)=>{
    const result = await review.find()
    try {
        res.json({
        message:"get a review Details",
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
exports.deleteReviewDetails = async(req,res)=>{
    const result = await review.findByIdAndDelete(req.params.id)
    try {
        res.json({
        message:"delete a review Details",
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