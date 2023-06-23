const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const {MONGO_DB_CONFIG} = require ("./config/app.config");
const cors = require ("cors");

//Connection to MongoDB
mongoose.connect(MONGO_DB_CONFIG.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection to MongoDB Successful');
}).catch((error) => {
    console.log('Error Connecting to MongoDB: ', error);
});

//Enable Cors
app.use(cors());

//Middleware to parse JSON data
app.use(express.json());

//Define a route to fetch the data
app.use("/api", require("./router/app.route"));

//Start the server
app.listen(8000, () => {
    console.log("Server Started on Port 8000");
});