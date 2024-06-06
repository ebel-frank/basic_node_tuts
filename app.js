const express = require('express')
const app = express()
const PORT = 5000

const { products } = require('./consts')


app.get('/', (req, res) => {
    // res.status(200).json([
    //     {
    //         name: 'Frank'
    //     },
    //     {
    //         name: 'Victor'
    //     }
    // ])
    res.status(200).send('<h1>Home Page<h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProd = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.status(201).send(newProd)
})

app.get('/api/products/:id', (req, res) => {
    const singleProd = products.find(
        (product) => product.id === Number(req.params.id)
    )
    if (!singleProd) {
        res.status(404).send("Product does not exist")
    } else {
        res.status(200).send(singleProd)
    }
})

app.get('/api/v1/query', (req,res)=>{
    console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((prod)=>{
            return prod.name.toLowerCase().startsWith(search.toLowerCase())
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.status(200).json(sortedProducts)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})