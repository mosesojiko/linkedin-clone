//let's work on the login component

/* 
1. npm install react-router-dom, npm install styled-components
2. create a components folder in src, and create Login.js component
3. render Login.js in App.js
//you install vscode styled component extension to make the styles look good.
*/

//Login.js
import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href = '/'>
                    <img src = "/images/login-logo.png" alt="" />
                </a>
            </Nav>
        </Container>
    )
}
const Container = styled.div`
padding: 0px;
`;
const Nav = styled.nav`
max-width: 1128px;
margin: auto;
padding: 12px 0 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;

a > * {
    width: 135px;
    
    @media (max-width: 576px) {
        padding: 0 5px;
    }
}

`
export default Login;

//App.js modified
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
