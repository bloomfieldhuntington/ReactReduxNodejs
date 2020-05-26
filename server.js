// server.js

// MARK:- IMPORTS
const express = require('express');

// MARK:- Inits
const app = express();

// MARK:- Middleware
app.use(express.json({extended: false}));

// MARK:- DUMMY OBJECT
const clothes = [
    {
        type: "Jacket",
        price: "4200",
        size: "large"
    },
    {
        type: "Hat",
        price: "200",
        size: "Small"
    },
    {
        type: "Thing",
        price: "453",
        size: "Medium"
    }
]

// MARK:- Routes
app.get('/', (req, res) => {
    res.send("Hello Smidig from the server");
});
app.get('/example', (req, res) => {
    res.send(clothes)
})
app.get('/profile', (req, res) => {
    res.send(clothes)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} ;-)`);
})