const mongoose =require('mongoose')



const FoundItemSchema = new mongoose.Schema({
    itemName:String,
    brand:String,
    location:String,
    foundDate:Date,
    contact:String

});

const FoundItemModel =mongoose.model("Found Items", FoundItemSchema)
module.exports= FoundItemModel