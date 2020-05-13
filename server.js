// server.js

// MARK:- IMPORTS
const express = require('express');

// MARK:- Inits
const app = express();

// MARK:- Middleware
app.use(express.json({extended: false}));

// MARK:- Routes
app.get('/', (req, res) => {
    res.send("Hello Smidig from the server");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} ;-)`);
})