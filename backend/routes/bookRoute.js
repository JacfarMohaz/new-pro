const express = require("express")
const bookController = require("../controller/bookController")
const uploadDocumet = require("../middleware/uploadDocument")

const route = express.Router()

route.post("/create/book", uploadDocumet.single("img") , bookController.createNewData)
route.get("/read/book", bookController.ReadData)
route.get("/readSingle/book/:id", bookController.ReadSingleData)
route.put("/update/book/:id", uploadDocumet.single("img"), bookController.updateData)
route.delete("/delete/book/:id", bookController.deleteData)
route.get("/search/book/:key", bookController.searchBook)

module.exports = route