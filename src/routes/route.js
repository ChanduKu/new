const express = require('express');
const router = express.Router();
const newauthor=require('../controllers/newContrller')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/NewAuthor",newauthor.newAthor)
router.get("/newauth",newauthor.getAuth)
router.post('/newbook',newauthor.newBook)
router.get('/newbookdata',newauthor.getBooksData)
router.post('/newPulbisher',newauthor.creatNewPublisher)
router.get('/getpublisher',newauthor.getpublisher)
router.put('/put/:id',newauthor.update)
module.exports = router;