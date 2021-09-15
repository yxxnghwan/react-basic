import React from 'react';
import './App.css';
import Header from './Components/Header'
import Hello from './Components/Hello'
import Profile from './Components/Profile';
import MyComponent from './Components/MyComponent';

const yh = {
  name: "yhlee",
  age: 8
}

function App() {
  return (
    <div>
      <Header title="사이트 타이틀 입니다."></Header>
      <Hello name="yh"></Hello>
      <Profile data={yh}></Profile>
      <MyComponent>리액트 컴포넌트 사이</MyComponent>
    </div>
  )
}

export default App;
