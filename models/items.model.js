const mongoose = require('mongoose');
const Schema = mongoose.Schema
const itemSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item