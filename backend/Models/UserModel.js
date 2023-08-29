const mongoose = require("mongoose")

const user = mongoose.Schema({
    name : { type : String , trim : true },
    email : { type : String},
    password : { type : String },
    pic :  { type :String  , default : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}
},{
    timestamps : true
})

const User = mongoose.model("User", user)

module.exports = User ;