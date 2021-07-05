import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDelete } from '../store';

// const { posts } = useSelector((store) => store);

const Detatil = (props) => {
  const id = props.match.params.id;
  const { posts } = useSelector((store) => store);
  const post = posts.filter((post) => post.id == id);
  console.log(id);

  const del = () => {
    dispatcher(postDelete(post[0].id));
    props.history.push('/');
  };

  const dispatcher = useDispatch();

  return (
    <div>
      <h1>글 상세보기</h1>
      <div>{post[0].id}</div>
      <div>{post[0].title}</div>
      <div>{post[0].content}</div>
      <button onClick={del}>삭제</button>
    </div>
  );
};

export default Detatil;
