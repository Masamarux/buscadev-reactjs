import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

import { SearchBoxStyle } from './styles';

function SearchBox(props) {
  const [ input, setInput ] = useState('');
  const history = useHistory();

  function changeInput (event) {
    setInput(event.target.value.toLowerCase());
  }

  function handleKeyPress (event) {
    if(event.key === 'Enter') {
      history.push(`/${input}`);
    }
  }
  function handleClick (event) {
    history.push(`/${input}`);
  }

  return (
    <div>
      <SearchBoxStyle>
        <InputGroup className="InputGroup">
          <FormControl value={input} onChange={changeInput} onKeyUp={handleKeyPress} placeholder="Usuário" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <Button onClick={handleClick}>
            <BsSearch/>
          </Button>
        </InputGroup>
      </SearchBoxStyle>
    </div>
  );
}

export default SearchBox;