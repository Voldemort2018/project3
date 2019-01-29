var Users = require("../models/user");

module.exports = {

  find: function (req, res) {
    Users.findOne(
      { _id: req.params.id }).then(function () {
        res.json();
      }).catch(function (err) {
        console.log(err);
      })
  },

  create: function (req, res) {
    var newUser = new Users(req.body);
    newUser.save().then(function () {
      res.send();
    }).catch(function (err) {
      console.log(err);
    });
  },

  update: function (req, res) {
    Users.findOneAndupdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }).then(function () {
        res.send()
      }).catch(function (err) {
        console.log(err);
      })
  },

  destroy: function (req, res) {
    Users.remove(
      { _id: req.params.id }).then(function () {
        res.send();
      }).catch(function (err) {
        console.log(err);
      })
  }
}