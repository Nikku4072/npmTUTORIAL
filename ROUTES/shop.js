const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
router.get('/contactus', (req, res, next) => {
  res.send('<form action="/success" method="POST"><input type="text" name="name" placeholder="Name"><br><input type="email" name="email" placeholder="Email"><br><button type="submit">Submit</button></form>');
});


module.exports = router;
