import React from 'react';
import PropTypes from 'prop-types';

const UsersItems = ({ user: { login, avator_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avator_url}
        alt='img'
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          Login
        </a>
      </div>
    </div>
  );
};

UsersItems.propTypes = {
  icon: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
export default UsersItems;
