const { Schema, model } = require('mongoose');

const bucketSchema = new Schema({
    nameL: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: 0,
    },
    items: {
        type: Schema.Types.ObjectId,
        ref: 'item',
    }

}, { timestamps: true }

)

const bucket = model('suggestion', bucketSchema)
module.exports = bucket;