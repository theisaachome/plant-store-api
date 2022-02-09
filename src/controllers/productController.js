
const asyncHandler = require('../middleware/asyncHandler');
const Product = require('../models/productModel');

exports.getAllProducts=asyncHandler(async(req,res,next)=>{
    const products = await Product.find();
    res.status(200).json({
        success:true,
        count:products.length,
        data:products
    });
})