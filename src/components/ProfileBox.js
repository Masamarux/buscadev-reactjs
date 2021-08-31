import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { GET_USER_DATA } from '../queries/queries';

import NotFound from '../pages/NotFound';
import { Button } from 'react-bootstrap';

function ProfileBox(props) {
  const [ user ] = useState(props.user);
  const [ totalCount ] = useState(props.reposTotalCount);
  const { loading, error, data } = useQuery(GET_USER_DATA, {
    variables: {
      userLogin: user,
      totalCount: totalCount,
    }
  });
  const history = useHistory();

  if(loading) return <p>Carregando2...</p>;
  if(error) return <NotFound/>;
  return (
    <div>
      {data.user.name}
      <Button onClick={() => history.push('/')}>Pesquisar outro usuário</Button>
    </div>
  );
}

export default ProfileBox;