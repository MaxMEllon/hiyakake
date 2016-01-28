'use strict';

import React from 'react';

let List = React.createClass({
  displayName: 'ListComponent',

  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
});

export default List;
