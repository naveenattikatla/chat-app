const mongoose = require("mongoose")
const connection  = async() => {
     try {
         const result = await  mongoose.connect("mongodb+srv://Naveen:1234@cluster0.vhpwnrb.mongodb.net/?retryWrites=true&w=majority")
         console.log("db is connected")
     }
     catch(err){
        console.log(err)
     }

}
module.exports = connection 