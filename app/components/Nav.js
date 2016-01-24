'use strict';

import React from 'react';
import {NavLink} from 'fluxible-router';

let Nav = React.createClass({
  displayName: 'Nav',

  propTypes: {
    selected: React.PropTypes.any,
    currentRoute: React.PropTypes.any,
    links: React.PropTypes.object.isRequired
  },

  getDefaultProps() {
    return {
      selected: null,
      links: {}
    };
  },

  render() {
    const selected = this.props.currentRoute;
    const links = this.props.links;

    const linkHTML = Object.keys(links).map((name) => {
      var className = '';
      var link = links[name];

      if (selected && selected.get('name') === name) {
        className = 'pure-menu-selected';
      }

      return (
        <li className={className} key={link.path}>
          <NavLink routeName={link.page} activeStyle={{backgroundColor: '#eee'}}>{link.title}</NavLink>
        </li>
      );
    });

    return (
      <ul className='pure-menu pure-menu-open pure-menu-horizontal'>
        {linkHTML}
      </ul>
    );
  }
});

export default Nav;
