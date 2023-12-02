const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/catalogContr");

router.get("/", ctrl.listCatalogs);

module.exports = router;
