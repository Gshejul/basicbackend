// require('dotenv').config()
const { config } = require('dotenv');
const express = require('express');

const app = express();

// const port = 4000;

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

app.get('/jokes', (req, res) => {
    const jokes = [
        {
        id : 1,
        title : 'joke 1',
        content : 'joke 1'
        },
        {
            id : 2,
            title : 'joke 2',
            content : 'joke 2'
            },
                {
                id : 3,
                title : 'joke 3',
                content : 'joke 3'
                },
                {
                id : 4,
                title : 'joke 4',
                content : 'joke 4'
                },
                {
                id : 5,
                title : 'joke 5',
                content : 'joke 5'
                }
];
        res.send(jokes);
})

// app.listen(process.env.PORT , () => {
//     console.log(`example listing on port  ${port}`)
// })

const port = process.env.PORT || 3000;
app.listen(port , () =>{
    console.log(`example listing on port  ${port}`)
})