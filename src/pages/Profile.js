import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_REPOS_TOTAL_COUNT } from '../queries/queries';

import NotFound from '../pages/NotFound';
import Title from '../components/Title';
import ProfileBox from '../components/ProfileBox';
import ReposBox from '../components/ReposBox';
import Footer from '../components/Footer';

function Profile(props) {
  const { user } = useParams();
  const { loading, error, data } = useQuery(GET_REPOS_TOTAL_COUNT, {
    variables: {
      userLogin: user,

    }
  });

  if( loading ) return <p>Carregando1...{user}</p>;
  if( error || data.user.repositories.totalCount > 100) return <NotFound/>;
  return (
    <div>
      <Title/>
      <ProfileBox user={user} reposTotalCount={data.user.repositories.totalCount}/>
      <ReposBox user={user} reposTotalCount={data.user.repositories.totalCount}/>
      <Footer/>
    </div>
  );
}

export default Profile;