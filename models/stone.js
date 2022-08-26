const mongoose = require('mongoose');

const stoneSchema = new mongoose.Schema ({
    name: String,
    description: String,
    img: String,
    color: String,
},{ timestamps: true });

module.exports = mongoose.model('Stone', stoneSchema);