const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const allRoutes = require('./routes');

dotenv.config();

const app = express();

app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));


// Routes
app.use('/api', allRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});