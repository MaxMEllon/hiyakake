'use strict';

import React from 'react';
import Nav from './Nav.js';
import ApplicationStore from '../stores/ApplicationStore.js';
import {connectToStores} from 'fluxible-addons-react';
import pages from '../../configs/routes.js';

let Application = React.createClass({
  displayName: 'Application',

  propTypes: {
    currentRoute: React.PropTypes.any,
    pageTitle: React.PropTypes.string
  },

  componentDidUpdate(prevProps, prevState) {
    const newProps = this.props;
    if (newProps.pageTitle === prevProps.pageTitle) {
      return;
    }
    document.title = newProps.pageTitle;
  },

  render() {
    var Handler = this.props.currentRoute.get('handler');
    return (
      <div>
        <Nav currentRoute={this.props.currentRoute} links={pages} />
        <Handler />
      </div>
    );
  }
});

Application = connectToStores(Application, [ApplicationStore], (context) => {
  let appStore = context.getStore(ApplicationStore);
  return {
    pageTitle: context.getStore(ApplicationStore).getPageTitle(),
    currentRoute: context.getStore('RouteStore').getCurrentRoute()
  };
});

export default Application;
