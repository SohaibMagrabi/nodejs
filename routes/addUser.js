const express = require("express");
const router = express.Router();
const User = require("../models/customerSchema");
var moment = require("moment");
const ctrl = require("../controller/ctrl")

router.get("", ctrl.user_add_get);
router.post("", ctrl.user_post);

module.exports = router;
