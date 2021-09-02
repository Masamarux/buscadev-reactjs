import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  { ApolloProvider } from "@apollo/client";

import Home from './pages/Home/index';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

import apollo from './services/apollo';

import { Container } from 'react-bootstrap';
import { GlobalStyles } from './globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <ApolloProvider client={apollo}>
        <Router>
          <Container>
            <Switch>
              <Route path="/" exact><Home/></Route>
              <Route path="/:user"><Profile/></Route>
              <Route><NotFound/></Route>
            </Switch>
          </Container>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
