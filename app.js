'use strict';

import Fluxible from 'fluxible';
import Application from './app/components/Application.js';
import ApplicationStore from './app/stores/ApplicationStore.js';
import RouteStore from './app/stores/RouteStore.js';

// create new fluxible instance
const app = new Fluxible({
  component: Application
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);

module.exports = app;
