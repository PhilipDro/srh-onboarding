// we'll create our routes here
var express = require('express');
var _       = require('lodash');

// import module service
var moduleService = require('../services/module.service.js');

// get an instance of router
var moduleRouter = express.Router();

// home page route
moduleRouter.get('/', function(req, res) {
    res.send('im the module home page!');
});

// about page route
moduleRouter.get('/about', function(req, res) {
    res.send('im the about module page!');
});

moduleRouter.get('/find', function (req, res) {
    let id = req.query.id;
    moduleService.getModuleById(id,
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

module.exports = moduleRouter;
