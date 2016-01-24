'use strict';

import React from 'react';
import ApplicationStore from '../stores/ApplicationStore.js';

let Html = React.createClass({
  displayName: 'HtmlComponent',

  propTypes: {
    state: React.PropTypes.any,
    markup: React.PropTypes.any,
    clientFile: React.PropTypes.string.isRequired,
    context: React.PropTypes.any,
  },

  render() {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{`${this.props.context.getStore(ApplicationStore).getPageTitle()} | Hiyakake`}</title>
          <meta name='viewport' content='width=device-width, user-scalable=no' />
          <link rel='stylesheet' href='http://yui.yahooapis.com/pure/0.5.0/pure-min.css' />
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
          <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
          <script src={'/public/js/' + this.props.clientFile}></script>
        </body>
      </html>
    );
  }
});

export default Html;
