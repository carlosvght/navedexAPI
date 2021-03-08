const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  name: String,
    naver: { type: Schema.Types.ObjectId,
      ref: "Naver"
  }
})

const project = mongoose.model('Project', projectSchema)

module.exports = project