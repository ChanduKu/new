const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const midel=require("../mildware/midleware")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )
router.post("/login", userController.getUserData)
router.get("/users/:ids", midel.authCheck,userController.loginUser)
router.get("/update/:id",midel.authCheck,userController.udate)
router.delete('/user/:id',midel.authCheck,userController.deleteUser)
module.exports = router;