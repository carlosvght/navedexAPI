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

const objectModuleToExports = {
  create
}

module.exports = objectModuleToExports