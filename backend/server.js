const path = require('path');
const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://news-frontend-z9qr.onrender.com'
}));


const dbPath = path.resolve(__dirname, 'data.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Veritabanı bağlantısı başarısız:", err.message);
  } else {
    console.log('Veritabanı bağlantısı başarılı:', dbPath);
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});

// Finance data
app.get('/api/finance-menu', (req, res) => {
  db.all('SELECT * FROM finance_menu', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      data: rows
    });
  });
});

// Slider news data
app.get('/api/slider-news', (req, res) => {
  db.all('SELECT * FROM slider_news', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      data: rows
    });
  });
});

// Weather Data 
app.get('/api/weather-data', (req, res) => {
  db.all('SELECT * FROM weather_data', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      data: rows
    });
  });
});

app.listen(port, () => {
  console.log(`Backend API çalışıyor, http://localhost:${port}`);
});
