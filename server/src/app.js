const express = require('express');
const app = express();
const cors = require('cors');
const projectsRouter = require('./projects/projects.router');

app.use(cors({
    origin: 'http://localhost:3000'
}))

// app.use(express.json());

app.use('/projects', projectsRouter);

module.exports = app;