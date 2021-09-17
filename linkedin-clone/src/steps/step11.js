//Add the structure of the body

/* 
1. Home.js, create  Layout component
2. Divide the page into 3 different column using the grid 

*/

import styled from 'styled-components';

const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5><a>Hiring in a hurry? - </a></h5>
                <p>Find talented pros in record time with upwork and keep business working.</p>
            </Section>
            <Layout>
                <div>Left side</div>
                <div>Main</div>
                <div>Right side</div>
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
  grid-template-areas: "leftSide main rigthSide";
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

export default Home;
