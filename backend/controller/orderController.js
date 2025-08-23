const orderModel = require("../model/orderModel")
const bookModel = require("../model/bookModel")

const createOrder = async (req, res) => {
    try {
        const newData = orderModel(req.body)
        const saveData = await newData.save()
        if (saveData) {
            res.send(saveData)
        }
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

const readOrder = async (req, res) => {
    try {
        const getData = await orderModel.find().populate("book", "title")
        if(getData){
            res.send(getData)
        }
    } catch (error) {
        res.status(500).send({ message: error })

    }
}


const readBooks = async (req, res) => {
    const books = await bookModel.find({}, "title")
    if(books){
        res.send(books)
    }
}

module.exports = { createOrder, readOrder, readBooks }

