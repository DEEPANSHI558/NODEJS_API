exports.getPosts=(req,res)=>{
    res.json({
        posts:[
            {title:"first Post"},{title:"second post"}
        ]
    });
};