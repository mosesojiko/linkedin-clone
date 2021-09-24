/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostModal from "./PostModal";
import { getArticlesAPI } from "../actions";
import ReactPlayer from "react-player";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  return (
    <>
      {props.articles.length === 0 ? (
        <p>No Feed</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              <button
                onClick={handleClick}
                disable={props.loading ? true : false}
              >
                <span>What do you want to talk about?</span>
              </button>
            </div>
            <div>
              <button>
                <img src="/images/picture.png" alt="icon" />
                <span>Photo</span>
              </button>
              <button>
                <img src="/images/video.png" alt="video-icon" />
                <span>Video</span>
              </button>
              <button>
                <img src="/images/event.png" alt="event-icon" />
                <span>Event</span>
              </button>
              <button>
                <img src="/images/article.png" alt="event-icon" />
                <span>Write Article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {props.loading && <img src="./images/spinning.gif" alt="loader" />}
            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      <img
                        src={article.actor.image}
                        style={{ borderRadius: "50%" }}
                        alt="user"
                      />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/elipsis.png" alt="ellipsis" />
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImage>
                    <a>
                      {!article.sharedImg && article.video ? (
                        <ReactPlayer width={"100%"} url={article.video} />
                      ) : (
                        article.sharedImg && (
                          <img src={article.sharedImg} alt="img-db" />
                        )
                      )}
                    </a>
                  </SharedImage>
                  <SocialCounts>
                    <li>
                      <button>
                        <img src="/images/like.png" alt="thumbs-up" />
                        <img src="/images/clap.jpg" alt="clap" />
                        <span>75</span>
                      </button>
                    </li>
                    <li>
                      <a>{article.comments} comments</a>
                    </li>
                  </SocialCounts>
                  <SocialButtons>
                    <button>
                      <img src="/images/like1.jpg" alt="like" />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src="/images/comment.png" alt="comment" />
                      <span>Comment</span>
                    </button>
                    <button>
                      <img src="/images/share.jpg" alt="share" />
                      <span>Share</span>
                    </button>
                    <button>
                      <img src="/images/send.jpg" alt="send" />
                      <span>Send</span>
                    </button>
                  </SocialButtons>
                </Article>
              ))}
          </Content>
          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div``;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
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
      line-height: 1.5;
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
        width: 48px;
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
          width: 24px;
          height: 24px;
          margin: 0 4px 0 -2px;
        }

        span {
          color: grey;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
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
        &:nth-child(n + 1) {
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

    img {
      width: 18px;
      height: auto;
    }
  }
`;

const Description = styled.div`
  padding: 0 15px;
  overflow: hidden;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;

  img {
    object-fit: contain;
    width: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    & > a {
      font-weight: 700;
      margin-left: 12px;
    }
  }

  button {
    display: flex;
    img {
      width: 18px;
      height: auto;
    }
  }
`;

const SocialButtons = styled.div`
  display: flex;
  padding: 8px 16px;

  button {
    margin-right: 16px;
    display: inline-flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 2px;
    color: grey;

    img {
      width: 20px;
      height: auto;
      margin-right: 4px;
      color: grey;
    }

    span {
      font-size: 13px;
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
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
