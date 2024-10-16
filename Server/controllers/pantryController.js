const bcrypt = require('bcryptjs')
const Pantry = require('../models/pantryModel') // pulls in schema for DB use

//create new Pantry Item
async function createItem(req, res){
    try {
        const newPantry = new Pantry({...req.body})
        const savedPantry = await newPantry.save()
        res.json({message: "Item Created", payload: savedPantry})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
}

//get all pantry items
async function getAllItems(req, res){
    try {
        const foundItems = await Pantry.find({})
        res.json({message: "Items Found", payload: foundItems})
    } catch (error) {
       res.status(500).json({message: "Error", error: error}) 
    }
}

//get in-stock items
// getInStockItems: function(quantity, callback){
//     if(Pantry.quantity >= 1){
//         Payload =>{
//         callback(null, Payload)
//     } 

//update pantry item
async function updateItemByID(req, res){
    try {
        const updatedPantry = await Pantry.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
        res.json({message: "Pantry Item Updated", payload: updatedPantry})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
}

//delete a pantry item
async function deleteItemByID(req, res){
    try {
        const deleteItem = await Pantry.findByIdAndDelete(req.params.id)
        res.json({message: "Item Deleted", payload: deleteItem})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
}

module.exports = {
    createItem,
    getAllItems,
    updateItemByID,
    deleteItemByID
}