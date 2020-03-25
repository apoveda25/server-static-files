const express = require("express");
const path = require("path");
const logger = require("morgan");
const fileUpload = require("express-fileupload");

const uploadRouter = require("./routes/upload");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/upload", uploadRouter);

module.exports = app;
