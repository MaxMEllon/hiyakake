import Fluxible from 'fluxible';
import Application from './share/components/Application';
import ApplicationStore from './share/stores/ApplicationStore';
import RouteStore from './share/stores/RouteStore';

// create new fluxible instance
const app = new Fluxible({
  component: Application
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);

module.exports = app;
