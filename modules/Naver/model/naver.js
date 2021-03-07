const mongoose = require('mongoose')
const Schema = mongoose.Schema

const naverSchema = new Schema ({
  name: String,
  birthdate: Date,
  admissionDate: Date,
  jobRole: String
});

const naver = mongoose.model('Naver', naverSchema)

module.exports = naver