var express = require("express");

var guestsController = require("../controllers/guest");

var router = new express.Router();

router.get("/:id", guestsController.find);

router.post("/", guestsController.create);

router.put("/:id", guestsController.update);

router.delete("/:id", guestsController.destroy);

module.exports = router;