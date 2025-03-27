const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/prepeaseDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// View engine
app.set("view engine", "ejs");

// Routes
const regRouter = require("./routes/reg");
const userRouter = require("./routes/user");

app.use("/reg", regRouter);
app.use("/user", userRouter);

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
