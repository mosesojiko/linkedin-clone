// Build the Header and Home component

/*
1. create a file in components called Home.js 
2. create a file in components called Header.js
3. In App.js, make route for /home and point it to the Home.js, Header.js component
 */

//Home.js 
import styled from 'styled-components';

const Home = (props) => {
    return <div>Home</div>
}

export default Home;

//Header.js
import styled from 'styled-components';

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href = "/home">
                        <img src ="/images/logo.jpg" alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input  type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        {/* Link to search icon svg */}
                    </SearchIcon>
                </Search>
            </Content>
        </Container>
    )
}
const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
left: 0;
padding: 0 24px;
position: fixed;
top: 0;
width: 100vw;
z-index: 100;
`;

const Content = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
min-height: 100%;
max-width: 1128px;
`;

const Logo = styled.span`
margin-right: 8px;
font-size: 0px;

img {
    width: 40px
}
`;

const Search = styled.div`
opacity: 1;
flex-grow: 1;
position: relative;
  div {
    max-width: 260px;
    input {
        border: none;
        box-shadow: none;
        background-color: #eef3f8;
        border-radius: 2px;
        color: rgba(0,0,0,0.9);
        width: 214px;
        padding: 0 6px 0 40px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 14px;
        height: 34px;
        border-color: #dca553;
        vertical-align: text-top;
    }
}
`;

const SearchIcon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 10px;
left: 2px;
border-radius: 0 2px 2px 0;
margin: 0;
pointer-events: none; 
display: flex;
justify-content: center;
align-items: center;

`;
export default Header;

//modifies App.js
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/">
            <Login />
          </Route>
          <Route path ="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
