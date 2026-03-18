const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

async function start() {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB connected');
    } else {
      console.warn('MONGO_URI not set. Skipping MongoDB connection.');
    }

    app.get('/api/health', (req, res) => {
      res.json({ status: 'ok' });
    });

    app.post('/api/contact', async (req, res) => {
      try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json({ message: 'Message received' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to save message' });
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

