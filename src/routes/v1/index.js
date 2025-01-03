const express = require("express");

const { TaskController } = require("../../controllers");

const router = express.Router();

router.get("/", TaskController.info);

module.exports = router;
