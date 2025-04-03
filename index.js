const TelegramBot = require('node-telegram-bot-api');
const fetch = require('node-fetch');
require('dotenv').config();

// ==== Konfiguration ====
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const OPENDTU_URL = process.env.OPENDTU_URL;
const OPENDTU_USERNAME = process.env.OPENDTU_USERNAME;
const OPENDTU_PASSWORD = process.env.OPENDTU_PASSWORD;

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '☀️ Willkommen! Nutze /status für aktuelle PV-Daten.');
});

bot.onText(/\/status/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    const response = await fetch(OPENDTU_URL, {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${OPENDTU_USERNAME}:${OPENDTU_PASSWORD}`).toString('base64'),
        'Accept': 'application/json'
      }
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const total = data.total;

    let text = `🔋 *OpenDTU Gesamtstatus*\n\n`;
    text += `⚡ Leistung: ${total.Power.v} ${total.Power.u}\n`;
    text += `📅 Tagesertrag: ${total.YieldDay.v} ${total.YieldDay.u}\n`;
    text += `📈 Gesamtertrag: ${total.YieldTotal.v} ${total.YieldTotal.u}\n`;

    bot.sendMessage(chatId, text, { parse_mode: 'Markdown' });
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
    bot.sendMessage(chatId, '⚠️ Fehler beim Abrufen der OpenDTU-Daten.');
  }
});
