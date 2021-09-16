// Add Section in Login.js
// get google logo images from the net
// get 

import styled from 'styled-components';

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
                   <Google>
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
    bottom: -2px;
    right: -150px;
    @media (max-width: 760px) {
        top: 235px;
        width: initial;
        position: initial;
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
`;
export default Login;