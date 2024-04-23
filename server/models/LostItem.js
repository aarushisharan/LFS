const mongoose =require('mongoose')


const LostItemSchema = new mongoose.Schema({
    itemName: String, 
    brand: String,
    location: String,
    lostDate: Date,
    description: String,
    contact: String
});

const LostItemModel =mongoose.model("Lost Items", LostItemSchema)
module.exports= LostItemModel