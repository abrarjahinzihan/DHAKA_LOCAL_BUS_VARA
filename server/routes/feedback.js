const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const feedbacksFile = path.join(__dirname, '../data/feedbacks.json');

router.post('/', async (req, res) => {
  try {
    const { name, message } = req.body;
    
    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const senderName = name || 'Anonymous';

    let feedbacks = [];
    if (fs.existsSync(feedbacksFile)) {
      const data = fs.readFileSync(feedbacksFile, 'utf8');
      feedbacks = JSON.parse(data);
    }

    const newFeedback = {
      id: Date.now().toString(),
      name: senderName,
      message: message.trim(),
      timestamp: new Date().toISOString()
    };

    feedbacks.push(newFeedback);
    fs.writeFileSync(feedbacksFile, JSON.stringify(feedbacks, null, 2), 'utf8');

    // Send email using nodemailer
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'abrarjahinkhanzihan@gmail.com',
        subject: `New Feedback from Local Bus App (${senderName})`,
        text: `Name: ${senderName}\n\nMessage:\n${message.trim()}`
      };

      await transporter.sendMail(mailOptions);
      console.log('Feedback email sent successfully');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // We still return success since it's saved locally
    }

    res.status(201).json({ success: true, feedback: newFeedback });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ error: 'Failed to save feedback' });
  }
});

module.exports = router;
