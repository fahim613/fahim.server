const {
  getProductService,
  createProductService,
  deleteProductByIdService,
  updateProductByIdService,
  getProductServiceById,
  bulkDeleteProductByIdService,
  bulkUpdateProductByIdService
} = require("../services/product.service");
// get all product
exports.getProduct = async (req, res) => {
  try {
  
    const result = await getProductService( );
    res.json({
      status: "succesfful",
      message: "get data",
      page:result.page,
       discount:result.discountedProducts,
      data: result.result
    });
  }
  catch (error) {
    res.status(400).json({
      status: "failed",
      message: "get data is failed",
      result: error.message
    })
  }
}
// get product by id 
exports.getProductById = async (req, res) => {
  try {

     const {id} = req.params;
    const result = await getProductServiceById(id);
    res.json({
      status: "succesfful",
      message: "get data",
      data:  result
    });
  }
  catch (error) {
    
    res.status(400).json({
      status: "failed",
      message: "get data is failed",
      result: error.message
    })
  }
}
// create product 
exports.createProduct = async (req, res) => {
  try {
   
    const result = await createProductService(req.body,req.file);
    res.status(200).json({
      status: "success",
      message: "insert data success",
      result: result
    });
  }
  catch (error) {
   
    res.status(400).json({
      status: "failed",
      message: "insert data is failed",
      result: error.message
    })
  }
}
  
 

// delete product 
exports.deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteProductByIdService(id);
   
     
    res.json({
      status: "success",
      message: "data delete successfull",
      result: result
    });
  }
  catch (error) {
    res.status(400).json({
      status: "failed",
      message: "not delete data",
      result: error.message
    })
  }
} 
 