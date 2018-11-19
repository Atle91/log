import React from 'react';

import Layout from '../../layout';
import Entry from '../entry';

const LogPage = () => (
  <Layout showFooter={false} showHeader={false}>
    <div className="log-page">
      <h1>Log day</h1>

      <Entry />
    </div>
  </Layout>
);

LogPage.propTypes = {};

export default LogPage;
