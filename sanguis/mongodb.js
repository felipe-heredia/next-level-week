const mongoose = require("mongoose");
const chalk = require("chalk");

const config = require("./src/config/config.json");

module.exports = {
  async DataBase() {
    await mongoose
      .connect(config.mongoConnect, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      })
      .then(() => console.log(chalk.cyan(" [Servidor] > MongoDb Conectado.")))
      .catch(err => {
        console.log(err);
        console.log(chalk.red(" [Servidor] >> Tivemos um erro no MongoDB."));
      });
  }
};
