const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema ({
    name: String,
    description: String,
    img: String,
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);