const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  averageGrade: {
    type: Number,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);