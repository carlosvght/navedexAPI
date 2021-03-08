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

const update = async(req, res, next) => {
  try {
    const query = {_id:req.params.id}
    const projectReqBody = req.body 
    const name = req.body.name
    const projectObjectAttributesToUpdate = {
      name
    }
    const updateProject = await projectModel.findByIdAndUpdate(query, projectObjectAttributesToUpdate)
    res.status(200).json(updateProject)
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