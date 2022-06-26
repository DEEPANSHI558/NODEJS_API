const express =require("express");
const postController=require("../controllers/post");
const router=express.Router();
const postValidator=require("../validator/post")


router.get("/",postController.getPosts);
router.post("/post",postValidator.createPostValidator,postController.createPost);
module.exports=router;

// console.log("process",process);
// global is analogous to window 
// document is analogous to document
// now this is acting as a middleware 
// here we can check the request made can be fullfilled or not