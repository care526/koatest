
const http = require("http");

http.createServer((req, res) => {
    res.write("hello w123oasdrl123d");
    res.end();
}).listen(8080, () => {
    console.log("server is listening http:localhost:");
});
