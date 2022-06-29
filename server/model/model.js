let mongoose = require('mongoose')

let itemSchema = new mongoose.Schema ({
    item: {
        type: String,
        require: true
    }
})

const item = mongoose.model('item', itemSchema)
module.exports = item