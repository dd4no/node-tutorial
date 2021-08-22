// Built-in HTTP module

const http = require('http');

// Create server and request responses
const server = http.createServer((req,res)=>{
    // Home page
    if(req.url==='/'){
        res.end('Welcome');

    }
    // About page
    else if(req.url === '/about') {
        res.end('About us');
    }
    // Error page
    else {
        res.end(`
        <h1>OOPS!</h1>
        <p>Can't find that.</p>
        <a href="/">home</a>
        `);
    }
});

// Start server
server.listen(5000);