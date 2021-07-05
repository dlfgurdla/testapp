import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postSave } from '../store';

const Save = (props) => {
  const dispatcher = useDispatch();

  const { posts } = useSelector((store) => store);

  console.log(1, posts);

  const [postDto, setPostDto] = useState({
    title: '',
    content: '',
  });

  console.log(postDto);

  const changeValue = (e) => {
    setPostDto({
      ...postDto,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatcher(postSave(postDto));
    props.history.push('/');
  };

  return (
    <div>
      <form>
        <input type="text" name="title" onChange={changeValue} /> <br />
        <input type="text" name="content" onChange={changeValue} /> <br />
        <button onClick={submit}>글쓰기 완료</button>
      </form>
    </div>
  );
};

export default Save;
