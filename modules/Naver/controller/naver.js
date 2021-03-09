const naverModel = require('../model/naver')
const userModel = require('../../User/model/user')

const create = async(req, res, next) => {
  try {

    const naverReqBody = req.body
    const name = naverReqBody.name
    const birthdate = naverReqBody.birthdate
    const admissionDate = naverReqBody.admissionDate
    const jobRole = naverReqBody.jobRole
    const userId = req.decoded._id
    const naverObjectToCreate = {
      name,
      birthdate,
      admissionDate,
      jobRole,
      user: {
        _id: userId
      }
    }
    const newNaver = new naverModel(naverObjectToCreate)
    const savedNaver = await newNaver.save()
    const userNaver = await userModel.findByIdAndUpdate(userId, {
      $push: {
        navers: {
          _id: savedNaver._id,
          name: savedNaver.name,
          birthdate: savedNaver.birthdate,
          admissionDate: savedNaver.admissionDate,
          jobRole: savedNaver.jobRole
        }
      }
    })

    res.status(201).json(savedNaver)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const find = async(req, res, next) => {
  try {
    const naverFind = await naverModel.find({_id:req.params.id})
    res.status(200).json(naverFind)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const findAllNaverProjects = async(req, res, next) => {
  try {
    const findAllProjects = await naverModel.find({_id:req.params.id}).populate("projects")
    res.status(200).json(findAllProjects)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const update = async(req, res, next) => {
  try {
    const query = {_id:req.params.id}
    const naverReqBody = req.body
    const name = naverReqBody.name
    const birthdate = naverReqBody.birthdate
    const admissionDate = naverReqBody.admissionDate
    const jobRole = naverReqBody.jobRole

    const naverObjectAttributesToUpdate = {
      name,
      birthdate,
      admissionDate,
      jobRole
    }
    const updatenaver = await naverModel.findByIdAndUpdate(query, naverObjectAttributesToUpdate)
    res.status(200).json(updatenaver)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const remove = async(req, res, next) => {
  try {
    const deleteNaver = await naverModel.findByIdAndDelete({_id:req.params.id})
    res.status(200).json(deleteNaver)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const objectModuleToExports = {
  create,
  find,
  findAllNaverProjects,
  update,
  remove
}
module.exports = objectModuleToExports