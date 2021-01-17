const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    nameL: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: 0,
    },
    quantity: String,
    isComplete: {
        type: Boolean,
        default: false
    }

})

const item = model('suggestion', itemSchema)
module.exports = item;