const router = require("express").Router()
const {
    listBook,
    createBook
} = require("../controllers/book.controller")

router.get("/", listBook) 

router.post("/", createBook) 

module.exports = router