import styled from 'styled-components';

const Leftside = (props) =>{
    return (
        <Container>
            <ArtCard>
                Card
            </ArtCard>
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
export default Leftside;