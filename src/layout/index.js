import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Pageview from './Pageview';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <>
    <Header />
    <Sidebar />
    <Pageview>{children}</Pageview>
  </>
);

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
