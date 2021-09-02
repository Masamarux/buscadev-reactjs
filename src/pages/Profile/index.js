import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_REPOS_TOTAL_COUNT } from '../../queries/queries';

import NotFound from '../NotFound/index';
import Title from '../../components/Title/index';
import ProfileBox from '../../components/ProfileBox/index';
import ReposBox from '../../components/ReposBox/index';
import Footer from '../../components/Footer/index';
import Loading from '../../components/Loading/index';

import { Row, Col } from 'react-bootstrap';

import { ProfileStyles } from './style';

function Profile(props) {
  const { user } = useParams();
  const { loading, error, data } = useQuery(GET_REPOS_TOTAL_COUNT, {
    variables: {
      userLogin: user,

    }
  });

  if( loading ) return <Loading/>;
  if( error || data.user.repositories.totalCount > 100) return <NotFound/>;
  return (
    <div>
      <ProfileStyles>
        <Row>
          <Col sm={4}>
            <Title isLink={true}/>
            <ProfileBox user={user} reposTotalCount={data.user.repositories.totalCount}/>
          </Col>
          <Col sm={8}>
            <ReposBox user={user} reposTotalCount={data.user.repositories.totalCount}/>
          </Col>
        </Row>
        <Row>
          <Footer/>
        </Row>
      </ProfileStyles>
    </div>
  );
}

export default Profile;