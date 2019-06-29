import React from 'react'

import './styles/BadgesListItem.css';
import Gravatar from './Gravatar';

function BadgesListItems (props) {
  const badge = props.badge;
  return(
    // <li className="BadgesListItem" key={badge.id}>
      <div className="container">
        <div className="row">
          <Gravatar
            className="BadgesListItem__avatar"
            email={badge.email}
            avatarUrl={badge.avatarUrl}
            alt="avatar"
          />
          <p>
            {badge.firstName} {badge.lastName}
            <br />
            <img
              src="http://aux2.iconspalace.com/uploads/twitter-icon-256-2130177043.png"
              height="20px"
              width="20px"
              alt=""
            />
            @{badge.twitter}
            <br />
            {badge.jobTitle}
          </p>
        </div>
      </div>
    // </li>
  );
};

export default BadgesListItems;