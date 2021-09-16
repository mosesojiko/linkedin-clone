// Add the Join Now, and SignIn button
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
export default Login;