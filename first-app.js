const http = require('http');

const server = http.createServer((req,res) => {
    // console.log(req);
    console.log("My Name is Ibrahim");
});

// const port = 4000;
    server.listen(4000);
