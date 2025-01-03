const express=require("express");
const { TaskController } = require("../../controllers");
const authenticate=require('../../middlewares/authenticate')
const taskRouter=express.Router();

taskRouter.post('/',authenticate,TaskController.createTask)
taskRouter.get('/',TaskController.getTasks)
module.exports=taskRouter