const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  blood: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Donor", DonorSchema);
