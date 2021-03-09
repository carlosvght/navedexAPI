const JwtController = require('../../JsonWebToken/controller/jwt')
const userModel = require('../../User/model/user')

const userLogin = async (req, res, next) => {
  try {
    const userReqBody = req.body
    const email = userReqBody.email
    const password = userReqBody.password
    
    const findUser = await userModel.findOne({ email }, 'email password')
    
    if(findUser) {
      const userPassValid = findUser.validHashpass(password)
      
      if(userPassValid) {
        const payload = { email: findUser.email }
        const token = JwtController.signJwt(payload)
        
        return res.status(200).json({ message: 'User founded!', token: token })
        
      } else {
        return res.status(404).json({ message: 'User not found! Please check your email and/or password.' })
      }
      
    } else {
      return res.status(404).json({ message: 'User not found! Please check your email and/or password.' })
    }
    
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

const objectModuleToExports = {
  userLogin
}

module.exports = objectModuleToExports