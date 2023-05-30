const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/users");

// settings
const app = express();
const port = process.env.PORT || 9000;
// middlewares
app.use(express.json());
app.use("/api", userRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.URL_API_MONGO)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.log(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));