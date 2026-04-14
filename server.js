const express = require('express');
const app = express();
const blog = require('./routes/blog')
const ecommerce = require('./routes/ecommerce')
const form = require('./routes/form');
// app.get('/', (req, res) => {
//     res.send("helo jojn")
// })
app.use(express.static('public'));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", form);
app.use("/", ecommerce)
app.use("/", blog)
app.listen(3000, ()=>{
    console.log("http://localhost:3000");
    
});