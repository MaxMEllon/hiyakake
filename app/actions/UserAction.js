'use strict';

const _ = require('lodash');
const debug = require('debug');
const keyMirror = require('fbjs/lib/keyMirror');
const Request = require('../utils/Request');

let UserAction;
UserAction = (actionContext, payload) => {
  switch (payload.get('type')) {

  case UserAction.ActionTypes.GetUser:
    return new Promise((resolve, reject) => {
      let name = payload.get('user_name');
      console.log(`---> Request: /users/${name} UserAction:GetUser`);
      Request('get', `/users/${name}`, payload.get('body')).then(res => {
        let user = [_.result(res, 'body')];
        console.log('===> UserAction:Dispatch:SET_USER %o', user);
        actionContext.dispatch('SET_USER', {user: user[0]});
      }).then(resolve, reject);
    });
  }
};

UserAction.displayName = 'UserAction';

UserAction.ActionTypes = keyMirror({
  GetUser: null
});

UserAction.DispatchTypes = keyMirror({
  SET_USER: null
});

module.exports = UserAction;
