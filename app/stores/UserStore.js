'use strict';

const Immutable = require('immutable');
const {createStore} = require('fluxible/addons');

module.exports = createStore({
  storeName: 'UserStore',

  handlers: {
    SET_USER: 'setUser',
  },

  initialize() {
    this.user = null;
  },

  setUser(dispatched) {
    let {user} = dispatched;
    if (!Immutable.is(this.user, user)) {
      this.user = Immutable.Map(user);
      this.emitChange();
    }
  },

  getUser() {
    return this.user;
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
