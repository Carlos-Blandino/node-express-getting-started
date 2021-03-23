
const morgan = require("morgan");
const express = require("express");
const app = express();
app.use(morgan("dev"));
const sayHello = (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const content = name ? `Hello, ${name}!` : "Hello!";
    res.send(content);
  };
  const saySomething = (req, res) => {
  const greeting = req.params.greeting;
  const name = req.query.name;

  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  const greeting = req.params.greeting ;
  if(greeting.length < 5) {
    next("Greeting is too short");
  } else {
    res.send(`${greeting} is a excellent greetin.`)
  }
  res.send(content);
};
  
  app.get("/say/:greeting", saySomething);

app.get("/hello", sayHello);
app.use((req,res,next)=>{
  res.send("The route does not exsist!")
})
app.use((err, req, res, next)=>{
  const message = `Your error is: ${err}`
  res.send(message)
})
module.exports = app;

