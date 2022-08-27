const mongoose = require('mongoose');

const chakraSchema = new mongoose.Schema ({
    name: String,
    chakra: String,
    originChakra: String,
    description: String,
    img: String,
}, { timestamps: true });

module.exports = mongoose.model('Chakra', chakraSchema);