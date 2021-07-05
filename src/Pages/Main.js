import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Main = () => {
  const { posts } = useSelector((store) => store);
  return (
    <div>
      <h1>글 목록보기</h1>
      <br />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}> {post.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
