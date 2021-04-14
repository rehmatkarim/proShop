// const express = require("express");
import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import Product from "./models/productModel.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();
const app = express();
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Api is running");
});
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(
    `server is running  in ${process.env.NODE_ENV} mode on port ${port} `.yellow
      .bold
  );
});
