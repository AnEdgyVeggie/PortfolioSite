import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCoC5askc0Zn1b1qJlI3FhJcMtq7Tbm9sI",
//   authDomain: "portfolio-14df1.firebaseapp.com",
//   projectId: "portfolio-14df1",
//   storageBucket: "portfolio-14df1.appspot.com",
//   messagingSenderId: "705542148737",
//   appId: "1:705542148737:web:af957ce1ce091fa4b9b380",
//   measurementId: "G-H0NVLD7JBT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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
