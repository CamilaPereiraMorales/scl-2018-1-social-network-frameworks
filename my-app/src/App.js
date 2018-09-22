import React, { Component } from 'react';
import './App.css';
import Registro from './components/registro/Registro';
import VistaMuro from './components/Muro/VistaMuro';
import Login from '../src/components/Login/Login';
import Perfil from '../src/components/Perfil/Perfil';
import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAXTZOPfhB0mKN47rxIuMs9H_mc8odWS5g",
  authDomain: "red-social-framework.firebaseapp.com",
  databaseURL: "https://red-social-framework.firebaseio.com",
  projectId: "red-social-framework",
  storageBucket: "red-social-framework.appspot.com",
  messagingSenderId: "359981357151"
};
firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div>
        <div className = "registro">
          <Registro/>
        </div>
        <div>
          <Login/>
        </div>
        <div className = "muro">
          <VistaMuro/>
        </div>
         <div>
          <Perfil/>
        </div>
    </div>
    );
  }
}

export default App;