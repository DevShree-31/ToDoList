const express = require("express");
const userRouter = require("./user-routes");
const { successResponse } = require("../../utils");
const taskRouter = require("./task-routes");

const router = express.Router();
router.use('/users',userRouter)
router.use('/tasks',taskRouter)
router.get('/', (req,res)=>{
    successResponse.data="API is live"
});

module.exports = router;
