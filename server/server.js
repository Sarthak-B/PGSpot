const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to Local MongoDB
// Since you are on Mac and installed via Homebrew, this URI is standard.
mongoose.connect('mongodb://127.0.0.1:27017/pgfinder')
  .then(() => console.log('✅ Database Connected'))
  .catch(err => console.error('❌ Database Error:', err));

app.use('/api/properties', propertyRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});