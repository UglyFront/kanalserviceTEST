const express = require("express")
const router = express.Router()
const controller = require("../controllers/controllersTable")

router.get("/table", controller.getItem)

module.exports = router