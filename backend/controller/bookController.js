const bookModel = require("../model/bookModel")

// create data

const createNewData = async (req, res) => {
    const newData = bookModel({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        price: req.body.price,
        image: req.file.filename
    })
    const saveData = await newData.save()
    if (saveData) {
        res.send(saveData)
    }
}

// read 
const ReadData = async (req, res) => {
    const pageNumber = req.query.page || 0
    const numberOfBook = 2
    const getData = await bookModel.find().skip(numberOfBook * pageNumber).limit(numberOfBook)
    if (getData) {
        res.send(getData)
    }
}


// single data
const ReadSingleData = async (req, res) => {
    const GetSingle = await bookModel.findById(req.params.id)
    if (GetSingle) {
        res.send(GetSingle)
    }
}

// update data
const updateData = async (req, res) => {
    const putData = await bookModel.updateOne(
        { _id: req.params.id },
        {
            $set: {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                price: req.body.price,
                image: req.file ? req.file.filename : undefined
            }
        }
    )

    if(putData){
        res.send("success update")
    }
}

// delete
const deleteData = async (req, res) => {
    const removeData = await bookModel.deleteOne({_id: req.params.id})
    if(removeData){
        res.send("success delete")
    }
}

// search data
const searchBook = async (req, res) => {
    const searchData = await bookModel.find({
        $or: [
            {title: {$regex: req.params.key}},
        ]
    })

    if(searchData){
        res.send(searchData)
    }
}


module.exports = { createNewData, ReadData, ReadSingleData, updateData, deleteData, searchBook}