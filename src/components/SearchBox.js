import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

function SearchBox(props) {
  const [ input, setInput ] = useState('');
  const history = useHistory();

  function changeInput (event) {
    setInput(event.target.value);
  }

  function handleKeyPress (event) {
    if(event.key === 'Enter') {
      history.push(`/profile/${input}`);
    }
  }

  return (
    <div>
      <InputGroup>
        <FormControl value={input} onChange={changeInput} onKeyUp={handleKeyPress} placeholder="Usuário" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <Button onClick={() => console.log(input)} variant="outline-success">
          <BsSearch/>
        </Button>
      </InputGroup>
    </div>
  );
}

export default SearchBox;