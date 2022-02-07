const express = require('express');
const app = require('./app');
const path = require('path');
// require('dotenv').config();
// what is the purpose of this long form?
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const { PORT = 5000 } = process.env;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}!`))