'use strict';

const _ = require('lodash');
const request = require('superagent');

module.exports = (method, path, body) => {
  let baseUrl = 'https://api.github.com';
  let url = `${baseUrl}${path}`;
  method = method.toLowerCase();
  method = method === 'delete' ? 'del' : method;
  return new Promise((resolve, reject) => {
    let req = request[method](url).accept('application/json');
    _.each(body, (key, val) => {
      req = req.field(key, val);
    });
    req.end((reason, res) => {
      let statusCode = _.result(res, 'status') || _.result(reason, 'status');
      reason ? reject(_.extend(reason, {statusCode})) : resolve(res);
    });
  });
};
