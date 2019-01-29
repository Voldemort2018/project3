var express = require("express");

var eventsController = require("../controllers/event");

var router = new express.Router();

router.get("/:id", eventsController.find);

router.post("/", eventsController.create);

router.put("/:id", eventsController.update);

router.delete("/:id", eventsController.destroy);

module.exports = router;