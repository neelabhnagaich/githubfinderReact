import React, { useContext } from 'react';
import UsersItems from './UsersItems';
import Spinner from '../layout/spinner.gif';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
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

export default Users;
