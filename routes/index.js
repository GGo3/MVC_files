var express = require('express');
var router = express.Router();
var multer  = require('multer');
const path = require('path');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    let fileFormat = file.mimetype.replace(/(\w+)\/(\w+)/, (match, name, format) => `.${format}`);
    let newName =`${req.body.renaming}-${Date.now()}${fileFormat}`
    cb(null, newName);
  }
})

var upload = multer({ storage: storage })

router.get('/', (req, res) => {
  res.render('index');
});
router.post('/upload', upload.single('dowloads'), (req, res) => {
  res.send(req.file.filename);
  res.end();
});
router.get('/img/:img', (req, res) => {
  console.log(req.params);
  let filePath = path.join(__dirname, '../uploads', `./${req.params.img}`);
  console.log(filePath);
  res.sendFile(filePath);
});

module.exports = router;
