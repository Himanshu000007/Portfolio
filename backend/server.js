const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB dependencies removed

async function start() {
  try {
    console.log('Starting server in stateless mode (No DB)...');

    app.get('/api/health', (req, res) => {
      res.json({ status: 'ok' });
    });

    app.post('/api/contact', async (req, res) => {
      try {
        console.log("New Contact:", req.body); // just log
        res.status(201).json({ message: 'Message received (no DB)' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();

