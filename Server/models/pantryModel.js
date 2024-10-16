const mongoose = require('mongoose')

const pantrySchema = new mongoose.Schema({
    itemName:{
        type: String,
        required: [true, 'Item Name is required']
    },
    quantity:{
        type: Number
    },
    glutenFree:{
        isGlutenFree: Boolean
    }
})

module.exports = mongoose.model('pantry', pantrySchema)