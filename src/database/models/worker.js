const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    wName: {
        type: String,
        required: true
    },
    wSurname: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    textComment: {
        type: String,
        required: true
    },
    photo_big_Name: {
        type: String,
        required: true
    },
    photo_small_Name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    isChosen: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Worker', workerSchema);