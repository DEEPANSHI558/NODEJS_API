const express=require("express");
const app=express() //invoke the express object
const morgan =require('morgan');
const mongoose=require("mongoose");

const dotenv=require('dotenv');
dotenv.config();
// we have to do three steps
mongoose.connect(process.env.MONGO_URI).then(()=>console.log('connected'))
.catch(e=>console.log(e));



app.use(morgan("dev"));
const postRoutes=require('./routes/post');// we need full path because here we a
app.get("/",postRoutes);
// this is a simple server now we can use middleware here so that if a client wants to access a url if he has access to the url or not we can check that y we use this
 //this will print out the GET or POST request made by which IP address and the loading time of that page

app.listen(3000,()=>{
    console.log("Server is started on port 3000");
})
