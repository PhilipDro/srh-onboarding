var connectionPool  = require('../tools/connection-pool');
var _               = require('lodash');

var moduleService = {
  getModuleById : function(success, failure){
    connectionPool.query(
      "SELECT moduleId, name, description, image FROM modules",
      function (error, results, fields) {
          if (_.isNil(error) && _.isFunction(success)) {
              success(results);
          } else if(_.isFunction(failure)){
              failure(error);
          }
        }
    );
  },
}

module.exports = moduleService;
