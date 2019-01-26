const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  event_name: { type: String, required: true },
  event_date: { type: Date, default: Date.now, required: true },
  event_time: { type: String, required: true }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;