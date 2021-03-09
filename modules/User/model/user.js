const mongoose = require('mongoose')
const Schema = mongoose.Schema

const crypto = require('crypto')

const userSchema = new Schema({
  email: String, 
  password: {
    salt: { type: String, required: true },
    hash: { type: String, required: true }
  },
  navers: [{ type: Schema.Types.ObjectId,
    ref: "Naver" 
  }]
})

userSchema.methods.generateHashpass = function (passInput) {
  this.password['salt'] = crypto.randomBytes(64).toString('hex')
  this.password['hash'] = crypto.pbkdf2Sync(passInput, this.password['salt'], 100000, 512, 'sha512').toString('hex')
}

userSchema.methods.validHashpass = function (passInput) {
  const hash = crypto.pbkdf2Sync(passInput, this.password['salt'], 100000, 512, 'sha512').toString('hex')
  return this.password['hash'] === hash
}

const user = mongoose.model('User', userSchema)

module.exports = user