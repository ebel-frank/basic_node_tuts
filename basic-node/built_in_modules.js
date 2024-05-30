// ****************** OS MODULE ***********************
// const os = require('os')

// // info about current user
// console.log(os.userInfo());
// // Get uptime of PC

// console.log(`The System uptime is ${os.uptime() / 60} seconds`);

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(currentOS);

// *********************** PATH MODULE ******************
// const path = require('path')

// const filePath = path.join('content', 'subfolder', "test.txt")
// console.log(filePath);

// console.log(path.basename(filePath));

// const absolute = path.resolve(__dirname, filePath)
// console.log(absolute);

// ******************** FILE SYSTEM MODULE ******************
// const { readFileSync, readFile, writeFile, writeFileSync } = require('fs')

// let data = readFileSync('./files/input.txt', 'utf-8')
// console.log(data);

// writeFileSync(
//     './files/output.txt', 
//     "\nI just appended to the file", 
//     { flag: 'a' }
// )

// Asynchronous
// readFile('./files/input.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("Async: ", data)
// })