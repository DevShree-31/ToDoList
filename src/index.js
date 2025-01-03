const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const serverConfig = require("./config/server-config");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);


mongoose.connect(serverConfig.CONNECTION).then(
  ()=>app.listen(serverConfig.PORT,async()=>{
    console.log(`Connection established at port ${serverConfig.PORT}`)
  }))
  .catch((error)=>console.log(error.message));
