const product = require("../model/product_model");
exports.addProduct = async (req, res) => {
  try {
    const result = await product.create(req.body);
    res.json({
      success: true,
      message: "prodcut added",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Error ${error}`,
    });
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    const result = await product.find();
    res.json({
      count: result.length,
      success: true,
      message: "All prodcuts",
      data:result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Error ${error}`,
    });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const result = await product.findById(req.params.id);
    res.json({
     
      success: true,
      message: "get Single Product",
      data:result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Error ${error}`,
    });
  }
};
exports.deleteProduct = async (req, res) => {
    try {
      const { xx } = req.params;
      console.log(xx);
      const result = await product.findByIdAndDelete(xx);
      res.json({
        success: true,
        message: "Delete Product",
    data:null
      });
    } catch (error) {
      res.json({
        success: false,
        message: `Error ${error}`,
      });
    }
  };