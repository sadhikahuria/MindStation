const express = require('express');
const router = express.Router();
const upload = require('../controllers/upload');

router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ filename: req.file.filename });
});

module.exports = router;
