import React from 'react';
import PropTypes from 'prop-types';

import Entry from '../entry';

class LogDay extends React.Component {
  static propTypes = {
    /* ---------------------- 📝 ---------------------- */
  };
  state = {};

  render() {
    return (
      <div className="log-day">
        <h1>Log day</h1>
        <Entry />
      </div>
    );
  }
}

export default LogDay;
