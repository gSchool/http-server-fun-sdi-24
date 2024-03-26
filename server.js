let http = require('http');
let PORT = 8080;


const server = http.createServer((req, res) => {

    console.log("our request object: ", req.url, req.method, req.headers);

    /*
    parse out the parameters in the request by "/"
        if word is pets
        see if type was passed.
        if type was passed
        go get data from database and return to client
    */

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello SDI World!');
});


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})