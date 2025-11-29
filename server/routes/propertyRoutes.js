const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Seed dummy data (Run this once to populate your DB)
router.post('/seed', async (req, res) => {
  try {
    const newProperty = new Property({
      title: "Luxury Student Housing",
      price: 12000,
      location: "South Campus",
      type: "Single Room",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
    });
    await newProperty.save();
    res.json(newProperty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;