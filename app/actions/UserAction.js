'use strict';

const _ = require('lodash');
const debug = require('../utils/Debug')('UserAction');
const keyMirror = require('fbjs/lib/keyMirror');
const Request = require('../utils/Request');

let UserAction;
UserAction = (actionContext, payload) => {
  let type = payload.get('type');
  switch (type) {

  case UserAction.ActionTypes.GetUser:
    return new Promise((resolve, reject) => {
      let name = payload.get('user_name');
      let url = `/users/${name}`;
      debug(`---> Request: ${url}`);
      Request('get', url, payload.get('body')).then(res => {
        let user = _.result(res, 'body');
        debug('===> Dispatch:SET_USER %o', user);
        actionContext.dispatch('SET_USER', {user: user});
      }).then(resolve, reject);
    });

  case UserAction.ActionTypes.GetRepos:
    return new Promise((resolve, reject) => {
      let name = payload.get('user_name');
      let url = `/users/${name}/repos`;
      debug(`---> Request: ${url}`);
      Request('get', url, payload.get('body')).then(res => {
        let repos = _.result(res, 'body');
        debug('===> Dispatch:SET_REPOS %o', repos);
        actionContext.dispatch('SET_REPOS', {repos: repos});
      }).then(resolve, reject);
    });

  default:
    return new Promise((resolve, reject) => {
      debug('==X UnknownActionType');
    });
  }
};

UserAction.displayName = 'UserAction';

UserAction.ActionTypes = keyMirror({
  GetUser: null,
  GetRepos: null
});

UserAction.DispatchTypes = keyMirror({
  SET_USER: null,
  SET_REPOS: null
});

module.exports = UserAction;
