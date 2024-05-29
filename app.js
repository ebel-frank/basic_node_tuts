const readline = require("readline")
const fs = require("fs")
const util = require("util")

const readFileAsync = util.promisify(fs.readFile)

// ****** Reading and writing file asynchronously ********
// fs.readFile("./files/input.txt", 'utf-8', (err, data) => {
//     console.log(data)
//     fs.readFile("./files/output.txt", 'utf-8', (err1, data1) => {
//         console.log(data1)
//         fs.readFile("./files/append.txt", 'utf-8', (err2, data2) => {
//             console.log(data2)
//             fs.writeFile("./files/output.txt", `${data1} \n\n${data2} \n\n${new Date()}`, () => {})
//         })
//     })
// })
// console.log("Reading file....")

// *********** Avoiding the call back hell *******************
// Using await/async
async function readFile() {
    try {
        let data = await readFileAsync("./files/input.txt", 'utf-8')
        let data1 = await readFileAsync("./files/append.txt", 'utf-8')
        fs.writeFile("./files/output.txt", `${data} \n\n${data1} \n\n${new Date()}`, () => {})
    } catch (err) {
        console.log(err)
    }
}

readFile()
console.log("Start async fuction")
// fs.writeFile("./files/output.txt", "This is the content")


//******** Reading and writing to a file ******
// let text_data = fs.readFileSync("./files/input.txt", 'utf-8')
// console.log(text_data)

// let content = `Data read from input.txt: ${text_data} \n\nData created ${new Date()}`
// fs.writeFileSync("./files/output.txt", content)
// console.log("Success")



// ********* Getting user input ***************
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// console.log("Hello from NodeJS")
// rl.question("Please enter your name: ", (name) => {
//     console.log(`You entered: ${name}`)
//     rl.close()
// })
// rl.on('close', () => {
//     console.log("Interface closed")
//     process.exit(0)
// })