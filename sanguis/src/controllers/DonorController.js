const chalk = require("chalk");

const DonorModel = require("../models/Donor");

module.exports = {
  async index(request, response) {
    const donors = await DonorModel.find();
    return response.render("index.html", { donors });
  },

  async addDonor(request, response) {
    const name = request.body.name;
    const email = request.body.email;
    const blood = request.body.blood;

    if (name == "" || email == "" || blood == "") {
      return response.send("Todos os campos são obrigatórios!");
    }

    const donor = await DonorModel.findOne({ name });

    if (!donor) {
      const createDonor = async () => {
        await DonorModel.create({
          name,
          email,
          blood
        });
      };

      await createDonor();

      console.log(
        chalk.redBright(` [Doadores] > Um novo doador foi adicionado: ${name} `)
      );
    }

    return response.redirect("/");
  }
};
