var path = require("path");
var router = new express.Router();
var express = require("express")

var eventRoutes = require("./eventRoutes");
var guestRoutes = require("./guestRoutes");
var registryRoutes = require("./registryRoutes");
var userRoutes = require("./userRoutes");

router.use("/event", eventRoutes);
router.use("/guest", guestRoutes);
router.use("/registry", registryRoutes);
router.use("/user", userRoutes);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html")); // DOES NEED TWO DOTS LEAVE THIS LINE ALONE
});

module.exports = router;