const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./ROUTES/admin');
const shopRoutes = require('./ROUTES/shop');

// Use body-parser middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);


app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>');
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
