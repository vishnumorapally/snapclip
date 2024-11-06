const express = require("express")
const Share = require("../controller/share")
const checkcode = require("../controller/checkcode")
const getcode = require("../controller/get")


const router = express.Router()

router.post("/share",Share)
router.post("/checkcode",checkcode)
router.post("/get",getcode)

module.exports = router