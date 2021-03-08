const projectModel = require('../model/project')
const naverModel = require('../../Naver/model/naver')

const create = async(req, res, next) => {
  try {
    const projectReqBody = req.body
    const name = projectReqBody.name
    const naverId = req.params.naverId

    const projectObjectToCreate = {
      name, naver: {
        _id: naverId
      }
    }
    const newProject = new projectModel(projectObjectToCreate)
    const savedProject = await newProject.save()
    const naverProject = await naverModel.findByIdAndUpdate(naverId, {
      $push: {
        projects: {
          _id: savedProject.id,
          name: savedProject.name
        }
      }
    })
    res.status(201).json(savedProject)
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

const remove = async(req, res, next) => {
  try {
    const deleteProject = await projectModel.findByIdAndDelete({_id:req.params.id})
    res.status(200).json(deleteProject)
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