'use strict';

import Fluxible from 'fluxible';
import Application from './app/components/Application';
import ApplicationStore from './app/stores/ApplicationStore';
import UserStore from './app/stores/UserStore';
import RouteStore from './app/stores/RouteStore';

// create new fluxible instance
const app = new Fluxible({
  component: Application
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(UserStore);

module.exports = app;
