const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(config.env.MONGO_URL) // process.env or config.env?

    console.log(conn)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
}

module.exports = connectDB;