const { Schema, model } = require('mongoose');

const suggestionSchema = new Schema({
    nameL: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 0,
    },
})

const suggestion = model('suggestion', suggestionSchema)
module.exports = suggestion;