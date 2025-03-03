import React from "react";
import Message from "./Message";

const Content = ({data}) => {
  return <div>
    <h1>This is content</h1>
    <Message data = {data}/>
  </div>
};

export default Content;
