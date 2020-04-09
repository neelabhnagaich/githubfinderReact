import React from 'react';
import UsersItems from './UsersItems';
import Spinner from '../layout/spinner.gif';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  if (loading) {
    return <img src={Spinner} alt='loading....' />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UsersItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
