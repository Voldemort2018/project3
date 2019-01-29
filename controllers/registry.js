var Registry = require("../models/registry");

module.exports = {

  find: function (req, res) {
    Registry.findOne(
      { _id: req.params.id }).then(function () {
        res.json();
      }).catch(function (err) {
        console.log(err);
      })
  },

  create: function (req, res) {
    var newRegistry = new Registry(req.body);
    newRegistry.save().then(function () {
      res.send();
    }).catch(function (err) {
      console.log(err);
    });
  },

  update: function (req, res) {
    Registry.findOneAndupdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }).then(function () {
        res.send()
      }).catch(function (err) {
        console.log(err);
      })
  },

  destroy: function (req, res) {
    Registry.remove(
      { _id: req.params.id }).then(function () {
        res.send();
      }).catch(function (err) {
        console.log(err);
      })
  }
}