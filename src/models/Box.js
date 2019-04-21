const mongoose = require('mongoose');

const Box = new mongoose.schema({
    title: {
        type: String,
        required: true,
    },
    files: []
}, {
        timestamps: true
    });

module.exports = mongoose.model('Box', Box);