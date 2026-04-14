const express = require('express')
const router = express.Router();

let products = [];
let cart = [];

router.get("/products", (req, res) => {
    res.render("products", {products});
})

router.get("/products/new", (req, res) => {
    res.render("add-product")
})

router.post("/products/new", (req, res) => {
    const newproduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }

    products.push(newproduct)
    res.redirect("/products");
})

router.get("/products/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id)
    res.render("product", {product})
})

router.post("/products/:id/delete", (req, res) => {
    products = products.filter(p => p.id !== Number(req.params.id))
    res.redirect("/products")
})

// router.get("/cart", (req, res) => {
//     res.json(cart)
// })

// router.post("/cart", (req, res) => {
//     const item = {
//         productId: req.body.productId,
//         quantity: req.body.quantity
//     }
//     cart.push(item);
//     res.json(item)
// })
module.exports = router;