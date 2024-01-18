// require('dotenv').config()
const { config } = require('dotenv');
const express = require('express');

const app = express();

const port = 4000;

app.get('/', (req , res) => {
    res.send("hello world")
})

// dont forget '/'
app.get('/linkdin' , (req, res) => {
    res.send("gauridotcom")
})

app.get('/login', (req, res) => {
    res.send("<h1>login page </h1>")
})

app.listen(process.env.PORT , () => {
    console.log(`example listing on port  ${port}`)
})