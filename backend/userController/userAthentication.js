const User = require("../models/userModel");


const SignUp = async (req,res) =>{
    
    const { name , password , email , pic} = req.body ;
    const userExist =  await User.findOne({email})
    
    if(userExist){
       
        throw new Error("user already existed")
    }
    try{
        const user = await User.create({ name , password , email , pic })
        if(user){
        
            res.status(202).json({
              name :  name , 
              password :  password,
               id : user._id,
               email : email
            })
        }
        else{
           throw new Error("unable to create user account")
        }
    }
    catch(err){
        throw new Error("issue with login ")
    }
    
}
const Login = async (req,res)=>{

    const {email , password }= req.body ;   
    try{
        const user =await User.findOne({email})
       if(user && (user.password == password)){
        res.status(202).json({
            name : user.name,
            email,
            password,   
        })
    }else{
        res.status(303).json({err : "user and password are mismatching" })
         // throw new Error("user not existed")
        
    }
    }
    catch(err){
        res.status(303).json({
            err : "cannot able to create user account"
        })
        
       //  throw new Error("cannot able to create user account")
    }
}
    
module.exports = { SignUp , Login }