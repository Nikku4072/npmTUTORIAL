
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('in the middleware!');
    next();//alllows the request to continue to next middleware.
});

app.use((req,res,next)=>{
    console.log('in another middleware!');
    res.send('<h1>HELLO FROM EXPRESS</h1>');
});

app.listen(3000);