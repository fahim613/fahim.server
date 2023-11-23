const Order = require("../model/Order");
// get service data 
exports.getOrderService = async ( ) => {
    const result = await Order.find()
    return {
        result,  
    };
}
// create service data 
exports.createOrderService = async (data) => {
    let result;
        result = await Order.create(data);
    return result;
}
// create delete Order by id 
exports.deleteOrderByIdService = async (OrderId) => {
    const result = await Order.deleteOne({ _id: OrderId });
    return result;
}
 