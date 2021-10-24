import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from './Components/Header';



function App() {
  return (
    <div >
      <Header/>
      <Route path="/" component={Home} exact></Route>
      <Route path="/about" component={About} exact></Route>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
