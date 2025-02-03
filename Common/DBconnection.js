const mongoose = require('mongoose');

const DatabaseConnection = async () => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/BLOGAPP')
        console.log("DATABASE CONNECTED ....")
    } catch (error) {
        console.log("CONNECTION ERROR", error)
    }
}

module.exports = DatabaseConnection;