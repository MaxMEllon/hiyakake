'use strict';

const {createStore} = require('fluxible/addons');

module.exports = createStore({
  storeName: 'OtheloStore',

  handlers: {
  },

  initialize() {
    this.board = [];
  },

  setBoard(dispatched) {
    this.board = dispatched.board;
  },

  getBoard() {
    return this.board;
  },

  dehydrate() {
    return {
      board: this.board
    };
  },

  rehydrate(dehydrated) {
    this.setBoard(dehydrated);
  }

});
