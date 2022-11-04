const express = require('express')
const app  = express()
const multer = require('multer')

var fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now()+".jpg")
    }
  })

const upload= multer({storage: fileStorage}).single('image')

app.use(upload)

app.listen(3000)

app.get('/upload',(req,res)=>{
    res.send("uploaded")
})