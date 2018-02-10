// we'll create our routes here
var express = require('express');
var _       = require('lodash');

// import user service
var userService = require('../services/user.service.js');

// get an instance of router
var userRouter = express.Router();

// home page route
userRouter.get('/', function(req, res) {
    res.send('im the user home page!');
});

// about page route
userRouter.get('/about', function(req, res) {
    res.send('im the about user page!');
});

userRouter.get('/find', function (req, res) {
    let id = req.query.id;
    userService.getUserById(id,
        result => {
            if(_.isNil(result)){
                res.status(404).end();
            } else {
                res.json(result);
            }
        },
        error => {
            console.error(error)
            res.status(500).end();
        }
    );
});

module.exports = userRouter;
