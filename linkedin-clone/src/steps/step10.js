// Add the part that says 'Hiring in a hurry'

/* 
1. Go to Home.js to do this
*/

import styled from 'styled-components';

const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5><a>Hiring in a hurry? - </a></h5>
                <p>Find talented pros in record time with upwork and keep business working.</p>
            </Section>
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

export default Home;