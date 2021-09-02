import React from 'react';

import { NotFoundBoxStyle } from './styles';

function NotFoundBox(props) {
  return (
    <div>
      <NotFoundBoxStyle>
        <h1>404</h1>
        <p>Algo de errado está errado...</p>
      </NotFoundBoxStyle>
    </div>
  );
}

export default NotFoundBox;