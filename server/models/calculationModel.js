const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
    num1: Number,
    num2: Number,
    operator: String,
    result: Number
}, { timestamps: true });

module.exports = mongoose.model('Calculation', calculationSchema);