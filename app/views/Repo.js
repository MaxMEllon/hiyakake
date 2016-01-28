'use strict';

const _ = require('lodash');
const React = require('react');
const Immutable = require('immutable');
// const ImmutablePropTypes = require('react-immutable-proptypes');
const {connectToStores, provideContext} = require('fluxible-addons-react');
const UserAction = require('../actions/UserAction.js');
const List = require('../components/List.js');

let RepoPage = React.createClass({
  displayName: 'RepoPage',

  propTypes:{
    repos: React.PropTypes.any,
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


  render() {
    console.log('+++> render:RepoPage');
    return (
      <div>
        <ul>
          {(() => {
            let repos = [];
            for (var i = 0; i < this.props.repos.size; i++) {
              let name = this.props.repos.get(i).name;
              repos.push(<List key={i} name={name} />);
            }
            return repos;
          })()}
        </ul>
      </div>
    );
  }
})

RepoPage = connectToStores(RepoPage, ['UserStore'], context => {
  return {
    repos: context.getStore('UserStore').getRepos()
  };
});

export default RepoPage;

