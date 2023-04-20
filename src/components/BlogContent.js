import React from "react";

function BlogContent(props) {
  //react saying that the value rep the prop.articleText
  return <div id="blog-content">{props.articleText}</div>;
  console.log(props);
}

export default BlogContent;
