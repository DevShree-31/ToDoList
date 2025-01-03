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
module.exports = {createTask,getTasks,getTask };
