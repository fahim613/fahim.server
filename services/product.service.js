 
const Product = require("../model/Product")
// get service data 
exports.getProductService = async () => {
    const result = await Product.find().sort({createdAt:-1})
    const pr = await Product.find({ price: { $gte: 5000 } })
 
    const discountedProducts = pr.map(product => {
      const discountedPrice = product.price * 0.9; // Applying a 10% discount
      return { ...product.toObject(), price: discountedPrice };
    });
    
    // console.log(discountedProducts);
     
    return {
        result,
        discountedProducts
        
    };
}
// get product by using id 
exports.getProductServiceById = async (productId) => {
    const result = await Product.findOne({ _id: productId });
    return result;
}
// create service data 
exports.createProductService = async (data,img) => {
    let result;
        result = await Product.create({...data,pic:'http://localhost:5000/'+img.path});
     
    return result;
}
 
exports.deleteProductByIdService = async (productId) => {
  
    const result = await Product.deleteOne({ _id: productId });
    return result;
}
   