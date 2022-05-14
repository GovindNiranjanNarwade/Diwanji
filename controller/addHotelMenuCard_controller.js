const hotelMenu = require("../model/AddHotelMenuCard_model")
exports.CreateAddMenuCard = async (req,res)=> {
    const result = await hotelMenu.create(req.body)
    try {
        res.json({
            message:"create a Hotel Munu Card",
            success:"true",
            data:result
            })
    } catch  {
        res.json({
            message:"Something went worng "+{error} ,
            success:"false",
            data:null
            })
    }
}
exports.getMenuCard = async (req,res)=> {
    const result = await hotelMenu.find()
    try {
        res.json({
            message:"get a Hotel Menu Card",
            success:"true",
            data:result
            })
    } catch  {
        res.json({
            message:"Something went worng "+{error} ,
            success:"false",
            data:null
            })
    }
}
exports.DeleteMenuCard = async (req,res)=> {
    const result = await hotelMenu.findByIdAndDelete(req.params.id)
    try {
        res.json({
            message:"Delete a Hotel Menu Card",
            success:"true",
            data:result
            })
    } catch  {
        res.json({
            message:"Something went worng "+{error} ,
            success:"false",
            data:null
            })
    }
}
exports.updateMenuCard=async(req,res)=>{
    const result = await hotelMenu.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,});
    try {
        res.json({
        message:"update a Menu card",
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