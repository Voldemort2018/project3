const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registrySchema = new Schema({
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Registry = mongoose.model("Registry", registrySchema);

module.exports = Registry;