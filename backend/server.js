const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("Backend running 🚀");
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', (req, res) => {
  console.log("Contact:", req.body);
  res.json({ message: "Received" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

