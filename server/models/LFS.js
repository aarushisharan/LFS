const mongoose =require('mongoose')



const LFSSchema =new mongoose.Schema({
    name: String,
    email:String,
    password:String
})


const LFSModel = mongoose.model("Users",LFSSchema)
module.exports = LFSModel



