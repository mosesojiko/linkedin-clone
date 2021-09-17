// Add feed follow list


//To format on save, install prettier code formater
//Right click on setting, select add to workspace setting
// click on extension setting, type format in search bar, select prettier in default code formatter
// select format on save

/*
1. Rightside.js, add a feed followlist
2. Also add a recommendation component
3. Add the BannerCard underneath the FollowCard
 */

// Rightside.js
import styled from 'styled-components';

const Rightside = (props) =>{
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your feed.</h2>
                    <img src ="/images/feed.png" alt ="" />
                </Title>
                <Feedlist>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>
                                #LinkedIn
                            </span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </Feedlist>
                <Recommendation>
                    View all recommendations
                    <img src = "/images/right-arrow.png" alt ="" />
                </Recommendation>
                
            </FollowCard>
            <BannerCard>
                <img src ="/images/job.jpg" alt="" />
            </BannerCard>
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

const Feedlist = styled.ul`
margin-top: 16px;
li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 16px;

    & > div {
        display: flex;
        flex-direction: column;
    }
    button {
        background-color: transparent;
        color: rgba(0,0,0,0.6);
        box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6);
        padding: 16px;
        align-items: center;
        border-radius: 15px;
        box-sizing: border-box;
        font-weight: 600;
        display: inline-flex;
        justify-content: center;
        max-height: 32px;
        max-width: 480px;
        text-align: center;
        outline: none;
    }
}
`;

const Avatar = styled.div`
box-shadow: none;
background-image: url('/images/hash.jpg');
width: 30px;
height: 30px;
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
const Recommendation = styled.a`
color: #0ab6c2;
display: flex;
align-items: center;
font-size: 14px;
img {
    width: 30px;
}
`;

const BannerCard = styled(FollowCard)`
width: 100%;
height: 100%;
`;
export default Rightside;