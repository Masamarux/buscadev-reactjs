import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory, Link } from 'react-router-dom';

import { GET_USER_DATA } from '../queries/queries';

import NotFound from '../pages/NotFound';
import { Button, Card, Image, Row, Col } from 'react-bootstrap';
import { BsPeopleFill, BsAt, BsHeartFill, BsFillStarFill, BsStar, BsGeoAlt, BsFillEnvelopeFill } from "react-icons/bs";
import { FaTwitter, FaBuilding, FaGlobe, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BiBookAlt } from "react-icons/bi";

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

  function getStarsAmount () {
    return data.user.repositories.nodes.reduce((starAmount, nodes) => {
      return starAmount + nodes.stargazerCount;
    }, 0);
  }

  function renderProfile () {
    return(
      <Card>
        <Link to={{pathname: data.user.url}} target="_blank" rel="noopener noreferrer"> 
          <Image className="p-5" src={data.user.avatarUrl} roundedCircle fluid/> 
        </Link>
        <Card.Body>
          <Card.Title>{data.user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><BsAt/>{data.user.login}</Card.Subtitle>
          <Card.Text className="text-center">
            <FaQuoteLeft className="small"/>{data.user.bio ? data.user.bio : "Sem biografia"}<FaQuoteRight className="small"/>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Row>
            <Col lg={6}>
              <span><BsPeopleFill className="small"/> {data.user.followers.totalCount} Seguidores</span>            
            </Col>
            <Col lg={6}>
              <span><BsHeartFill className="small"/> {data.user.following.totalCount} Seguindo</span>             
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <span><BsFillStarFill className="small"/> {data.user.starredRepositories.totalCount} Estrelas Dadas</span>           
            </Col>
            <Col lg={6}>
              <span><BsStar className="small"/> {getStarsAmount()} Estrelas Recebidas</span>         
            </Col>
          </Row>
          <Row>
            {<span><BiBookAlt className="small"/> {totalCount} Repositórios</span>}
          </Row>
        </Card.Body>
        <Card.Body>
          <Row>
            {data.user.company ? <span><FaBuilding className="small"/> {data.user.company}</span> : null}
          </Row>
          <Row>
            {data.user.location ? <span><BsGeoAlt className="small"/> {data.user.location}</span> : null}
          </Row>
          <Row>
            {data.user.email ? <span><BsFillEnvelopeFill className="small"/> {data.user.email}</span>: null}
          </Row>
          <Row>
            {data.user.websiteUrl ? <span><FaGlobe className="small"/> <Link to={{pathname: data.user.websiteUrl}} target='_blank'> {data.user.websiteUrl}</Link></span> : null}
          </Row>
          <Row>
            {data.user.twitterUsername ? <span><FaTwitter className="small"/> <BsAt className="small"/> {data.user.twitterUsername}</span> : null}
          </Row>
        </Card.Body>
        <Card.Body className="text-center">
          <Button onClick={() => history.push('/')}>Pesquisar outro usuário</Button>
        </Card.Body>
      </Card>
    );
  }

  if(loading) return <p>Carregando2...</p>;
  if(error) return <NotFound/>;
  return (
    <div>
      {renderProfile()}
    </div>
  );
}

export default ProfileBox;