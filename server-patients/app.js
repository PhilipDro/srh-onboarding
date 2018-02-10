// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var cors = require('cors');

var userRouter = require('./routers/user.router.js');

// on production remove in favor of a common gateway server
app.use(cors());

// ROUTES
// ==============================================

app.use('/user', userRouter);

// START THE SERVER
// ==============================================
app.listen(3000);
console.log('patient server running on port 3000');
