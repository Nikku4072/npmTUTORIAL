
const fs = require("fs");
const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">SEND</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }


    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
        body.push(chunk);
        });
        return req.on('end', () => 
        {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt', `${message}\n`);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        });    
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello From my Node.js server!</h1></body>');
    res.write('</html>');
    res.end();
};
exports.handler = requestHandler;
exports.someText = 'cool';



