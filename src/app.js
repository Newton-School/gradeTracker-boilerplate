const express = require('express');
const app = express();
const gradeRoutes = require('../routes/studentRoutes');

app.use(express.json());

app.use('/api/v1', gradeRoutes);

module.exports = app;
