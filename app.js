// app.js

import express from 'express';
import pkg from 'body-parser';
import { connect } from 'mongoose';
import userroute from './routers/userRoutes.js';

const app = express();
const { json } = pkg;

// Middleware
app.use(json());

// Routes
app.use('/api/users', userroute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to MongoDB
connect('mongodb://localhost:27017/auth_demo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
