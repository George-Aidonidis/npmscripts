"use strict";

const express = require("express");
const app = express();
const log4js = require("log4js");
const logger = log4js.getLogger();
logger.debug("Some debug messages");
const port = 2000;
// process.env["LOG_LEVEL"] = "DEFAULT";
// logger.setLevel(process.env.LOG_LEVEL);
// logger.info(process.env.LOG_LEVEL);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/public/views/index.html");
});

app.get("/main", (req, res) => {
  res.sendFile(__dirname+"/public/views/main.html");
});

app.listen(port, function (err) {
  if (err)
    logger.error(err);
  logger.info(`Running server on port ${port}`);
});