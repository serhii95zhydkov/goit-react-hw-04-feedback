import PropTypes from 'prop-types';
import { StyledNotification } from './Notification.styled';

const Notification = ({ message }) => {
  return <StyledNotification>{message}</StyledNotification>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
