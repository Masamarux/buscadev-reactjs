import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_USER_REPOS_DATA } from '../queries/queries';
import { elapsedTime, getDate } from '../scripts/managingTime';

import NotFound from '../pages/NotFound';

import { Row, Col, CardColumns, Card, Badge, Form } from 'react-bootstrap';
import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';

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
      <Card>
        <Card.Header>
          <Col sm={12} className="text-center lead">
            <p>Opções de Ordenação</p>
          </Col>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col sm={6}>
              <Form.Select value={variables.field} onChange={handleField} aria-label="Campo dos repositórios">
              <option value="UPDATED_AT">Atualização</option>
              <option value="CREATED_AT">Criação</option>
              <option value="NAME">Nome</option>
              <option value="STARGAZERS">Estrelas</option>
              </Form.Select>
            </Col>
            <Col sm={6}>
              <Form.Select value={variables.direction} onChange={handleDirection} aria-label="Direção dos repositórios">
              <option value="DESC">Decrescente</option>
              <option value="ASC">Crescente</option>
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
            <Card className="text-center" key={index}>
              <Card.Header>
                <Row>
                  <Col sm={10}>
                    <Link to={{pathname: repo.url}} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Row><Badge>{repo.stargazerCount}</Badge></Row>
                    <Row>{repo.isPrivate ? <Badge bg="secondary"><BsFillLockFill/>Privado</Badge> : <Badge bg="success"><BsFillUnlockFill/>Público</Badge>}</Row>
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

  if(loading) return <p>Carregando3...</p>;
  if(error) return <NotFound/>;
  return (
    <div>
      <CardColumns>
        {renderController()}
        {renderRepos()}
      </CardColumns>
    </div>
  );
}

export default ReposBox;