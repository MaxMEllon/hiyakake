'use strict';

export default {
  home: {
    path: '/',
    method: 'get',
    page: 'home',
    title: 'Index',
    handler: require('../share/pages/Index.js')
  }
};
