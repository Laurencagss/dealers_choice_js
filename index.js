const RoseMember = require('./RoseMember');
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const RoseFamily = require ('./listBank')
app.use(morgan('dev')); 
app.use(express.static('public')); 


const Alexis = new RoseMember("Alexis Rose","young and hot","There is nothing wrong with asking for what you deserve.","none")
const David = new RoseMember("David Rose", "you dont need to know that" , "In case you didn't know, I'm wildly popular. Some might even venture to call me beloved.","Patrick Brewer")
const Johnny = new RoseMember("Johnny Rose", "66" , "Tweet Us On Facebook!","Moira Rose")
const Moira = new RoseMember("Moira Rose", "you never ask a lady her age" ,"The world is falling apart around us and Im dying inside.","Johnny Rose")
const Patrick = new RoseMember("Patrick Brewer", "around Davids age" , "Rose Apothecary... you know, it's just pretentious enough.","David Rose")


app.get('/', (req, res) => {
  const html = `<h1> Members of the Rose Family:</h1> <br/> 
  <a href="/Alexis">${Alexis.name}</a> <br/>
  <a href="/David">${David.name} </a> <br/>
  <a href="/Johnny">${Johnny.name} </a> <br/>
  <a href="/Patrick">${Patrick.name} </a> <br/>
  <a href="/Moira"> ${Moira.name} </a>`
res.send(html)
})

app.listen(port, () => {
  console.log(`Welcome to Schitts Creek`)
})

app.get('/Alexis', (req, res) => {
  res.send(`
  Name: ${Alexis.name} <br/>
  Age: ${Alexis.age} <br/>
  Quote:  ${Alexis.quote} <br/>
  Spouse: ${Alexis.partner}<br/>`)
})

app.get('/Johnny', (req, res) => {
  res.send(`
  Name:${Johnny.name} <br/>
  Age: ${Johnny.age} <br/>
  Quote:  ${Johnny.quote} <br/>
  Spouse: ${Johnny.partner}<br/>`)
})

app.get('/Moira', (req, res) => {
  res.send(`
  Name:${Moira.name} <br/>
  Age:  ${Moira.age} <br/>
  Quote: ${Moira.quote}<br/> 
  Spouse:${Moira.partner}<br/>`)
})

app.get('/Patrick', (req, res) => {
  res.send(`
  Name: ${Patrick.name} <br/>
  Age: ${Patrick.age} <br/>
  Quote: ${Patrick.quote} <br/>
  Spouse:${Patrick.partner} <br/>
  `)
})

app.get('/David', (req, res) => {
  res.send(`
  Name: ${David.name} <br/>
  Age: ${David.age}  <br/>
  Quote: ${David.quote}  <br/>
Spouse: ${David.partner}  <br/>`)
})
