const express = require("express");
const router = express.Router();
const User = require("../models/customerSchema");
var moment = require("moment");
const ctrl = require("../controller/ctrl")

router.get("/", ctrl.a);
router.get("/edit/:id", ctrl.b);
router.get("/view/:id", ctrl.c);
router.post("/search",ctrl.d);
router.delete("/edit/:id", ctrl.e);
router.put("/edit/:id", ctrl.f);

module.exports = router;
