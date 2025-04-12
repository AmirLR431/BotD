// برای خواندن توکن از .env
require('dotenv').config();

// ایمپورت کتابخانه discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// ساختن کلاینت دیسکورد
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

// وقتی ربات آنلاین شد
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// وقتی کسی پیامی داد
client.on('messageCreate', message => {
  if (message.content === 'سلام') {
    message.reply('سلام داداش!');
  }
});

// لاگین کردن ربات
client.login(process.env.TOKEN);
