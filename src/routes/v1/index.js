const express = require("express");

const { TaskController } = require("../../controllers");
const userRouter = require("./user-routes");

const router = express.Router();
router.use('/users',userRouter)
router.get("/", TaskController.info);

module.exports = router;
