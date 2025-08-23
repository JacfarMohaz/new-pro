const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const BookRoutes = require("./routes/bookRoute")
const orderRoutes = require("./routes/orderRoute")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/e-bookMs").then(() => console.log("database has been connected"))

app.use(BookRoutes)
app.use(orderRoutes)

// document route
app.use("/allDocs", express.static("document"))

app.listen(7000, () => console.log("server is running.."))