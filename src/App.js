import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Switch>
            <Route path="/"><Home/></Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
