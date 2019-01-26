const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guestSchema = new Schema({
  guest_name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true }
});

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;