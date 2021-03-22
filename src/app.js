
const morgan = require("morgan");
const express = require("express");
const app = express();
app.use(morgan("dev"));
const sayHello = (req, res, next ) => {
    res.send('hello');
};


app.get("/hello", sayHello);

module.exports = app;

