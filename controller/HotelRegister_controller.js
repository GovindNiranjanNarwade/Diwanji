const hotelRegistration = require("../model/hotelRegistration_model")
 bcrypt = require("bcryptjs")
exports.createHotelRegistration = async(req,res)=>{
    const result = await hotelRegistration.create({
        HotelOwnerName:req.body.HotelOwnerName,
        HotelOwnerEmail:req.body.HotelOwnerEmail,
        HotelOwnerPassword:bcrypt.hashSync(req.body.HotelOwnerPassword),
        HotelOwnerCity:req.body.HotelOwnerCity,
        HotelOwnerPincode:req.body.HotelOwnerPincode,
        HotelOwnerState:req.body.HotelOwnerState,
        HotelOwnerCountry:req.body.HotelOwnerCountry,
        HotelOwnerContact:req.body.HotelOwnerContact,
        otp:req.body.otp,
        Date:req.body.Date,
        file:req.body.file
    })
    try {
        res.json({
        message:"create a Hotel Registration Details",
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
exports.getHotelRegistration = async(req,res)=>{
    const result = await hotelRegistration.find()
    try {
        res.json({
            count:result.length,
        message:"get a Hotel Registration Details",
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
exports.DeleteHotelRegistration = async(req,res)=>{
    const result = await hotelRegistration.findByIdAndDelete(req.params.id)
    try {
        res.json({
        message:"Delete a Hotel Registration Details",
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
exports.getSingleHotelRegistration = async(req,res)=>{
    const result = await hotelRegistration.findOne(req.params.id)
    try {
        res.json({
        message:"Get a Single Hotel Registration Details",
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
exports.UpdateHotelRegistration = async(req,res)=>{
    const result = await hotelRegistration.findByIdAndUpdate(req.params.id,req.body,{  new: true,
        runValidators: true,})
    try {
        res.json({
        message:"Update a Hotel Registration Details",
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