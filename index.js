"use strict";

const express = require('express'),
  app = express(),
  port = 3300,
  fs = require('fs'),
  { SearchController } = require('./controllers/SearchController')

app.get('/', SearchController)

app.listen(port, () => {
  console.log(`App started on port ${port}`)
})
