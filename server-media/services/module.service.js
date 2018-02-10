var connectionPool  = require('../tools/connection-pool');
var _               = require('lodash');

var moduleService = {
  getModuleById : function(id, success, failure){
    connectionPool.query(
      `SELECT name, description, image
          FROM modules`,
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

module.exports = moduleService;
