const userModel = require('../model/user')
const crypto = require('crypto')

const create = async(req, res, next) => {
  try {
    const userReqBody = req.body
    const email = userReqBody.email
    const password = userReqBody.password
    const userObjectToCreate = {
      email, 
      password
    }

    const newUser = new userModel(userObjectToCreate)
    newUser.generateHashpass(userObjectToCreate.password)
    const user = await userModel.create(newUser)
    res.status(201).json(user)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const findAllUserNavers = async(req, res, next) => {
  try {
    const findAllNavers = await userModel.find({_id:req.params.id}).populate('navers')
    res.status(200).json(findAllNavers)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const find = async(req, res, next) => {
  try {
    const findUser = await userModel.find({_id:req.params.id})
    res.status(200).json(findUser)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const update = async(req, res, next) => {
  try {
    const query = {_id:req.params.id}
    const userReqBody = req.body
    const email = userReqBody.email
    const password = userReqBody.password

    const newHashPass = (passInput) => {
      const salt = crypto.randomBytes(64).toString('hex')
      const hash = crypto.pbkdf2Sync(passInput, salt, 100000, 512, 'sha512').toString('hex')
      return { newSalt: salt, newHash: hash }
    }
    
    const newUserPass = newHashPass(password)
    const updateAttributes = { email: email,  password: { salt: newUserPass.newSalt, hash: newUserPass.newHash }}
    const updateUser = await userModel.findByIdAndUpdate(query, updateAttributes)
    res.status(200).json({ message: 'User updated'}) 
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const remove = async(req, res, next) => {
  try {
    const deleteUser = await userModel.findByIdAndDelete({_id:req.params.id})
    res.status(200).json(deleteUser)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)  
  }
}

const objectModuleToExports = {
  create,
  find,
  findAllUserNavers,
  update, 
  remove
}

module.exports = objectModuleToExports