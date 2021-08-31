import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_USER_REPOS_DATA } from '../queries/queries';

import NotFound from '../pages/NotFound';

function ReposBox(props) {
  const [ user ] = useState(props.user);
  const [ totalCount ] = useState(props.reposTotalCount);
  const { loading, error, data } = useQuery(GET_USER_REPOS_DATA, {
    variables: {
      userLogin: user,
      totalCount: totalCount,
      direction: 'DESC',
      field: 'UPDATED_AT'
    }
  });

  if(loading) return <p>Carregando3...</p>;
  if(error) return <NotFound/>;
  return (
    <div>
      <ul>
        {data.user.repositories.nodes.map((repo, index) => {
          return <li key={index}>{repo.name}</li>
        })}
      </ul>
    </div>
  );
}

export default ReposBox;