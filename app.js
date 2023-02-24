const express = require('express');
const routes = require('./routes/routes');
const app = express();
const port = 3000;
const moogose = require("./config/db");

app.use(
    (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    }
)

app.use("/", routes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((err, req, res) => {
    res.status(500).json({message: err.message, stack: err.stack });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});