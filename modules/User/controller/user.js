const userModel = require('../model/user')

const create = async(req, res, next) => {
  try {
    const userReqBody = req.body
    const email = userReqBody.email
    const password = userReqBody.password
    const userObjectToCreate = {
      email, 
      password
    }
    const user = await userModel.create(userObjectToCreate)
    res.status(201).json(user)
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
    const userObjectAttributesToUpdate = {
      email,
      password
    } 
    const updateUser = await userModel.findByIdAndUpdate(query, userObjectAttributesToUpdate)
    res.status(200).json(updateUser) 
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
  update, 
  remove
}

module.exports = objectModuleToExports