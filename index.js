require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const path = require("path");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const transactionRouter = require("./routes/transaction");
const PORT = process.env.PORT || 5000;

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const environment = process.env.NODE_ENV || "production";

if (environment === "development") {
    app.use(morgan("dev"));
}

connectDB();

app.use("/api/transactions", transactionRouter);

if (environment == "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
} else {
}

app.listen(PORT, () =>
    console.log(
        `${
            environment == "production" ? "APP" : "Server"
        } is running on port ${PORT}`.blue
    )
);
