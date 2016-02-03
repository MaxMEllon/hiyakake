'use strict';

const _ = require('lodash');
const React = require('react');
const Immutable = require('immutable');
// const ImmutablePropTypes = require('react-immutable-proptypes');
const {connectToStores, provideContext} = require('fluxible-addons-react');
const UserAction = require('../actions/UserAction.js');

let UserPage = React.createClass({
  displayName: 'UserPage',

  propTypes:{
    user: React.PropTypes.any,
  },

  contextTypes: {
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
  },

  componentWillReceiveProps(nextProps) {
  },

  componentDidMount() {
  },

  componentWillUnmount() {
  },

  renderUserInfo() {
    return (
      <div>
        <h1>
          {this.props.user.get('login')}
        </h1>
        <hr />
        <ul>
          <li>
            {this.props.user.get('name')}
          </li>
          <li>
            {this.props.user.get('company')}
          </li>
        </ul>
      </div>
    );
  },

  render() {
    console.log('+++> render:UserPage');
    return (
      <div>
        {this.renderUserInfo()}
      </div>
    );
  }
})

UserPage = connectToStores(UserPage, ['UserStore'], context => {
  return {
    user: context.getStore('UserStore').getUser()
  };
});

export default UserPage;

