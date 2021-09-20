import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";

const PostList = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        params: {
          _limit: 4,
        },
      })
      .then((response) => setData(response.data));
  }, []);
  return (
    <div>
      <h2>User Posts</h2>
        {data.map((user, i) => {
          return (
              <PostItem 
                id={user.id} 
                title={user.title} 
                body={user.body} 
                key={i}
              />
          );
        })}
    </div>
  );
};

export default PostList;
