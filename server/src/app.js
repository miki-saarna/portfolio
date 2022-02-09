const express = require('express');
const app = express();
const cors = require('cors');
const projectsRouter = require('./projects/projects.router');
const formRouter = require('./form/form.router');

// app.use(cors({
//     origin: 'https://portfolio-client-pied.vercel.app'
// }))

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(express.json());

app.use('/projects', projectsRouter);
app.use('/form', formRouter);

module.exports = app;