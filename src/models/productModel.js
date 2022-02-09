
const mongoose = require('mongoose');

const ProductSchema=new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a product title.'],
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
      },
    price:  {
        type: Number,
        required: [true, 'Please add a tuition cost'],
        default:0.0,
      },
    company: {
        type:String,
        required:[true,'Please add manufacturer']
    },
    description: {
        type:String,
        required:[true,'Please add manufacturer'],
        maxlength: [500, 'Name can not be more than 500 characters']
    },
    image:{
        type:String,
        default:null,
    },
    featured: {
        type:Boolean,
        required:[true],
        default:false,
    },
    freeShipping: {
        type:Boolean,
        required:[true],
        default:false,
    },
})

module.exports = mongoose.model('Product',ProductSchema);