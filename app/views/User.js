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

  getInitialState() {
    return {
      visible: false
    };
  },

  contextTypes: {
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
  },

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (!nextProps.user === null) {
      this.setState({visible: true});
    }
  },

  componentDidMount() {
  },

  componentWillUnmount() {
  },

  renderUserInfo() {
    if (this.state.visible === true) {
      return (
        <div>
          <h1>
            {this.props.user.name}
          </h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>
            Loading...
          </h1>
        </div>
      );
    }
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

