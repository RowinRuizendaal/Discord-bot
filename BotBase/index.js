require('dotenv').config();
const express = require('express');
const keepalive = require('express-glitch-keepalive');

const ping = require('./functions/ping.js');
const website = require('./functions/website.js');
const upcomingEvent = require('./functions/upcomingevent.js');
const info = require('./functions/info.js');
const clear = require('./functions/clear.js');
const rip = require('./functions/rip.js');
const rolldice = require('./functions/dice.js');
const rockPaperScissor = require('./functions/rps.js');
const moffel = require('./functions/moffel.js');
const links = require('./functions/links.js');
const addhomework = require('./functions/addhomework.js');
const homework = require('./functions/homework.js');
const date = require('./functions/date.js');
const nukehomework = require('./functions/nukehomework.js');
// const reminder = require('./functions/reminder.js');
const gambleSlots = require('./functions/gambleSlots.js');

const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.DISCORD_TOKEN;
const prefix = '!';

// Keep bot alive code
const app = express();
app.use(keepalive);

app.get('/', (req, res) => {
  res.json('This bot should be online! Uptimerobot will keep it alive');
});
app.get('/', (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

// continue regular code

//See if bot is online
bot.on('ready', () => {
  console.log('This bot is online!');
});

//commands
bot.on('message', (message) => {
  let args = message.content.substring(prefix.length).split(' ');

  switch (args[0]) {
    case 'ping':
      message.reply(ping());
      break;

    case 'website':
      message.reply(website());
      break;

    case 'info':
      message.reply(info(args[1]));
      break;

    case 'clear':
      message.channel.bulkDelete(clear(args[1]));
      break;

    case 'rip':
      message.channel.send(rip());
      break;

    case 'soon':
      message.channel.send(upcomingEvent());
      break;

    case 'dice':
      message.reply(rolldice(args[1]));
      break;

    case 'rps':
      message.reply(rockPaperScissor(args[1]));
      break;

    case 'moffel':
      message.channel.send(moffel());
      break;

    case 'links':
      message.channel.send(links());
      break;

    case 'addhomework':
      message.reply(addhomework(args));
      break;

    case 'homework':
      message.reply(homework());
      break;

    case 'date':
      message.reply(date(args[1], args[2]));
      break;

    case 'nukehomework':
      message.reply(nukehomework());
      break;

    case 'slots':
      message.channel.send(gambleSlots());
      break;

    case 'tegel':
      if (!args[1]) return message.reply('Gun iets voor op de tegel 😡');

      let tegelArr = [];

      for (let i in args) {
        tegelArr.push(args[i]);
      }
      tegelArr.shift();
      let tegelStr = tegelArr.join('%20');

      async function myAsyncFunc() {
        try {
          let result = await tegel(tegelStr);
          console.log(result);
          message.channel.send('', {
            files: [`./img/${quickfix}.png`],
          });
          quickfix++;
        } catch (err) {
          console.log(err);
        }
      }
      myAsyncFunc();
      break;

    //Works but not optimized yet braindead atm
    case 'reminder':
      if (!args[1] || !args[2])
        return message.reply(
          '```Usage: -reminder function id => minutes \n 0 => homework \n 1 => rolldice \n 2 => upcomingevent```'
        );

      let functies = [];
      functies[0] = homework();
      functies[1] = rolldice(6);
      functies[2] = upcomingEvent();

      let naamgeving = [];
      naamgeving[0] = 'Homework';
      naamgeving[1] = 'Roll the dice';
      naamgeving[2] = 'upcoming event';

      if (args[2] < 10 || args[1] >= naamgeving.length) {
        return message.reply(
          `${message.member.user.tag} tried to abuse the reminder feature, you have been warned! Minutes cannot be under 10`
        );
      } else {
        let miliseconds = args[2] * 60000;

        console.log(`${naamgeving[args[1]]} reminder has been triggered!`);
        setInterval(() => message.channel.send(functies[args[1]]), miliseconds);

        message.reply(
          `${message.member.user.tag} enabled the reminder feature ${
            naamgeving[args[1]]
          } for ${args[2]} minutes`
        );
      }
      break;
  }
});

let quickfix = `${Math.random()}`;

tegel = (text) => {
  const puppeteer = require('puppeteer');

  return new Promise(function (resolve, reject) {
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setViewport({
        width: 800,
        height: 800,
        deviceScaleFactor: 1,
      });
      await page.goto(`https://vuurvos1.github.io/tileGenerator/?${text}`);
      await page.screenshot({
        path: `img/${quickfix}.png`,
      });
      console.log(`Foto opgeslagen onder de naam ${quickfix}`);
      await browser.close();
      resolve('done');
    })();
  });
};

//Login the bot
bot.login(token);
