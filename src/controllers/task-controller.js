const { StatusCodes } = require("http-status-codes");
const {successResponse}=require('../utils/index.js')
const info = (req, res) => {
  successResponse.data="TO DO List API is Live"
  return res.status(StatusCodes.OK).json(successResponse);
};

module.exports = {
  info,
};
