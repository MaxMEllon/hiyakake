'use strict';

const Immutable = require('immutable');
const UserAction = require('../app/actions/UserAction.js');

export default {
  home: {
    path: '/',
    method: 'get',
    page: 'home',
    title: 'Index',
    handler: require('../app/views/Index.js'),
  },
  user: {
    path: '/user',
    method: 'get',
    page: 'user',
    title: 'User',
    handler: require('../app/views/User.js'),
    action(context, payload, done) {
      Promise.all([
        context.executeAction(UserAction, Immutable.fromJS({
          type: UserAction.ActionTypes.GetUser,
          user_name: 'maxmellon',
          body: {}
        }))
      ]).then(() => done(), done);
    }
  },
  repo: {
    path: '/repo',
    method: 'get',
    page: 'repo',
    title: 'Repos',
    handler: require('../app/views/Repo.js'),
    action(context, payload, done) {
      Promise.all([
        context.executeAction(UserAction, Immutable.fromJS({
          type: UserAction.ActionTypes.GetRepos,
          user_name: 'maxmellon',
          body: {}
        }))
      ]).then(() => done(), done);
    }
  }
};
