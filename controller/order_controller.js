const order =require("../model/order_model")
exports.createOrderDetails = async(req,res)=>{
const result = await order.create(req.body)
try {
    res.json({
        message:"Create a Order Details",
        success:true,
        data:result
    })
} catch  {
    res.json({
     message:"Something went Worng",
    success:false,
    data:null
    })
}
}
exports.getOrderDetails = async(req,res)=>{
    const result = await order.find()
    try {
        res.json({
            count:result.length,
            message:"get a Order details",
            success:true,
            data:result
        })
    } catch  {
        res.json({
         message:"Something went Worng",
        success:false,
        data:null
        })
    }
    }
    exports.deleteOrderDetails = async(req,res)=>{
        const result = await order.findByIdAndDelete(req.params.id)
        try {
            res.json({
                message:"Delete a Order Details",
                success:true,
                data:null
            })
        } catch  {
            res.json({
             message:"Something went Worng",
            success:false,
            data:null
            })
        }
        }
        exports.getSingleOrderDetails = async(req,res)=>{
            const result = await order.findById(req.params.id)
            try {
                res.json({
                    message:"get a Single Order Details",
                    success:true,
                    data:result
                })
            } catch  {
                res.json({
                 message:"Something went Worng",
                success:false,
                data:null
                })
            }
            }