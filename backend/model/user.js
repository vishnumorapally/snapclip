const mongoose = require("mongoose")

const UserModel = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    data: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set to the current date and time
        index: { expires: '2d' },
    }
})

module.exports = mongoose.model("clipboard", UserModel)