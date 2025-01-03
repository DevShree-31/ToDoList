const express=require("express");
const { UserController } = require("../../controllers");

const userRouter=express.Router();

userRouter.post('/register',UserController.createUser)
userRouter.post('/login',UserController.loginUser)
module.exports=userRouter