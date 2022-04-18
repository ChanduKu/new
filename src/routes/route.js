const express = require('express');
const router = express.Router();
const constroler=require('../controllers/newContrller')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/Batch",constroler.batch)
router.get("/Batch",constroler.getBatch) 
router.post("/dev",constroler.dev)
router.get("/dev",constroler.getdev)
router.get("/schloar",constroler.getScholar)
router.get("/random",constroler.last)

module.exports = router;