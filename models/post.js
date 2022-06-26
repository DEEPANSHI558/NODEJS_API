const mongoose=require('mongoose')

// schema 
const postschema=new mongoose.Schema(
   {
     title:{
        type:String,
        required:true,  
     },
     body:{
         type:String,
         required:true,
     }
   }
    
)
// model we have to create
module.exports=mongoose.model("Post",postschema);