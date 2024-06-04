const http = require('http')
const express = require('express')

const app = express()
// app.get
app.get('/', (req, res) => {
    console.log('User hits the server');
    res.status(200).send('Express page')
})
app.get('/about', (req, res) => {
    res.send('About page')
})
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

// app.post

// app.put

// app.delete

// app.all

// app.use

// app.lesten
app.listen(5000, () => [
    console.log('Server is listening on port 5000')
])



// const { readFileSync } = require('fs')

// // get all files
// const homePage = readFileSync('./navbar-app/index.html')


// const server = http.createServer(
//     (req, res) => {
//         console.log(req.url);
//         const url = req.url
//         // home page
//         if (url === '/') {
//             res.writeHead(200, { 'content-type': 'text/html' })
//             res.write(homePage)
//             res.end()
//         }
//         // about page
//         else if (url === '/about') {
//             res.writeHead(200, { 'content-type': 'text/html' })
//             res.write('<h1>About Page</h1>')
//             res.end()
//         }
//         // 404
//         else {
//             res.writeHead(404, { 'content-type': 'text/html' })
//             res.write("<h1>Page not found</h1>")
//             res.end()
//         }
//     }
// )

// server.listen(5000, () => {
//     console.log("Starting server on port 5000...");
// })