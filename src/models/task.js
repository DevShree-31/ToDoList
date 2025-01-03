const mongoose=require("mongoose")

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"Pending",
        enum:["Pending","In-Progress","Completed"]
    }
})
const Task=mongoose.model('Task',taskSchema)
module.exports=Task