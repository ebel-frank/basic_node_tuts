const http = require('http')

// 1. Create a server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page")
    } else if (req.url === '/about') {
        res.end("Here is a brief history about us")
    } else {
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the home page you are looking for</p>
        <a href="/">Home<a>
        `)
    }
    console.log(`Request received: ${req.url}`)

})
// 2. Start the server
server.listen(8000, '127.0.0.1', () => {
    console.log("Server has started")
}, )