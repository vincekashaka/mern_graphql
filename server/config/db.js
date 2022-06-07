const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;

// const mongoose = require('mongoose')

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URL)

//         console.log(`MongoBD Connected: ${conn.connection.host}`.cyan.underline);

//     } catch (error) {
//         console.log(error)
//         process.exit (1)
//     }
// }

// module.exports = connectDB