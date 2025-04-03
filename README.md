# OpenDTU Telegram Bot 📡🤖

Ein Node.js-basierter Telegram-Bot, der die aktuellen Daten deiner OpenDTU Photovoltaik-Anlage abruft und über Telegram anzeigt – ideal für den Einsatz auf einem Raspberry Pi.

## 🌞 Funktionen

- Abfrage der aktuellen Leistung und Erträge über /status
- Zeigt Tages- und Gesamtertrag an
- Authentifiziert sich via Basic Auth bei der OpenDTU API
- Einfach installierbar mit npm
- Kompatibel mit Raspberry Pi
- Telegram-Nachrichten im schönen Markdown-Format

## 📦 Voraussetzungen

- Node.js (empfohlen: v18+)
- npm
- Telegram-Bot (über [@BotFather](https://t.me/BotFather) erstellen)
- OpenDTU mit API-Zugang und Login (Basic Auth)

## ⚙️ Installation

1. Projekt entpacken:
   ```bash
   unzip opendtu-telegram-bot.zip && cd opendtu-telegram-bot
   ```

2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```

3. `.env` Datei erstellen auf Basis von `.env.example`

## 🚀 Starten

```bash
npm start
```

## 📱 Telegram-Befehle

| Befehl    | Funktion                          |
|-----------|-----------------------------------|
| /start    | Begrüßung                         |
| /status   | Zeigt aktuelle PV-Daten an        |

## 🔁 Optional: mit PM2 dauerhaft laufen lassen

```bash
npm install -g pm2
pm2 start index.js --name opendtu-bot
pm2 save
pm2 startup
```

## 📜 Lizenz

MIT
