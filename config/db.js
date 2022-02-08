
const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = async () => {
    const conn = await mongoose.connect(
        process.env.MONGO_URI,
        {});
    console.log(`MongoDB Connected @:${conn.connection.host}`.yellow.underline.bold);
    //Get the default connection
    //Bind connection to error event (to get notification of connection errors)


}

module.exports = mongoDB;