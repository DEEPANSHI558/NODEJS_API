const express =require("express");
const postController=require("../controllers/post");
const router=express.Router();


router.get("/",postController.getPosts);

module.exports=router;

// console.log("process",process);
// global is analogous to window 
// document is analogous to document
// now this is acting as a middleware 
// here we can check the request made can be fullfilled or not