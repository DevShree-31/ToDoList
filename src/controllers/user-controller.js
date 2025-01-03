const {errorResponse,successResponse}=require('../utils/index')
const {StatusCodes}=require('http-status-codes')
const User=require('../models/user.js')
const bcrypt=require('bcrypt')
const createUser=async(req,res)=>{
    const {name,email,password}=req.body
    //validation
    if(!name||!email||!password){
        errorResponse.error="All fields are required"
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    //checking whether user already exist or not
    try {
        const user=await User.findOne({email})
        if(user){
            errorResponse.error="User already exists"
            return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)  
        }
    } catch (error) {
        errorResponse.error="Error while creating a user"
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
    //hashed password
    const hashedPassword=await bcrypt.hash(password,10);
    try {
        let user=await User.create({name,email,password:hashedPassword})
        successResponse.message="User created successfully"
        successResponse.data=user
        return res.status(StatusCodes.CREATED).json(successResponse)
    } catch (error) {
        errorResponse.error="Error while creating a user"
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}
module.exports={createUser}