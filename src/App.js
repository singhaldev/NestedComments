import React, { useState, useRef } from 'react';
import './App.css';
import PostContainer from './components/postcontainer';
import data from './constant';

function App() {
  const mainreplylineRef = useRef();
  const commentlineRef = useRef();
  const contentRef = useRef();
  const expandRef = useRef();
  const { replies } = data;
  const [isExpanded, setIsExpanded] = useState(true);
  const handleClick = () => {
    setIsExpanded((prevState) => !prevState);
    mainreplylineRef.current.style.display = 'block';
    contentRef.current.style.display = 'block';
    expandRef.current.style.display = 'none';
  };
  return (
    <div style={{ margin: '1em', position: 'relative' }}>
      <div
        ref={mainreplylineRef}
        className="mainreplyline"
        onClick={() => {
          setIsExpanded((prevState) => !prevState);
          mainreplylineRef.current.style.display = 'none';
          contentRef.current.style.display = 'none';
          expandRef.current.style.display = 'block';
        }}
      ></div>
      <PostContainer
        data={data}
        handleClick={handleClick}
        contentRef={contentRef}
        expandRef={expandRef}
      />

      {isExpanded &&
        replies.map((reply, index) => {
          console.log('Index ', index, reply);
          const { replies } = reply;
          let conversation = [];
          if (replies) {
            conversation = replies.map((reply, index) => {
              return (
                <div style={{ marginLeft: '4em', position: 'relative' }}>
                  <div className="replyline" onClick={() => {}}></div>
                  <PostContainer data={reply} />
                </div>
              );
            });
          }
          console.log('Replies', replies);
          return (
            <div style={{ marginLeft: '4em', position: 'relative' }}>
              <div
                ref={commentlineRef}
                className="commentline"
                onClick={() => {
                  commentlineRef.current.style.display = 'none';
                }}
              ></div>
              <PostContainer data={reply} />
              {conversation}
            </div>
          );
        })}
    </div>
  );
}

export default App;
