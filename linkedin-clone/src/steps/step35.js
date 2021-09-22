// Using raect hook, useEffect to get the articles from firebase

/* 
1. Add a new funtion getArticlesApi in actions/index.js
2. import getArticlesApi in Main.js, and add a useEffect, also add it to the dispatch at the bottom of Main.js
3. dispatch articles to the store, ceate an action in actions/actionType.js, add it to Main

*/

// modify actions/index.js
import { auth, provider, storage } from '../firebase';
import db from '../firebase';
import { GET_ARTICLES, SET_LOADING_STATUS, SET_USER } from './actionType';


export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})

//set loading function
export const setLoading = (status) => ({
    type: SET_LOADING_STATUS,
    status: status,
})

//get articles

export const getArticles = (payload) => ({
    type: GET_ARTICLES,
    payload: payload,
})


export function signInApi() {
    return (dispatch) => {
        auth.signInWithPopup(provider)
        .then((payload) => {
            dispatch(setUser(payload.user))
        })
        .catch((error) => alert(error.message))
    }
}

//function to store the user info
export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) =>{
            if(user) {
                dispatch(setUser(user))
            }
        })
    }
}

// signout function
export function signOutApi() {
    return (dispatch) => {
        auth.signOut().then(()=>{
            dispatch(setUser(null))
        }).catch(error =>{
            console.log(error)
        })
    }
}

//post images to firebase
export function postArticleApi(payload) {
    return (dispatch) => {
        dispatch(setLoading(true))

        if(payload.image !== "") {
            const upload = storage
            .ref(`/images/${payload.image.name}`)
            .put(payload.image);
            upload.on('state_changed',
            (snapshot) => {
                const progress = ( (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                console.log(`Progress: ${progress}%`);
                if(snapshot.state === 'RUNNING'){
                    console.log(`Progress: ${progress}%`);
                }
            }, 
            error => {console.log(error.code)},
            async () => {
                const downloadURL = await upload.snapshot.ref.getDownloadURL();
                db.collection('articles').add({
                    actor: {
                        description: payload.user.email,
                        title: payload.user.displayName,
                        date: payload.timestamp,
                        image: payload.user.photoURL,
                    },
                    video: payload.video,
                    sharedImg: downloadURL,
                    comments: 0,
                    description: payload.description
                });
                //reset the loading
            dispatch(setLoading(false))
            }
            );
            
        }else if (payload.video) {
            db.collection('articles').add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                },
                video: payload.video,
                sharedImg: '',
                comments: 0,
                description: payload.description
            });
            //reset the loading
            dispatch(setLoading(false))
        }
    };
}

//fetch articles from firebase
export function getArticlesApi() {
    return (dispatch) => {
        let payload;

        db.collection('articles').orderBy('actor.date', 'desc')
        .onSnapshot((snapshot) =>{
            payload = snapshot.docs.map((doc) => doc.data());
            dispatch(getArticles(payload))
        })
    }
}

// modify Main.js
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PostModal from './PostModal';
import { getArticlesApi } from '../actions';

const Main = (props) =>{
    //open and close modal
    const [ showModal, setShowModal ] = useState('close');

   //get the articles
   useEffect(() => {
       props.getArticlesApi()
   },[])


    const handleClick = (e) =>{
        e.preventDefault();
        if(e.target !== e.currentTarget){
            return
        }
        switch(showModal) {
            case 'open':
                setShowModal('close');
                break;
            case 'close':
                setShowModal('open');
                break;
            default:
                setShowModal('close')
        }
    }
        return (
        <Container>
           <Sharebox> 
           <div>
               { props.user && props.user.photoURL? 
               (<img src = {props.user.photoURL} alt="" />):
               (<img src ="/images/user1.png" alt="" />)
               }
               <button onClick={handleClick}
               disabled = {props.loading? true: false}
               >Start a post</button>
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
           <Content>
               {
                   props.loading && <img src="/images/spinning.gif" alt ="" />               
                }
           
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
           </Content>
           <PostModal showModal = {showModal} handleClick={handleClick} />
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
const Content = styled.div`
text-align: center;
& > img {
    width: 30px;
}
`;

const mapStateToProps = (state) => {
    return {
        loading: state.articleState.loading,
        user: state.userState.user,
        articles: state.articleState.articles
    }
}

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(getArticlesApi())
})
export default connect(mapStateToProps, mapDispatchToProps)(Main);

// modify actions/actionType.js
export const SET_USER = 'SET_USER';

export const SET_LOADING_STATUS = 'SET_LOADING_STATUS'
export const GET_ARTICLES = "GET_ARTICLES";


// modify reducers/articleReducer.js
import { GET_ARTICLES, SET_LOADING_STATUS } from "../actions/actionType";

export const initState = {
    articles: [],
    loading: false
}

const articleReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        case SET_LOADING_STATUS: 
        return {
            ...state,
            loading: action.status
        }
        default: 
        return state;
    }
}


export default articleReducer;