import React from 'react';
import { useSelector } from 'react-redux';

// const { posts } = useSelector((store) => store);

const Detatil = ({ match }) => {
  const id = match.params.id;
  const { posts } = useSelector((store) => store);
  const post = posts.filter((post) => post.id == id);
  console.log(id);
  return (
    <div>
      <h1>글 상세보기</h1>
      <div>{post[0].id}</div>
      <div>{post[0].title}</div>
      <div>{post[0].content}</div>
    </div>
  );
};

export default Detatil;
