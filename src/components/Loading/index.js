import React from 'react';

import { Spinner } from 'react-bootstrap';

import { LoadingStyle } from './styles'

function Loading(props) {
  return (
    <div>
      <LoadingStyle>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </LoadingStyle>
    </div>
  );
}

export default Loading;