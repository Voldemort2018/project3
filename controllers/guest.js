var Guests = require("../models/guest");

module.exports = {

  find: function (req, res) {
    Guests.findOne(
      { _id: req.params.id }).then(function () {
        res.json();
      }).catch(function (err) {
        console.log(err);
      })
  },

  create: function (req, res) {
    var newGuest = new Guests(req.body);
    newGuest.save().then(function () {
      res.send();
    }).catch(function (err) {
      console.log(err);
    });
  },

  update: function (req, res) {
    Guests.findOneAndupdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }).then(function () {
        res.send()
      }).catch(function (err) {
        console.log(err);
      })
  },

  destroy: function (req, res) {
    Guests.remove(
      { _id: req.params.id }).then(function () {
        res.send();
      }).catch(function (err) {
        console.log(err);
      })
  }
}