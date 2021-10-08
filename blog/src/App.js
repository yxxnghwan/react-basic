import React, {useState} from 'react'
import './App.css';

function App() {
  let posts ='프로그래밍';
  const [title, setTitle] = useState('React 구독');
  const [like, setLike] = useState(0);

  function changeTitle() {
    let newTitle = 'React 구독중';
    setTitle(newTitle);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Dev's Blog</div>
      </div>
      <button onClick={changeTitle}>구독 버튼</button>
      <h4>{posts}</h4>
      <h4>{title} <span onClick={() =>{setLike(like + 1)}}>👍</span> {like} </h4>
    </div>
  );
}

export default App;
