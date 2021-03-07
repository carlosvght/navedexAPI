const naverModel = require('../model/naver')

const create = async(req, res, next) => {
  try {
    const userReqBody = req.body
    const name = req.body.name
    const birthdate = req.body.birthdate
    const admissionDate = req.body.admissionDate
    const jobRole = req.body.jobRole
    const naverObjectToCreate = {
      name,
      birthdate,
      admissionDate,
      jobRole
    }
    const naver = await naverModel.create(naverObjectToCreate)
    res.status(201).json(naver)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const find = async(req, res, next) => {
  try {
    const naverFind = await naverModel.find({_id:req.params.id})
    res.status(201).json(naverFind)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const update = async(req, res, next) => {
  try {
    const query = {_id:req.params.id}
    const naverReqBody = req.body
    const name = req.body.name
    const birthdate = req.body.birthdate
    const admissionDate = req.body.admissionDate
    const jobRole = req.body.jobRole
    const naverObjectAttributesToUpdate = {
      name,
      birthdate,
      admissionDate,
      jobRole
    }
    const updatenaver = await naverModel.findByIdAndUpdate(query, naverObjectAttributesToUpdate)
    res.status(201).json(updatenaver)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const objectModuleToExports = {
  create,
  find,
  update
}

module.exports = objectModuleToExports