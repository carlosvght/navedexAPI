const projectModel = require('../model/project')

const create = async(req, res, next) => {
  try {
    const projectReqBody = req.body
    const name = req.body.name
    const projectObjectToCreate = {
      name
    }
    const project = await projectModel.create(projectObjectToCreate)
    res.status(201).json(project)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const find = async(req, res, next) => {
  try {
    const findProject = await projectModel.find({_id:req.params.id})
    res.status(200).json(findProject)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const objectModuleToExports = {
  create,
  find
}

module.exports = objectModuleToExports