const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body-parser middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: false }));

// Display a form to add a product
app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/product" method="POST">
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
app.post('/product', (req, res) => {
    const { title, size } = req.body;
    console.log(`Title: ${title}, Size: ${size}`);
    res.send('Product added successfully!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
