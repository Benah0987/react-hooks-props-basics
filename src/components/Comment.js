import React from "react";
//a child component 
function Comment(props) {
   //the commentText is the onne passeds
  return <div className="comment">{props.commentText}</div>;
}

export default Comment;
