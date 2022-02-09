const fs = require("fs");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const colors = require('colors');

// Load env vars
dotenv.config({ path: './config/config.env' });

// model import
const Product = require('./src/models/productModel');

mongoose.connect(process.env.MONGO_URI,{

})

// read files

const products = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/productData.json`,'utf-8')
);


// Import into DB
const importData = async () => {
    try {
      await Product.create(products);
      console.log('Data Imported...'.green.inverse);
      process.exit();
    } catch (err) {
      console.error(err);
    }
  };
  
  // Delete data
  const deleteData = async () => {
    try {
      await Product.deleteMany();
      console.log('Data Destroyed...'.red.inverse);
      process.exit();
    } catch (err) {
      console.error(err);
    }
  };
  
  if (process.argv[2] === '-i') {
    importData();
  } else if (process.argv[2] === '-d') {
    deleteData();
  }
  