const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'server is running' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all fields' });
  }

  console.log('New Contact Submission:', { name, email, message });
  
  // In a real app, you would save this to DB or send an email
  res.status(200).json({ 
    success: true, 
    message: 'Message received! We will get back to you soon.' 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
