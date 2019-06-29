import React from 'react';

import md5 from 'md5';

function Gravatar (props) {
  let imageUrl = '';
  
  if (props.avatarUrl) {
    imageUrl = props.avatarUrl;
  } else {
    const email = props.email;
    const hash = md5(email || 'skynex@hotmail.es');
    imageUrl = `http://gravatar.com/avatar/${hash}`;
  }

  return (
    <img
      className={props.className}
      src={imageUrl}
      alt="Avatar"
    />
  );
};

export default Gravatar;