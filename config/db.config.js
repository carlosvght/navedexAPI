const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/navedexAPI';

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  // autoReconnect: true,
  useCreateIndex: true,
  poolSize: 15,
  keepAlive: true,
  keepAliveInitialDelay: 270000
}

mongoose.connect(uri, options)
.then(() => {
  console.log('Mongodb Connected!')

  mongoose.connection.on('error', (err) => {
    console.log('mongoose connection on error ::;' , err)
  })
  mongoose.connection.on('reconnected', () => {
    console.log('Reconnected to MongoDB!')
  })
})
.catch((err) => {
  console.log('mongoose connection rejected promise ::; ', err)
  mongoose.disconnect()
})

module.exports = mongoose;