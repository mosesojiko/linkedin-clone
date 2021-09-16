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
export default Header;