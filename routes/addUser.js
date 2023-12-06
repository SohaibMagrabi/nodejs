const express = require("express");
const router = express.Router();
const User = require("../models/customerSchema");
var moment = require("moment");
const ctrl = require("../controller/ctrl")

router.get("", ctrl.g);
router.post("", ctrl.h);

module.exports = router;
