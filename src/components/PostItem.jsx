import React from "react";
import "./PostItem.css";

export default function PostItem(props) {
  const { title, body } = props;
  return (
    <div className="posts-container">
      <h4 style={{ textTransform: "capitalize" }}>{title}</h4>
      <p style={{ textTransform: "capitalize" }}>{body}</p>
    </div>
  );
}
