// Look for a way to store information

/*
1. Inside of action folder, create actionType.js file
2. Modify userReducer.js
3. Modify actions/index.js
4. Go to Login.js, and redirect the user
5. To App.js, and add a useEffect
6. Add the user photo when the user login
*/

//actionType.js
export const SET_USER = 'SET_USER';

//modify actions/index.js
import { combineReducers } from "redux";
import  userReducer  from "./userReducer";

 const rootReducer = combineReducers({
     userState: userReducer,
});

export default rootReducer;

// modify userReducer.js
import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
    user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            }
            
        default: 
        return state;
    }
};

export default userReducer;



// modify App.js
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { useEffect } from 'react';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

function App(props) {
  useEffect(() => {
    props.getUserAuth()

  }, [])
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

export const mapStateToProps = (state) => {
  return {};
}

export const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)


//modify Login.js
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signInApi } from '../actions';
import { Redirect } from 'react-router';
const Login = (props) => {
    return (
        <Container>
            {
                props.user &&
                <Redirect to ="/home" />
            }
            <Nav>
                <a href = '/'>
                    <img src = "/images/login-logo.png" alt="" />
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>SignIn</SignIn>
                </div>
            </Nav>
            <Section>
               <Hero>
               <h1>Welcome to your professional community.</h1>
               <img src = "/images/hero.jpg" alt="" />
               </Hero>
               <form>
                   <Google onClick = {() => props.signIn()}>
                       <img src ="/images/google.png" alt="" />
                       Sign in with Google
                   </Google>
               </form>
            </Section>
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

`;
const Join = styled.a`
font-size: 16px;
padding: 10px 12px;
text-decoration: none;
color: rgba(0,0,0,0.6);
margin-rigth: 12px;
border-radius: 4px;
:hover {
    background-color: rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.9);
    text-decoration: none;
}
`;

const SignIn = styled.a`
box-shadow: inset 0 0 0 1px #2867b2;
color: #2867b4;
border-radius: 24px;
transition-duration: 167ms;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px 24px;
text-align: center;
background-color: rgba(0,0,0,0);
:hover {
    background-color: rgba(117,183,149,0.15);
    color: #0a64c2;
    text-decoration: none;
}
`;

const Section = styled.section`
display: flex;
align-content: start;
min-height: 700px;
padding-bottom: 132px;
padding-top: 40px;
padding: 60px 0;
position: relative;
flex-wrap: wrap;
width: 100%;
max-width: 1128px;
align-items: center;
margin: auto;

@media (max-width 760px) {
    margin: auto;
    min-height: 0px;
}
`;

const Hero = styled.div`
width: 100%;
h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 760px){
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2px;
        
    }
}

img {
   
    width: 500px;
    margin-top: 30px;
    position: absolute;
    
    right: -100px;
    @media (max-width: 760px) {
        top: 235px;
        width: initial;
        position: initial;
        margin-left: 100px
    }
}
`;

const form = styled.div`
margin-top: 100px;
width: 408px;
@media (max-width: 760px) {
margin-top: 20px;
}
`;
const Google = styled.button`
display: flex;
justify-content: center;
background-color: #fff;
align-items: center;
width: 100%;
height: 56px;
border-radius: 26px;
box-shadow: inset 0 0 0 5px rgba(0,0,0,0.01);
vertical-align: 0;
z-index: 0;
transition-duration: 167px
font-size: 26px;
color: rgba(0,0,0,0.6);

img {
    width: 50px
}
:hover {
    background-color: rgba(207, 207, 207, 0.2);
    color: rgba(0,0,0,0.75);
}
@media (max-width: 760px){
    margin-left: 100px;
    margin-top: 20px;
}
`;

const mapStateToProps = (state) =>{
    return {
        user: state.userState.user,
    };
}

const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInApi())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);


// modify Header.js
import { connect } from 'react-redux';
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
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"><g><g><path 
                        d="M9,4c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S6.2,4,9,4 M9,2C5.1,2,2,5.1,2,9c0,3.9,3.1,7,7,7s7-3.1,7-7C16,5.1,12.9,2,9,2    L9,2z"/></g></g><g><polygon 
                        points="22,20.3 20.3,22 14,15.7 14,14 15.7,14  "/><rect 
                        height="3.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -5.9741 14.4227)" 
                        width="1.2" x="13.8" y="12.6"/></g>
                    </svg>
                    </SearchIcon>
                </Search>
                <Nav>
                    <Navlistwrap>
                        <Navlist className="active">
                            <a>
                                <img src='/images/home.png' alt ='' />
                                <span>Home</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a>
                                <img src='/images/network.png' alt ='' />
                                <span>My Network</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a>
                                <img src='/images/jobs.png' alt ='' />
                                <span>Jobs</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a>
                                <img src='/images/messaging.png' alt ='' />
                                <span>messages</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a>
                                <img src='/images/notification.jpg' alt ='' />
                                <span>Notifications</span>
                            </a>
                        </Navlist>
                        <User>
                            <a>
                                {
                                    props.user && props.user.photoURL?
                                    (<img src= {props.user.photoURL} alt ='' />):
                                    (<img src='/images/user.png' alt ='' />)
                                }
                                <span>Me
                                <img src='/images/dropdown1.png' alt ='' />
                                </span>
                                
                            </a>
                            <SignOut>
                                <a>Sign Out</a>
                            </SignOut>
                        </User>
                        <Work>
                            <a>
                                <img src='/images/work.png' alt ='' />
                                <span>Work
                                <img src='/images/dropdown1.png' alt ='' />
                                </span>
                                
                            </a>
                        </Work>
                    </Navlistwrap>
                </Nav>
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

const Nav = styled.nav`
margin-left: auto;
display: block;
img {
    width: 50px;
}
@media (max-width: 760px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
}
`;

const Navlistwrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;

.active {
    span:after {
        content: '';
        transform: scaleX(1);
        border-bottom: 2px solid var(--white, #fff);
        position: absolute;
        bottom: 0;
        left: 0;
        transition: transform 0.2s ease-in-out;
        width: 100%;
        border-color: rgba(0,0,0,0.9);
    }
}
`;

const Navlist = styled.li`
display: flex;
align-items: center;
a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weigth: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
        color: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
    }
    @media (max-width: 760px) {
        min-width: 70px
    }
}
:hover, :active {
    a {
        span {
            color: rgba(0,0,0,0.9);
        }
    }
}
`;
const SignOut = styled.div`
position: absolute;
top: 45px;
background: white;
border-radius: 0, 0, 5px, 5px;
width: 100px;
height: 40px;
font-size: 16px;
transition-duration: 167ms;
text-align: center;
display: none;
`;

const User = styled(Navlist)`
a > img {
    width: 26px;
    border-radius: 50%;
}
span {
    display: flex;
    align-items: center;
}
:hover {
    ${SignOut} {
        align-items: center;
        display: flex;
        justify-content: center;
    }
}
`;
const Work = styled(User)`
border-left: rgba(0,0,0,0.03);
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
};

const mapDispatchToProps = (dispatch) ({})
export default connect(mapStateToProps, mapDispatchToProps)(Header)