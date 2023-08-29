 const notfound = (req,res,next)=>{
    const err = `NOT FOUND -${req.originalUrl}`   
    res.status(303).json({
        message : err
    }) 
    next(err)
}

module.exports = { notfound }