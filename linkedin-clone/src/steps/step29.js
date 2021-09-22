// Add a react player to show videos

/*
1. npm install react-player, and import it in PostModal.js
2. Create a variable for videoLink
*/

// modify PostModal.js
import { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';


 const PostModal = (props) => {
     const [ editorText, setEditorText ] = useState("");
     const [ shareImage, setShareImage ] = useState("");
     //note that inline style={{display:"none"}} will hide the input file. Added alt="" in {shareImage &&}
     const [ videoLink, setVideoLink ] = useState('')

     //image function
     const handleChange = (e) => {
         const image = e.target.files[0];
         if(image === '' || image === undefined) {
             alert(`Not an image, the file is ${typeof image}`);
             return;
         }
         setShareImage(image);
     }

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
                    autoFocus = {true} 
                    />
                    <UploadImage>
                        <input type ="file" 
                        accept="image/gif, image/jpeg, image/png, image/jpg" 
                        name ="image" id="file"
                        style={{display: "none"}}
                        onChange ={handleChange}
                        />
                        <p> <label htmlFor="file">
                            Select an image to share
                            </label> 
                        </p>
                        {shareImage && <img src={URL.createObjectURL(shareImage)} alt="" />}
                        {/* to add video */}
                        <>
                        <input type="text" 
                        placeholder="Please enter a video link"
                        value ={videoLink}
                        onChange = {(e) => setVideoLink(e.target.value)}
                        />
                        {videoLink && (
                            <ReactPlayer width={'100%'} url={videoLink} />
                        )}
                        </>
                    </UploadImage>
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
                    <PostButton disabled={!editorText? true:false}>Post</PostButton>
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
background-color: ${(props) => (props.disabled? "rgba(0,0,0,0.8)": "#0a66c2")};
color: ${(props) => (props.disabled? "rgba(1,1,1,0.2)" : "white")};
&:hover {
    background-color: ${(props) => (props.disabled? "rgba(0,0,0,0.08)": "#004182")};
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

const UploadImage = styled.div`
text-align: center;
img {
    width: 100%;
}
`;
export default PostModal;