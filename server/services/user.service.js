var connectionPool  = require('../tools/connection-pool');
var _               = require('lodash');

var userService = {
  getUserById : function(id, success, failure){
    connectionPool.query(
      `SELECT firstname, lastname
          FROM user WHERE id = 6`,
      [id],
      function (error, results, fields) {
          if (_.isNil(error) && _.isFunction(success)) {
              success(results[0]);
          } else if(_.isFunction(failure)){
              failure(error);
          }
        }
    );
  },
}

module.exports = userService;
