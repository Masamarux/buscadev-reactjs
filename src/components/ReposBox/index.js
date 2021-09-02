import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_USER_REPOS_DATA } from '../../queries/queries';
import { elapsedTime, getDate } from '../../scripts/managingTime';

import NotFound from '../../pages/NotFound/index';
import Loading from '../../components/Loading/index';

import { Row, Col, CardColumns, Card, Badge, Form } from 'react-bootstrap';
import { BsFillLockFill, BsFillUnlockFill, BsStar } from 'react-icons/bs';

import { ReposBoxStyles } from './styles';

function ReposBox(props) {
  const [ user ] = useState(props.user);
  const [ totalCount ] = useState(props.reposTotalCount);
  const [ variables, setVariables ] = useState({
    field: 'UPDATED_AT',
    direction: 'DESC'
  });
  const { loading, error, data } = useQuery(GET_USER_REPOS_DATA, {
    variables: {
      userLogin: user,
      totalCount: totalCount,
      direction: variables.direction,
      field: variables.field
    }
  });

  function handleDirection (event) {
    setVariables({
      field: variables.field,
      direction: event.target.value
    });
  }

  function handleField (event) {
    setVariables({
      field: event.target.value,
      direction: variables.direction
    })
  }

  function renderController () {
    return(
      <Card className="ControllerCard">
        <Card.Header>
          <Col sm={12} className="text-center lead">
            <p>Opções de Ordenação</p>
          </Col>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col sm={6}>
              <Form.Select value={variables.field} onChange={handleField} aria-label="Campo dos repositórios">
              <option className="Selection" value="UPDATED_AT">Atualização</option>
              <option className="Selection" value="CREATED_AT">Criação</option>
              <option className="Selection" value="NAME">Nome</option>
              <option className="Selection" value="STARGAZERS">Estrelas</option>
              </Form.Select>
            </Col>
            <Col sm={6}>
              <Form.Select value={variables.direction} onChange={handleDirection} aria-label="Direção dos repositórios">
              <option className="Selection" value="DESC">Decrescente</option>
              <option className="Selection" value="ASC">Crescente</option>
              </Form.Select>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
  function renderRepos () {
    if(data){
      return(
        data.user.repositories.nodes.map((repo, index) => {
          return(
            <Card className="Card text-center" key={index}>
              <Card.Header className="CardHeader">
                <Row>
                    <Col sm={2}>
                      <Row><Badge className="BadgeRepoStars"><BsStar className="small"/>{repo.stargazerCount}</Badge></Row>
                      <Row>{repo.isPrivate ? <Badge bg="secondary"><BsFillLockFill/>Privado</Badge> : <Badge bg="success"><BsFillUnlockFill/>Público</Badge>}</Row>
                    </Col>
                    <Col sm={10}>
                      <Link className="lead  " to={{pathname: repo.url}} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                      </Link>
                    </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {repo.description ? repo.description : "Não tem descrição"}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Row>
                  <Col sm={12}>
                    Criado em {getDate(repo.createdAt)}                  
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    Atualizado a {elapsedTime(repo.updatedAt)} dias atrás
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          )
        })
      );
    }
  }

  if(loading) return <Loading/>;
  if(error) return <NotFound/>;
  return (
    <div>
      <CardColumns>
        <ReposBoxStyles>
          {renderController()}
          {renderRepos()}
        </ReposBoxStyles>
      </CardColumns>
    </div>
  );
}

export default ReposBox;