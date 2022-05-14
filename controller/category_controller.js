const category = require("../model/catagory_model")
const slugify = require("slugify")
exports.createCategory = async(req,res)=>{
    const result = await category.create({
        name:req.body.name,
        slug:slugify(req.body.name),
        parentId : req.body.parentId
    })

    try {
        res.json({
        message:"create a category details",
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
exports.getCategory = async(req,res)=>{
    const result = await category.find()

    try {
        res.json({
        message:"get a category Details",
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
exports.deleteCategory = async(req,res)=>{
    const result = await category.findByIdAndDelete(req.params.id)

    try {
        res.json({
        message:"get a delete Details",
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