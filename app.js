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

app.listen(port, function (err) {
  if (err)
    logger.error(err);
  logger.info(`Running server on port ${port}`);
});