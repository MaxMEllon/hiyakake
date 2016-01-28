'use strict';

const Immutable = require('immutable');
const {createStore} = require('fluxible/addons');

module.exports = createStore({
  storeName: 'UserStore',

  handlers: {
    SET_USER: 'setUser',
    SET_REPOS: 'setRepos'
  },

  initialize() {
    this.user = null;
    this.repos = null;
  },

  setUser(dispatched) {
    let user = Immutable.fromJS(dispatched.user);
    if (!Immutable.is(this.user, user)) {
      this.user = user;
      console.log('UserStore:setUser: %o', user);
      this.emitChange();
    }
  },

  setRepos(dispatched) {
    let repos = Immutable.List(dispatched.repos);
    if (!Immutable.is(this.repos, repos)) {
      this.repos = repos;
      console.log('UserStore:setRepos: %o', repos);
      this.emitChange();
    }
  },

  getUser() {
    return this.user;
  },

  getRepos() {
    return this.repos;
  },

  dehydrate() {
    return {
      users: this.user.toJS()
    };
  },

  rehydrate(dehydrated) {
    this.setUser(dehydrated);
  }

});
