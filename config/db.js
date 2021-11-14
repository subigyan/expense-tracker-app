const mongoose = require("mongoose");

const connect = async () => {
    try {
        const connect = await mongoose.connect(
            process.env.MONGO_URI || "mongodb://localhost:27017/expenseDB",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log(
            `Connected to MongoDB: ${connect.connection.host}`.yellow.underline
        );
    } catch (e) {
        console.log(`Error: ${e.message}`);
        process.exit(1);
    }
};

module.exports = connect;
