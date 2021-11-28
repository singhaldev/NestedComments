import React from 'react';

const PostContainer = ({ data, handleClick, contentRef, expandRef }) => {
  const { author, replies, text } = data;
  const { name, avatar } = author;
  return (
    <div className="post-container">
      <div className="post-header">
        <img
          ref={expandRef}
          src="./images/expand.png"
          alt="expand"
          style={{
            width: '17px',
            height: '17px',
            paddingTop: '5px',
            cursor: 'pointer',
            display: 'none',
          }}
          onClick={handleClick}
        />
        <img className="author-logo" src={avatar} alt="authorlogo" />
        <p>{name}</p>
      </div>
      <p ref={contentRef} className="post-msg">
        {text}
      </p>
    </div>
  );
};

export default PostContainer;
