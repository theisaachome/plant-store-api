const express = require("express");
const dotenv = require('dotenv');
const morgan = require("morgan");
const colors = require('colors');
const app = express();
const connectDB = require('./config/db');


dotenv.config({path:"./config/config.env"});
connectDB();
// Body parser
app.use(express.json());

if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"));
}
const productsRoutes = require('./src/routes/productRoutes');
app.get('/',(req,res,next)=>{
    res.send("Welcome to Plant Store API");
});
app.use("/api/v1/products",productsRoutes);
const PORT = process.env.PORT||5000;

const server = app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}.`.green.bold);
});