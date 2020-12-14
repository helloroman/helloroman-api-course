import Root from 'views/Root';
import Navigation from 'components/Navigation/Navigation';
import AddStudent from 'views/AddStudent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
  padding: 40px;
  background-color: #E0D8D1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  background-color: #F3F1EB;
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-columns: 90px 1fr;
  border-radius: 15px;
  box-shadow: 0 5px 30px -15px rgba(25, 64, 48, .3);
`;

function App() {
  return (
    <Router>
      <Background>
        <Wrapper>
          <Navigation/>
          <Switch>
            <Route path="/add-student">
              <AddStudent/>
            </Route>
            <Route path="/">
              <Root/>
            </Route>
          </Switch>
        </Wrapper>
      </Background>
    </Router>
  );
}

export default App;
