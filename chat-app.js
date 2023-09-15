const express=require('express');
const fs = require("fs");

const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended:false}))

app.get(`/`,(req, res,) => {
    fs.readFile('Convo.txt', (err, data) => {
        if(err){
            console.log(err);
            data = 'No chat Exist';
        }
        res.send(`${data}<form action="/" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')"method="POST"><input id="message" name="message" type="text"><input type="hidden" name="username" id="username"><button type="submit">send</button></form>`)
    })
})
    
app.post(`/`,(req, res) => {
    
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("Convo.txt", `${req.body.username}: ${req.body.message}`, {flag: 'a'}, (err)=> 
        err ? console.log(err) :  res.redirect(`/`)
    );   
    
})

app.get(`/login`,(req, res,next) => {
    res.send(`<form action="/login" method = "POST"onsubmit="localStorage.setItem('username',document.getElementById('username').value)"><input id="username" type="text" name="name"><button type="submit">submit</button></form>`)
})
app.post(`/login`,(req, res) => {
    res.redirect(`/`)
})


app.listen(4000)