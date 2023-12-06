const express = require("express");
const router = express.Router();
const User = require("../models/customerSchema");
var moment = require("moment");
const ctrl = require("../controller/ctrl")

router.get("/", ctrl.user_index_get);
router.get("/edit/:id", ctrl.user_edit_get);
router.get("/view/:id", ctrl.user_view_get);
router.post("/search",ctrl.user_search_post);
router.delete("/edit/:id", ctrl.user_edit_delete);
router.put("/edit/:id", ctrl.user_edit_put);

module.exports = router;
