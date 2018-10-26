import React, { Component } from 'react';
import './App.css';
import Resume from './Components/Resume';
import data from './dummyData/Data.json'

class App extends Component {
  
  dataTest(){
    return(
      console.log(data.Resume.Administrative)
    )
  }
  
  render() {
    this.dataTest();
    return (
      <div className="App">
        <Resume resume={data.Resume}/>
      </div>
    );
  }
}

export default App;
