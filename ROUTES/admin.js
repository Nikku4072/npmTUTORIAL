const express = require('express');
const router = express.Router();


router.get('/add-product', (req, res) => {
    res.send(`
      <form action="/add-product" method="POST">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title">
        <br>
        <label for="size">Size:</label>
        <input type="text" id="size" name="size">
        <br>
  
        <button type="submit">Add Product</button>
      </form>
    `);
  });
  
  // Log the submitted data to the console
  router.post('/add-product', (req, res) => {
      const { title, size } = req.body;
      console.log(`Title: ${title}, Size: ${size}`);
      res.send('Product added successfully!');
  });


  module.exports=router;