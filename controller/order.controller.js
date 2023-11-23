const {
    getOrderService,
    createOrderService,
    deleteOrderByIdService,
    getOrderServiceById,
  } = require("../services/order.service");
  // get all Order
  exports.getOrder = async (req, res) => {
    try {
      
      const result = await getOrderService();
      res.json({
        status: "succesfful",
        message: "get data",
        page:result.page,
        count: result.totalOrder,
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
  // get Order by id 
  exports.getOrderById = async (req, res) => {
    try {
       const {id} = req.params;
      const result = await getOrderServiceById(id);
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
  // create Order 
  exports.createOrder = async (req, res) => {
    try {
    
      const result = await createOrderService(req.body,req.file);
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
  
  // delete Order 
  exports.deleteOrderById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await deleteOrderByIdService(id);
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
 
 