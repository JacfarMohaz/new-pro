const multer = require("multer")

const storeFIle = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "document")
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})


const uploadDocumet = multer({
    storage: storeFIle
})

module.exports = uploadDocumet


