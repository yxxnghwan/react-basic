import React, { Component } from 'react';


// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 



        <Footer/>
      </div>
    );
  }
}

export default App;