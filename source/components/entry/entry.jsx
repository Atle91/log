import React from 'react';
import PropTypes from 'prop-types';

const Entry = () => (
  <div className="entry">
    <label>Time</label>
    <input className="entry" placeholder={''} />
    <label>What</label>
    <input className="entry" placeholder={''} />
  </div>
);

Entry.propTypes = {
  /* --------------------- 📝 --------------------- */
};
export default Entry;
