const hotelInformation = require("../model/AddHotelInformation_model");
exports.addHotelInformation = async (req, res) => {
  try {
    const result = await hotelInformation.create(req.body);
    res.json({
      success: true,
      message:  "create Hotel Information Details",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Error ${error}`,
    });
  }
};
exports.getHotelInformation = async (req, res) => {
    try {
      const result = await hotelInformation.find();
      res.json({
        success: true,
        message: "get Hotel Information Details",
        result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: `Error ${error}`,
      });
    }
  };
  exports.deleteHotelInformation = async (req, res) => {
    try {
      const result = await hotelInformation.findByIdAndDelete(req.params.id);
      res.json({
        success: true,
        message: "delete Hotel Information Details",
        data:null,
      });
    } catch (error) {
      res.json({
        success: false,
        message: `Error ${error}`,
      });
    }   
  };
  exports.getSingleHotelInformation = async (req, res) => {
    try {
      const result = await hotelInformation.findById(req.params.id);
      res.json({
        success: true,
        message: "get a Single Hotel Information Details",
        data:result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: `Error ${error}`,
      });
    }   
  };
  exports.SearchHotelByName = async (req, res) => {
    try {
      const result = await hotelInformation.find(req.body.HotelName);
      res.json({
        success: true,
        message: "get a  Hotel Information Details By Hotel Name",
        data:result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: `Error ${error}`,
      });
    }   
  };

  exports.updateHotelInformation = async (req, res) => {
    try {
      const result = await hotelInformation.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators: true,});
      res.json({
        success: true,
        message: "get a Single Hotel Information Details",
        data:result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: `Error ${error}`,
      });
    }   
  };