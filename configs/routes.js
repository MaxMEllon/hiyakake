'use strict';

export default {
  home: {
    path: '/',
    method: 'get',
    page: 'home',
    title: 'Index',
    handler: require('../app/pages/Index.js')
  }
};
