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

const objectModuleToExports = {
  create
}

module.exports = objectModuleToExports