const express = require('express');
const app = express();
const projectsRouter = require('./projects/projects.router');

// app.use(express.json());

app.use('/', projectsRouter);

module.exports = app;