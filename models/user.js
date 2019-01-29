const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_name: { type: String, required: true, unique: true },
  user_email: { type: String, required: true },
  user_phone: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;