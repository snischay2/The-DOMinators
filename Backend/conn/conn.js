const mongoose = require("mongoose");
require("dotenv").config(); // Add this line

const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }
};

conn();