'use strict';

const _ = require('lodash');
const React = require('react');
const Immutable = require('immutable');
// const ImmutablePropTypes = require('react-immutable-proptypes');
const {connectToStores} = require('fluxible-addons-react');
const UserAction = require('../actions/UserAction.js');

let IndexPage = React.createClass({
  displayName: 'IndexPage',

  propTypes:{
    user: React.PropTypes.any
  },

  contextTypes: {
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
  },

  componentDidMount() {
  },

  render() {
    return (
      <div>
        <h2>Index</h2>
        <p>Welcome to the site!</p>
      </div>
    );
  }
})

export default IndexPage;
