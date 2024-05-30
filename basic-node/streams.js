const { createBigFile } = require('./utils')

// createBigFile()

const { createReadStream } =  require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark = control size
// encoding: utf-8
const stream = createReadStream('./files/big.txt', 'utf-8')

stream.on('data', (result) => {
    console.log(`Received ${result.length} bytes of data.`)
})

stream.on('error', (err) => console.log(err))