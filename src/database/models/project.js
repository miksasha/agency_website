const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    pName: {
        type: String,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },

    photo: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    best: {
        type: Boolean,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);