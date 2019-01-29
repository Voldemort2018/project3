var express = require("express");

var registryController = require("../controllers/registry");

var router = new express.Router();

router.get("/:id", registryController.find);

router.post("/", registryController.create);

router.put("/:id", registryController.update);

router.delete("/:id", registryController.destroy);

module.exports = router;