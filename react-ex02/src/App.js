import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react'
import IterationSample from './Components/IterationSample';

function App() {
  const name ="React"

  const style = {
    backgroundColor : 'aqua',
    color: 'black',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16 // 기본단위 px
  }

  return ( // <Fragment> == <>
    <Fragment>
      <div className="react" style={style} // 태그에 class를 지정할 때는 className으로
        // 태그 내부에서는 주석을 사용할 수 있음
      > {/* 태그 밖에서는 중괄호 안에서 주석 사용 */}
        {name === "react" ? (<h1>리액트입니다.</h1>) : null}
        {name === "React" // 조건문처럼 사용
          && <h1>리액트입니다</h1>
        }
        <h1>{name} 안녕!</h1>
      </div>
      <div style={style}>
        {name === "react" ? (<h1>리액트입니다.</h1>) : null}
        {name === "React" // 조건문처럼 사용
          && <h1>리액트입니다</h1>
        }
        <h1>{name} 안녕!</h1>
      </div>
      <input></input> {/* JSX의 태그는 반드시 닫는태그를 사용해야함 */}
      <input/>

      <IterationSample></IterationSample>
    </Fragment>
  );
}

export default App;
