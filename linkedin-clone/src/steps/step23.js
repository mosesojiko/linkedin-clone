// Let's work on modals

/* 
1. in Main.js, import Postmodal.js
2. inside components folder, create a file called PostModal.js
3. Add header in PostModal
*/


// modify Main.js
import styled from 'styled-components';
import PostModal from './PostModal';

const Main = (props) =>{
    return (
        <Container>
           <Sharebox> Share
           <div>
               <img src ="/images/user1.png" alt="" />
               <button>Start a post</button>
           </div>
           <div>
               <button>
               <img src ="/images/picture.png" alt="" />
               <span>Photo</span>
               </button>
               <button>
               <img src ="/images/video.png" alt="" />
               <span>Video</span>
               </button>
               <button>
               <img src ="/images/event.png" alt="" />
               <span>Events</span>
               </button>
               <button>
               <img src ="/images/article.png" alt="" />
               <span>Write Article</span>
               </button>
           </div>
           </Sharebox>
           <div>
               <Article>
                   <SharedActor>
                       <a>
                           <img src = "/images/user1.png" alt="" />
                           <diV>
                               <span>Title</span>
                               <span>Info</span>
                               <span>Date</span>
                           </diV>
                       </a>
                       <button>
                           <img src="/images/elipsis.png" alt="" />
                       </button>
                   </SharedActor>
                   <Description>Description</Description>
                   <SharedImg>
                       <a>
                           <img src ="/images/river.jpg" alt="" />
                       </a>
                   </SharedImg>
                   <SocialCount>
                       <li>
                           <button>
                               <img src="/images/like.png" alt="" />
                               <img src="/images/clap.jpg" alt="" />
                               <span>75</span>
                           </button>
                       </li>
                       <li>
                           <a>3 comments</a>
                       </li>
                   </SocialCount>
                   <SocialActions>
                   <button>
                       <img src="/images/like1.jpg" alt="" />
                       <span>Like</span>
                   </button>
                   <button>
                       <img src="/images/comment.png" alt="" />
                       <span>Comments</span>
                   </button>
                   <button>
                       <img src="/images/share.jpg" alt="" />
                       <span>Share</span>
                   </button>
                   <button>
                       <img src="/images/send.jpg" alt="" />
                       <span>Send</span>
                   </button>
                   </SocialActions>

               </Article>
           </div>
           <PostModal />
        </Container>
    )
}

const Container = styled.div`
grid-area: main;

div > button > img {
    width:30px;
}
`;

const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 151), rgb(0 0 0 / 201);
`;

const Sharebox = styled(CommonCard)`
display: flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background: white;

div {
    button {
        outline: none;
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        min-height: 48px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    &:first-child {
        display: flex;
        align-items: center;
        padding: 8px 16px 0px 16px;
        img {
            width: 46px;
            border-radius: 50%;
            margin-right: 8px;
        }
        button {
            margin: 4px 0;
            flex-grow: 1;
            border-radius: 35px;
            padding-left: 16px;
            border: 1px solid rgba(0, 0, 0, 0.15);
            background-color: white;
            text-align: left;
        }
    }
    &:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-bottom: 4px;

        button {
            img {
                margin: 0px 4px 0px -2px;
            }
            span {
                color: #70b5f9;
            }
        }
    }
}
`;

const Article = styled(CommonCard)`
padding: 0;
margin: 0 0 8px;
overflow: vissible;
`;

const SharedActor = styled.div`
padding-right: 40px;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;
display: flex;

a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
        width: 48px;
        height: 48px;
    }
    & > div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        margin-left: 8px;
        overflow: hidden;

        span {
            text-align: left;
            &:first-child {
                font-size: 14px;
                font-weight: 700;
                color: rgba(0, 0, 0, 1);
            }
            
            &:nth-child(n+1) {
                font-size: 12px;
                color: rgba(0, 0, 0, 0.6);
            }
        }
    }
}
button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
}
`;

const Description = styled.div`
padding: 0 16px;
overflow: hidden;
color: rgba(0, 0, 0, 0.9);
font-size: 14px;
text-align: left;
`;
const SharedImg = styled.div`
margin-top: 8px;
width: 100%;
display: block;
position: relative;
background-color: #f9fafb;

img {
    object-fit: contain;
    width: 100%;
    height: 100%;
}
`;

const SocialCount = styled.ul`
img {
    width: 30px;
}
line-height: 1.3;
display:flex;
align-items: flex-start;
overflow: auto;
margin:0 16px;
padding: 8px 0;
border-bottom: 1px solid #e9e5cf;
list-style: none;

li {
    margin-right: 5px;
    font-size: 12px;

    button {
        display: flex;
        align-items: center;
    }
}
`;

const SocialActions = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin: 0;
min-height: 40px;
padding: 4px 8px;

button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;

    @media (min-width: 760px){
        span {
            margin-left: 8px;
        }
    }
}
`;
export default Main;


// create PostModal.js
import styled from 'styled-components';


 const PostModal = (props) => {
    return (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button><img src="/images/close.png" alt="" /></button>
                </Header>
                <SharedContent>
                    <UserInfo>
                        <img src="/images/user.png" alt="" />
                        <span>Name</span>
                    </UserInfo>
                </SharedContent>
                <ShareCreation>
                    <AttachAssets>
                        <AssetButton>
                        <img src="/images/picture.png" alt="" />
                        </AssetButton>
                        <AssetButton>
                        <img src="/images/video.png" alt="" />
                        </AssetButton>
                    </AttachAssets>
                    <ShareComment>
                    <AssetButton>
                        <img src="/images/comment.png" alt="" />
                        Anyone
                    </AssetButton>
                    </ShareComment>
                    <PostButton>Post</PostButton>
                </ShareCreation>
            </Content>
        </Container>
    )
}

const Container = styled.div`
/* 0, 0, 0, 0 makes the modal takes over the entire browser */
position: fixed;
top:0;
left:0;
right:0;
bottom:0
z-index: 9999;
color: black;
background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
width: 100%;
max-width: 552px;
background-color: white;
max-height: 90%;
overflow: initial;
border-radius: 5px;
position: relative;
display: flex;
flex-direction: column;
top: 32px;
margin: 0 auto;
`;

const Header = styled.div`
display: flex;
padding: 16px 20px;
border-bottom: 1px solid (0, 0, 0, 0.15);
font-size: 16px;
line-height: 1.5;
color: rgba(0,0,0,0.6);
font-weight: 400;
display: flex;
justify-content: space-between;
align-items: center;
button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0,0,0,0.15);
}
`;

const SharedContent = styled.div`
display:flex;
flex-direction: column;
flex-grow: 1;
overflow-y: auto;
vertical-align: baseline;
background: transparent;
padding: 8px 12px;
`;
const UserInfo = styled.div`
display: flex;
align-items: center;
padding: 12px 24px;

img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;

    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin: 5px;
    }
}
`;

const ShareCreation = styled.div`
display: flex;
justify-content: space-between;
padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
img {
    width: 40px;
}
display: flex;
align-items: center;
height: 40px;
min-width: auto;
color: rgba(0,0,0,0.5);
`;

const AttachAssets = styled.div`
display: flex;
align-items: center;
padding-rigth: 8px;
${AssetButton} {
    width: 40px;
}
`;

const ShareComment = styled.div`
img {
    width:40px
}
padding-left: 8px;
margin-right: auto;
border-left: 1px solid rgba(0,0,0,0.15);
${AssetButton} {
    img {
        margin-right: 5px;
    }
}
`;

const PostButton = styled.button`
min-width:60px;
border-radius: 20px;
padding-left: 16px;
padding-right: 16px;
background-color: #0a66c2;
color: white;
&:hover {
    background-color: #004182;
}
`;
export default PostModal;