'use strict';

import Fluxible from 'fluxible';
import Application from './app/components/Application.js';
import ApplicationStore from './app/stores/ApplicationStore.js';
import UserStore from './app/stores/UserStore.js';
import RouteStore from './app/stores/RouteStore.js';

// create new fluxible instance
const app = new Fluxible({
  component: Application
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(UserStore);

module.exports = app;
