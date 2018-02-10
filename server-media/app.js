// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var cors = require('cors');

var moduleRouter = require('./routers/module.router.js');

// on production remove in favor of a common gateway server
app.use(cors());

// ROUTES
// ==============================================

app.use('/module', moduleRouter);

// START THE SERVER
// ==============================================
app.listen(2222);
console.log('media server running on port 2222');
