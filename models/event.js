const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  event_name: { type: String, required: true },
  event_date: { type: Date, default: Date.now, required: true },
  event_time: { type: String, required: true }
});

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;