const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const { initRoutes } = require("./src/_shared/@init/init-routes");
const configDev = require("./src/_shared/config/config.dev.json");
const configProd = require("./src/_shared/config/config.prod.json");
const config = process.env.NODE_ENV === "production" ? configProd.api : configDev.api;
const { corsOptions, xOptions } = require("./src/_shared/config/HeaderConfig");

// Initialization
async function init() {
  const app = express();
  app.use(cors(corsOptions));
  app.use(helmet(xOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ limit: "1000mb", extended: true }));
  app.use((req, res, next) => {
    res.setHeader(
      "Permissions-Policy",
      "geolocation=(), midi=(), sync-xhr=(), microphone=(self), camera=(self), magnetometer=(), gyroscope=(), fullscreen=(self), payment=()"
    );
    next();
  });
  app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    next();
  });

  // Hiding Headers
  app.disable("x-powered-by");
  app.use((req, res, next) => {
    res.removeHeader("Server");
    // res.setHeader('Server', 'CustomServerName'); // custom server value
    next();
  });

  initRoutes(app);
  app.get("/", (req, res) => {
    res.send("Server is running");
  });
  app.listen(config.port);
  console.log(`Running at http://${config.host}:${config.port}/api`);
}

init();
