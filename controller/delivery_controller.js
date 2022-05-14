const deliveryBoy = require("../model/deliveryBoy_model")
exports.createDeliveryBoy = async(req,res)=>{
    const result = await deliveryBoy.create(req.body)
    try {
        res.json({
        message:"create a Delivery Boy Details",
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
exports.getDeliveryBoy = async(req,res)=>{
    const result = await deliveryBoy.find()
    try {
        res.json({
            count:result.length,
        message:"get a Delivery Boy Details",
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
exports.deleteDeliveryBoy = async(req,res)=>{
    const result = await deliveryBoy.findByIdAndDelete(req.params.id)
    try {
        res.json({
        message:"delete a Delivery Boy Details",
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
exports.updateDeliveryBoy = async(req,res)=>{
    const result = await deliveryBoy.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,});
    try {
        res.json({
        message:"Update a Delivery Boy Details",
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