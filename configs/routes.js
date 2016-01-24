'use strict';

const Immutable = require('immutable');
const UserAction = require('../app/actions/UserAction.js');

export default {
  home: {
    path: '/',
    method: 'get',
    page: 'home',
    title: 'Index',
    handler: require('../app/pages/Index.js'),
    action(context, payload, done) {
      Promise.all([
        context.executeAction(UserAction, Immutable.fromJS({
          type: UserAction.ActionTypes.GetUser,
          user_name: 'maxmellon',
          body: {}
        }))
      ]).then(() => done(), done);
    }
  }
};
