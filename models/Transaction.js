const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, "Please enter some text"],
    },
    amount: {
        type: Number,
        required: [true, "Enter some number(-ve from expense +ve for income)"],
    },
    creationDate: {
        type: Date,
        default: Date.now,
    },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
