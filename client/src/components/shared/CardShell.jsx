
import React from 'react';
import PropTypes from 'prop-types';
import './content-wrapper.css';

const ContentWrapper = React.memo(({ children }) => {
  return (
    <div className="content-wrapper">
      {children}
    </div>
  );
});

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

ContentWrapper.displayName = 'ContentWrapper';

export default ContentWrapper;
