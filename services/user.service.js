 
const User = require("../model/User")

exports.signupService =async (userData)=>{
  
    const user = await User.create(userData);
    
    return user;
}
exports.findUserByEmail =async (email)=>{
    
   return await User.findOne({email})
}
exports.makeAdmin =async (email)=>{
  const result = await User.updateOne({email:email},{$set:{role:"seller"}})

 return result;
}
exports.findUserByToken =async (token)=>{
   
  const result = await User.findOne({confirmationToken:token})
 
  return result;
 }
 
exports.sellerGetService =async (token)=>{
   
  const result = await User.find( {})
 
  return result;
 }
 
 exports.deleteUserIdService = async (id) => {
  
  const result = await User.deleteOne({ _id: id });
  return result;
}
