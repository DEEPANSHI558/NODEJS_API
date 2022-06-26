exports.createPostValidator=(req,res,next)=>{
    // title
    req.check("title","Write a title").notEmpty();
    req.check("title","Title must ne between 4 to 150 charates").isLength({
        min:4,
        max:150
    });
      // body
      req.check("body","Write a body").notEmpty();
      req.check("body","Body must ne between 4 to 2000 charates").isLength({
          min:4,
          max:2000
      });
    //   check for errors
       const errors=req.validationErrors();//gives all the errors in the array
    //    if error show the first one as they happen
        if(errors){
            const firstError=errors.map(err=>err.msg)[0];//getting the first error
            return res.status(400).json({
                err:firstError
            });
        }
        // after this go to the next middlesware if error is found or not found
        next();
}