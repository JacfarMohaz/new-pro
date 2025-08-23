const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    custName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["unpaid", "paid"],
        default: "unpaid"
    },
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("order", orderSchema)