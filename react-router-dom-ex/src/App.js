import './App.css';
import {Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from './Components/Header';
import HistorySample from './Components/HistorySample';


function App() {
  return (
    <div >
      <Header/>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>

      <Route path="/" component={Home} exact></Route>
      <Route path="/about" component={About} exact></Route>
      <Route path="/history" component={HistorySample} exact></Route>
    </div>
  );
}

export default App;
