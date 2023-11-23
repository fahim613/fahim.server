const {
  signupService,
  loginService,
  findUserByEmail, 
  findUserByToken,
  sellerGetService,
  makeAdmin,
  deleteUserIdService}
  = require("../services/user.service");
const { generateToken } = require("../utils/token");
 
// get all product
const bcrypt = require('bcryptjs');
module.exports.signup = async (req, res) => {
  try {
    
    const user = await signupService(req.body);
    // await user.save({validateBeforeSave:false});
    // const user = await findUserByEmail(email);
    console.log(user)
    const token = generateToken(user);
   
    res.status(200).json({
      status: "succesfful",
      message: "get user data",
      result: token,
      role:user.role
    });
  }
  catch (error) {
    
    res.status(500).json({
      status: "authentiacation failed",
      message: "signup is failed",
      result: error.message
    })
  }
}
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

  
    const user = await findUserByEmail(email);

  
    const isPasswordValid = user.comparePassword(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Password is not correct",
      });
    }

    const token = generateToken(user);
 
    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "Successfully logged in",
      result :token,
      role:user?.role
    });
  } catch (error) {
   
    res.status(500).json({
      status: "fail",
      
    });
  }
};

module.exports.sellerGet= async (req, res) => {
  try {
   
    const result = await sellerGetService()
   
    res.status(200).json({
      status: "succesfful", 
      message: "get user data",
      data: result
    });
  }
  catch (error) {
    res.status(500).json({
      status: "authentiacation failed",
      message: "signup is failed",
      result: error.message
    })
  }
}
 module.exports.sellerDelete= async (req, res) => {
  try {
    console.log(req.params.id,"delete is comming")
    const result = await deleteUserIdService(req.params.id);
   
    res.status(200).json({
      status: "succesfful", 
      message: "get user data",
      result: result
    });
  }
  catch (error) {
    res.status(500).json({
      status: "authentiacation failed",
      message: "signup is failed",
      result: error.message
    })
  }
}
 
module.exports.seller= async (req, res) => {
  try {
    
    const result = await makeAdmin(req.body?.email);
   
    res.status(200).json({
      status: "succesfful", 
      message: "get user data",
      result: result
    });
  }
  catch (error) {
    res.status(500).json({
      status: "authentiacation failed",
      message: "signup is failed",
      result: error.message
    })
  }
}
 
module.exports.getMe= async (req, res) => {
  try {
    //    console.log(req.body);
    const result = await findUserByEmail(req.user?.email);
    const {password:pwd,...others} = result.toObject();
    res.status(200).json({
      status: "succesfful",
      message: "get user data",
      result: others
    });
  }
  catch (error) {
    res.status(500).json({
      status: "authentiacation failed",
      message: "signup is failed",
      result: error.message
    })
  }
}
 