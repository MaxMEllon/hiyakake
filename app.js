'use strict';

import Fluxible from 'fluxible';
import Application from './share/components/Application.js';
import ApplicationStore from './share/stores/ApplicationStore.js';
import RouteStore from './share/stores/RouteStore.js';

// create new fluxible instance
const app = new Fluxible({
  component: Application
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);

module.exports = app;
