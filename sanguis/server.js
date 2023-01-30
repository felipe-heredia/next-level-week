const express = require("express");
const nunjucks = require("nunjucks");
const chalk = require("chalk");

const { DataBase } = require("./mongodb");
const DonorController = require("./src/controllers/DonorController");

const server = express();
DataBase();
server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

nunjucks.configure("./", {
  express: server,
  noCache: true
});

server.get("/", DonorController.index);
server.post("/", DonorController.addDonor);

server.listen(3333, () => {
  console.log(chalk.yellow(" [Servidor] > Servidor iniciado."));
});
