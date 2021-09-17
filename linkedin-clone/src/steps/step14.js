// Build the Follow component, Rightside.js

/*
1. Add FollowCard to Rightside.js
*/

//modified Rightside.js
import styled from 'styled-components';

const Rightside = (props) =>{
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your feed.</h2>
                    <img src ="/images/feed.png" alt ="" />
                </Title>
            </FollowCard>
        </Container>
    )
}

const Container = styled.div`
grid-area: rightside;
`;

const FollowCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border:none;
box-shadow: 0 0 0 1px rgba(0 0 0 / 151), 0 0 0 rgba(0 0 0 / 201);
padding: 12px;
`;

const Title = styled.div`
display: inline-flex;
align-items: center;
justify-content: space-between;
font-size: 16px;
width: 100%;
color: rgba(0,0,0,0.6);
img {
    width: 20px
}
`;
export default Rightside;