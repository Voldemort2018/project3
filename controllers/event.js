var Events = require("../models/event");

module.exports = {

  find: function (req, res) {
    Events.findOne(
      { _id: req.params.id }).then(function () {
        res.json();
      }).catch(function (err) {
        console.log(err);
      })
  },

  create: function (req, res) {
    var newEvent = new Events(req.body);
    newEvent.save().then(function () {
      res.send();
    }).catch(function (err) {
      console.log(err);
    });
  },

  update: function (req, res) {
    Events.findOneAndupdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }).then(function () {
        res.send()
      }).catch(function (err) {
        console.log(err);
      })
  },

  destroy: function (req, res) {
    Events.remove(
      { _id: req.params.id }).then(function () {
        res.send();
      }).catch(function (err) {
        console.log(err);
      })
  }
}