const { writeFileSync } = require('fs')
const sayHi = (name) => {
    console.log(`Hello, ${name}`)
}

const createBigFile = () => {
    for (let i = 0; i < 10000; i++) {
        writeFileSync('./files/big.txt', `Hello Frank ${i} \n`, { flag: 'a' })
    }
}


module.exports = { sayHi, createBigFile }
// console.log(module)