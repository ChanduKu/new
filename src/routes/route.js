const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )
router.post("/Author",UserController.createUser)
router.post("/name",UserController.list)
router.get("/updates",BookController.udpdate)
router.get("/name",UserController.name)
module.exports = router;
