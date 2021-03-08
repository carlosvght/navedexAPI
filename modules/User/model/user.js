const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: String, 
  password: String,
  navers: [{ type: Schema.Types.ObjectId,
    ref: "Naver" 
  }]
});

const user = mongoose.model('User', userSchema)

module.exports = user