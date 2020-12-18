var express = require('express');
var router = express.Router();
var multer  = require('multer');
const fs = require('fs').promises;
const path = require('path');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    let fileFormat = file.mimetype.replace(/(\w+)\/(\w+)/, `.$2`);
    let newName =`${req.body.renaming}-${Date.now()}${fileFormat}`
    cb(null, newName);
  }
})

var upload = multer({ storage: storage })

router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/upload', upload.array('dowloads'), (req, res) => {
  res.send(req.files.map(el => el.filename))
  // res.send(req.file.filename);
});

router.get('/img/:img', (req, res) => {
  let filePath = path.join(__dirname, '../uploads', `./${req.params.img}`);
  res.sendFile(filePath);
});

module.exports = router;
