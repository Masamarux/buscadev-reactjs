import React from 'react';
import { Link } from 'react-router-dom';

import { TitleStyles } from "./styles";

function Title(props) {
  return (
    <div>
      <TitleStyles>
        {
          props.isLink ? <Link idName="LinkTitle" to={'/'}><h1 className="Title">BuscaDev</h1></Link> : <h1 className="Title">BuscaDev</h1>
        }
      </TitleStyles>
    </div>
  );
}

export default Title;