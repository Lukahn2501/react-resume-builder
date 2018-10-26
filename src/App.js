import React, { Component } from 'react';
import './App.css';
import Resume from './Components/Resume';
import data from './dummyData/Data.json';
import * as firebase from 'firebase';

class App extends Component {
  
  init(){
    var config = {
      apiKey: "AIzaSyDs0B65C_DebndcFfJ2Q7v8aL_pULGIL7E",
      authDomain: "react-resume-builder.firebaseapp.com",
      databaseURL: "https://react-resume-builder.firebaseio.com",
      projectId: "react-resume-builder",
      storageBucket: "react-resume-builder.appspot.com",
      messagingSenderId: "1037696346073"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } 
    return firebase.database().ref('/Resume').on('value',function(snapshot){
      console.log(snapshot.val())
    });
  }

  render() {
    this.init().then((res)=>{
      console.log(res);
    });   
    return (
      <div></div>  
      // <div className="App">
      //   {/* <Resume resume={data.Resume}/> */}
      // </div>
    );
  }
}

export default App;
