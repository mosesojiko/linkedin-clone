// Install needed tools

/* 
1. install firebase, npm install firebase
2. Also install firebase-tools, npm install firebase-tools
3. npm install redux-thunk
4. Go to firebase.com, create a project
5. Still on firebase.com, go to project settings, go down, click on config and copy the configuration settings.
6. Create firebase.js under src, and paste the config files
7. Initialize the firebase app
8. Go to index.js under store, and make modifications
9. Create a folder called actions in src, then create index.js file
10. modify Login.js to make it work
11. go to firebase.com, authentication,get started, google, enable it and save
*/
// note that firebase could not be resolved until i install this version "firebase": "^8.6.7"

// firebase.js
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAMdxfH5XI9C_V2DU5GxFJBm-YQIdssSxQ",
  authDomain: "linkedin-clone-de7c4.firebaseapp.com",
  projectId: "linkedin-clone-de7c4",
  storageBucket: "linkedin-clone-de7c4.appspot.com",
  messagingSenderId: "54004410567",
  appId: "1:54004410567:web:4fa35f880a7f2e5a2cb6e2",
  measurementId: "G-6WEZW5M3DV"
};
// Initialize app
  const firebaseApp = firebase.initializeApp(firebaseConfig);
// Connect to database
  const db = firebaseApp.firestore();
// Get google authentication
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  // Connect to storage expecially to store images
  const storage = firebase.storage()

  export { auth, provider, storage };
  export default db;

//modify index.js under store folder
import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk'

import  rootReducer  from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;


//index.js under actions folder
import { auth, provider } from '../firebase';


export function signInApi() {
    return (dispatch) => {
        auth.signInWithPopup(provider)
        .then((payload) => {
            console.log(payload)
        })
        .catch((error) => alert(error.message))
    }
}

// modify Login.js
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signInApi } from '../actions';

const Login = (props) => {
    return (
        <Container>
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
    return {};
}

const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInApi())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
