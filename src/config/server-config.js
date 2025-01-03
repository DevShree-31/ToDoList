const dotenv = require("dotenv");

dotenv.config();
module.exports = {
  PORT: process.env.PORT || 5000,
  CONNECTION:process.env.MONGO_KEY
};
