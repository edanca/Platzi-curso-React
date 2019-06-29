import React from 'react'

import './styles/PageError.css';

function PageError(props) {
  return (
    <div className="PageError">
      {'\u{1F92F}'} {props.error.message} {'\u{1F468}\u{200D}\u{1F692}'}
    </div>
  );
};

export default PageError;