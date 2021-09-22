// Add signout functionalities

/* 
1. actions/index.js, and add signout function
2. import the signOuApi to Header, and add signOut to Signout component
 When the user signs out, he need to be redirected to Login page
3. Go to Home page 
*/


// modify actions/index.js
import { auth, provider } from '../firebase';
import { SET_USER } from './actionType';


export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})


export function signInApi() {
    return (dispatch) => {
        auth.signInWithPopup(provider)
        .then((payload) => {
            dispatch(setUser(payload.user))
        })
        .catch((error) => alert(error.message))
    }
}

//function to store the user info
export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) =>{
            if(user) {
                dispatch(setUser(user))
            }
        })
    }
}

// signout function
export function signOutApi() {
    return (dispatch) => {
        auth.signOut().then(()=>{
            dispatch(setUser(null))
        }).catch(error =>{
            console.log(error)
        })
    }
}

// modify Header.js
import { connect } from 'react-redux';
import styled from 'styled-components';
import { signOutApi } from '../actions';


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
                            <SignOut onClick = {() => props.signOut()}>
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

const mapDispatchToProps = (dispatch) =>({
    signOut: () => dispatch(signOutApi())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)

// modify Home.js
import styled from 'styled-components';
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <Container>
            {
                !props.user && <Redirect to ='/' />
            }
            <Section>
                <h5><a>Hiring in a hurry? - </a></h5>
                <p>Find talented pros in record time with upwork and keep business working.</p>
            </Section>
            <Layout>
                <Leftside />
                <Main />
                <Rightside />
            </Layout>
        </Container>
    )
}

const Container = styled.div`
padding-top: 100px;
max-width: 100%;
@media (max-width: 760px) {
    padding: 52px;
}
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align:center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
      color: #4291b8;
      * {
          font-weight: 700;
      }
  }
  p {
      font-size: 14px;
      font-weight: 600
  }

  @media (max-width: 760px) {
      flex-direction: column;
      padding: 0 5px
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5px), minmax(0, 12px), minmax(300px, 7px);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;

  @media(max-width: 760px) {
      display: flex;
      flex-direction: column;
      padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}
export default connect(mapStateToProps)(Home);