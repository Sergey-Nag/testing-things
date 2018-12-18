const express = require('express');
const Telegram = require('node-telegram-bot-api');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const TOKEN = '772355856:AAGLUZTDOHUFS7u1BhzIFKyYasUSNuHFtnE';

const bot = new Telegram(TOKEN, {
  polling: true
});


bot.on('message', (ctx)=>{
  console.log(ctx)
})