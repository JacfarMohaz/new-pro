const express = require("express")
const orderController = require("../controller/orderController")

const route = express.Router()

route.post("/create/order", orderController.createOrder)
route.get("/read/order", orderController.readOrder)
route.get("/read/orderBooks", orderController.readBooks)

module.exports = route