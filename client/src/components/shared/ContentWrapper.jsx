
import React from 'react';
import './content-wrapper.css';

const ContentWrapper = React.memo(({ children }) => {
  return (
    <div className="content-wrapper">
      {children}
    </div>
  );
});

ContentWrapper.displayName = 'ContentWrapper';

export default ContentWrapper;
