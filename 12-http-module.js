// Built-in HTTP module

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome');

    }
    else if(req.url === '/about') {
        res.end('About us');
    }
    else {
        res.end(`
        <h1>OOPS!</h1>
        <p>Can't find that.</p>
        <a href="/">home</a>
        `);
    }
});

server.listen(5000);