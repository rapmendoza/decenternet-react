import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Beers from './beers';
import BeerDetails from './beerdetails';
import Login from './login';
import Signup from './signup';

const AppWrapper = styled.header`
  background-image: linear-gradient(141deg,#282c34,#363636 71%,#46403f);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 5rem;
`;

const App = () => (
  <AppWrapper>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Beers />
        </Route>
        <Route path="/beer/:id">
          <BeerDetails />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
      </Switch>
    </Router>
  </AppWrapper>
);

export default App;
