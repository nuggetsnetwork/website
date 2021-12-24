import React from 'react';
import PropTypes from '../utils/propTypes';

import { Media } from 'reactstrap';

import Avatar from './Avatar';

const Notifications = ({ notificationsData,openModal }) => {
  return ( 
    notificationsData &&
    notificationsData.length &&
    notificationsData.map(({ index, avatar, fTitle, publish_date, url, img }) => (
      <Media key={fTitle} className="pb-2" onClick={() => openModal(url,fTitle)}>
        <Media left className="align-self-center pr-3">
          <Avatar tag={Media} object src={img} alt="Avatar" />
        </Media>
        <Media body middle className="align-self-center">
          {fTitle}
        </Media>
        <Media right className="align-self-center">
          <small className="text-muted">{publish_date}</small>
        </Media>
      </Media>
    ))
  );
};

Notifications.propTypes = {
  notificationsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      avatar: PropTypes.string,
      message: PropTypes.node,
      date: PropTypes.date,
    })
  ),
};

Notifications.defaultProps = {
  notificationsData: [],
};

export default Notifications;
