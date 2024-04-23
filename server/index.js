const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const LFSModel =require('./models/LFS')
const LostItemModel = require("./models/LostItem");
const FoundItemModel = require("./models/FoundItem");



const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/LFS")

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    LFSModel.findOne({email:email})
    .then(user=> {
        if(user)
        {
            if(user.password===password)
            {
                res.json("Success")
            }
            else
            {
                res.json("The password is incorrect")
            }
        }
        else
        {
            res.json("No record existed")
        }
    })
})

app.post('/register',(req,res)=>{
    LFSModel.create(req.body)
    .then(Users=> res.json(Users))
    .catch(err => res.json(err))

})

app.post("/lostform", (req, res) => {
    // Extract data from request body
    const { itemName, brand, location, lostDate, description, contact } = req.body;
    LostItemModel.create(req.body)
    .then(lostitems=> res.json(lostitems))
    .catch(err => res.json(err))
});

app.get('/lostitems',(req,res)=>{
    LostItemModel.find()
    .then(lostitems=> res.json(lostitems))
    .catch(err => res.json(err))
})

app.post("/deleteitem", async (req, res) => {
    const { itemid } = req.body;
    try {
        // Delete the item based on its ID using the Mongoose model
        const result = await LostItemModel.deleteOne({ _id: itemid });
        
        // Check if the item was deleted successfully
        if (result.deletedCount === 1) {
            res.send({ status: "Ok", data: "Deleted" });
        } else {
            res.status(404).send({ status: "Error", message: "Item not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "Error", message: "Internal server error" });
    }
});



app.post("/foundform", (req, res) => {
    // Extract data from request body
    const { itemName, brand, location, foundDate, contact } = req.body;
    FoundItemModel.create(req.body)
    .then(founditems=> res.json(founditems))
    .catch(err => res.json(err))
});
app.get('/founditems',(req,res)=>{
    FoundItemModel.find()
    .then(founditems=> res.json(founditems))
    .catch(err => res.json(err))
})

app.post("/deletefounditem", async (req, res) => {
    const { itemId } = req.body;
    try {
        // Delete the found item based on its ID using the Mongoose model
        const result = await FoundItemModel.deleteOne({ _id: itemId });

        // Check if the item was deleted successfully
        if (result.deletedCount === 1) {
            res.status(200).json({ success: true, message: "Item deleted successfully" });
        } else {
            res.status(404).json({ success: false, message: "Item not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});






app.listen(3001, ()=>{
    console.log("Server is running")
})