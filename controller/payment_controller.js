const Razorpay = require("razorpay");
const crypto = require("crypto");
const product = require("../model/product_model");
const { sendSms } = require("../utils/sms");
exports.payment = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_ID,
      key_secret: process.env.RAZORPAY_KEY,
    });

    // console.log(req.body);

    // 6229d28f54e2aba9c0877956
    // 622c68c6c26fce070403eb76
    const result = await product
      .find({
        _id: {
          $in: [
            "6229d28f54e2aba9c0877956",
            "622c68c6c26fce070403eb76",
          ],
        },
      })
      
   console.log(result);
    const option = {
      // amount: req.body.amount * 100,
      amount: req.body.Price,
      currency: "INR",
    };

    const order = await instance.order.create(option);

    if (!order) {
      return res.json({
        success: false,
        message: "error unable to process payment",
      });
    }
    sendSms(req.body.number, "order palced");
    res.json({
      success: true,
      message: "payment success",
      order,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "error " + error,
    });
  }
};
exports.verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      orderCreationId,
    } = req.body;

    const shasum = crypto.createHmac(
      "sha256",
      process.env.RAZORPAY_KEY
    );
    shasum.update(
      `${orderCreationId}|${razorpay_payment_id}`
    );
    const digest = shasum.digest("hex");
    if (digest !== razorpay_signature) {
      return res.json({
        success: false,
        error: "Something Went worng",
      });
    }

    // db entry
    res.json({
      success: true,
      message: "payment Success",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    res.json({
      success: false,
      error: "" + error,
    });
  }
};

