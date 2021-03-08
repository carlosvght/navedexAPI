const mongoose = require('mongoose')
const Schema = mongoose.Schema

const naverSchema = new Schema ({
  name: String,
  birthdate: Date,
  admissionDate: Date,
  jobRole: String,
  user: { type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const naver = mongoose.model('Naver', naverSchema)

module.exports = naver