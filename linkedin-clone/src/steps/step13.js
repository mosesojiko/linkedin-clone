//Build the userinfo 

/*
1. Working ArtCard component on Leftside.js
2. Working CommunityCard component on Leftside.js
 */

import styled from 'styled-components';

const Leftside = (props) =>{
    return (
        <Container>
            <ArtCard>
               <Userinfo>
                   <CardBackground />
                   <a>
                       <Photo />
                       <Link>Welcome, there!</Link>
                   </a>
                   <a>
                       <AddPhotoText>Add a photo</AddPhotoText>
                   </a>
               </Userinfo>
               <Widget>
                   <a>
                       <div>
                       <span>Networks</span>
                       <span>Grow your connections</span>
                       </div>
                       <img src ="/images/connection1.png" alt="" />
                   </a>
               </Widget>
               <Item>
                   <span>
                       <img src ="/images/item.png" alt="" />
                       My items
                   </span>
               </Item>
            </ArtCard>
            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    
                    <span>
                        Events
                        <img src="/images/plus.png" alt="" />
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
        </Container>
    )
}

const Container = styled.div`
grid-area: leftside;
`;

const ArtCard = styled.div`
text-align: center;
overflow: hidden;
background-color: #fff;
margin-bottom: 8px;
border-radius: 5px;
transition: box-shadow 83ms;
position: relative;
border: none;
/*box-shadow: 0 0 0 1px rgba(0 0 0 / 151), 0 0 0 rgba(0 0 0 / 201)*/
`;

const Userinfo = styled.div`
border-bottom: 1px solid rgba(0,0,0,0.15);
padding: 12px 12px 16px;
word-wrap: word-break;
word-break: break-word;
`;
const CardBackground = styled.div`
background: url('/images/card-bg.jpg');
background-position: center;
background-size: 462px;
height: 54px;
margin: -12px -12px 0;
`;
const Photo = styled.div`
box-shadow: none;
background-image: url('/images/photo.png');
width: 72px;
height: 72px;
box-sizing: border-box;
background-clip: content-box;
background-color: white;
background-position: center;
background-size: 60%;
background-repeat: no-repeat;
border: 2px solid white;
margin: -38px auto 12px;
border-radius: 50%;
`;
const Link = styled.div`
font-size: 16px;
line-height: 1.5;
color: rgba(0,0,0,0.9);
font-weight: 600;
`;
const AddPhotoText = styled.div`
color: #0a66c2;
margin-top: 4px;
font-size: 14px;
line-height: 1.33;
font-weigth: 400;
`;

const Widget = styled.div`
img {
    width: 40px
}
border-bottom: 1px solid rgba(0,0,0,0.15);
padding-top: 12px;
padding-bottom: 12px;

& > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
}
:hover {
    background-color: rgba(0,0,0,0.08);
}

div {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
            color: rgba(0,0,0,0.6)
        }
        &:nth-child(2) {
            color: rgba(0,0,0,1);
        }
    }
}
`;
const Item = styled.a`
img {
    width: 40px;
}

border-color: rgba(0,0,0,0.6);
text-align: left;
padding: 12px;
font-size: 12px;
display: block;

span {
    display: flex;
    align-items: center;
    color: rgba(0,0,0,1);
}
:hover {
    background-color: rgba(0,0,0,0.08);
}
`;
const CommunityCard = styled(ArtCard)`
padding: 8px 0 0;
text-align: left;
display: flex;
flex-direction: column;
img {
    width: 20px;
}
a {
    color: black;
    padding: 6px 12px;
    font-size: 12px;

    &:hover {
        color: #0a66c2;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &:last-child {
        color: rgba(0,0,0,0.6);
        text-decoration: none;
        border-top: 1px solid #d6cec2;
        padding: 12px;
        &:hover {
            background-color: rgba(0,0,0,0.08);
        }
    }
}


`;
export default Leftside;