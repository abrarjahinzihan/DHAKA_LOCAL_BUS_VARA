const express = require('express');
const cors = require('cors');
require('dotenv').config();

const fareRoutes = require('./routes/fare');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', fareRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Local Bus Fare API is running!', status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
