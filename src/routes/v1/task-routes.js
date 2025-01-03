const express=require("express");
const { TaskController } = require("../../controllers");
const authenticate=require('../../middlewares/authenticate')
const taskRouter=express.Router();

taskRouter.post('/',authenticate,TaskController.createTask)
taskRouter.get('/',TaskController.getTasks)
taskRouter.get('/:id',TaskController.getTask)
taskRouter.put('/:id',authenticate,TaskController.updateTask)
taskRouter.delete('/:id',authenticate,TaskController.deleteTask)
module.exports=taskRouter