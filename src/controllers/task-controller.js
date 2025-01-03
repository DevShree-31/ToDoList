const { StatusCodes } = require("http-status-codes");
const {successResponse,errorResponse}=require('../utils/index.js');
const Task = require("../models/task.js");

const createTask=async(req,res)=>{
    try {
        const task=await Task.create({
            title:req.body.title,
            description:req.body.description,
            status:req.body.status
        })
        successResponse.data=task
        return res.status(StatusCodes.CREATED).json(successResponse)
    } catch (error) {
        errorResponse.error="Cannot create a task an error occurred"
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}
const getTasks=async(req,res)=>{
    try {
        const tasks=await Task.find()
    successResponse.data=tasks
    return res.status(StatusCodes.OK).json(successResponse)
    } catch (error) {
        errorResponse.error="Unable to get all tasks"
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }

}
const getTask=async(req,res)=>{
    try {
        const taskID=req.params.id
        const task=await Task.findById(taskID)
        successResponse.data=task
        return res.status(StatusCodes.OK).json(successResponse)
    } catch (error) {
        errorResponse.error="Cannot retrieve task given the id"
        return res.status(StatusCodes.NOT_FOUND).json(errorResponse)
    }
}
const updateTask=async(req,res)=>{
    const taskID=req.params.id
    try {
        const task=Task.findById(taskID)
        if(!task){
            errorResponse.error="Cannot update task given the id"
            return res.status(StatusCodes.NOT_FOUND).json(errorResponse)
        }
        const updatedTask=await Task.findByIdAndUpdate(taskID,req.body,{new:true})
        successResponse.data=updatedTask
        return res.status(StatusCodes.OK).json(successResponse)
    } catch (error) {
        errorResponse.error="Cannot update the task due to internal server error"
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}
module.exports = {createTask,getTasks,getTask,updateTask};
