// Add a little animation to modal

/* 
1. Add animation name to 'Container' styling in PostModal.js
2. index.css, and add some styling
*/

//modify PostModal.js

import { useState } from 'react';
import styled from 'styled-components';


 const PostModal = (props) => {
     const [ editorText, setEditorText ] = useState("");
     //reset postModal
     const reset = (e) =>{
         setEditorText("");
         props.handleClick(e);
     }
    return (
        <>
        { props.showModal === 'open' &&
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button onClick ={(event) =>reset(event)}>
                        <img src="/images/close.png" alt="" />
                    </button>
                </Header>
                <SharedContent>
                    <UserInfo>
                        <img src="/images/user.png" alt="" />
                        <span>Name</span>
                    </UserInfo>
                    <Editor>
                    <textarea value = {editorText}
                    onChange = {(e) => setEditorText(e.target.value)}
                    placeholder="What do you want to talk about?"
                    autoFocus = {true}>
                    </textarea>
                    </Editor>
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
        }
     </>
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
animation: fadeIn 0.3s;
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
img {
    pointer-events: none;
    width: 40px;
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

const Editor = styled.div`
padding: 12px 24px;
textarea {
    width: 100%;
    min-height: 100px;
    resize:none;
}
input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
}
`;
export default PostModal;

// modify index.css
/* display the vertical scroll on overflow, hide the bottom scroll on overflow */
body {
    overflow-y: scroll;
    overflow-x: hidden;
  }
  
  #root, body, html {
    background-color: #f5f5f5;
    box-sizing: border-box;
  }
  
  div, h1, h2, h3, h4, h5, h6, header, html, i, img, label, li, nav, p, small, span, ol {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  body {
    font-family: Arial, sans-serif;
  }
  
  /* animate modal */
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  