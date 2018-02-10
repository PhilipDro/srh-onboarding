var mysql   = require('mysql');
var mySqlConfig  = require('../config.json').mysql;

var connectionPool  = mysql.createPool(mySqlConfig);
process.on('exit', function(code) {
    connectionPool.end(error => console.error(error));
});

module.exports = connectionPool;
