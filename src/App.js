import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Ethan',
      lastName: 'Sylvester'
    }
  }
  
  render(){
    return (
      <div className="App">
        <Header name={this.state.firstName + ' ' + this.state.lastName} />
        <AboutMe firstName={this.state.firstName} lastName={this.state.lastName} />
        <Footer />
      </div>
    );
  }
}

export default App;
