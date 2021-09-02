import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'react-bootstrap';

function HomeButton(props) {
  const history = useHistory();
  return (
    <div>
      <Button onClick={() => history.push('/')}>Voltar para Home</Button>
    </div>
  );
}

export default HomeButton;