import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state ={
    mList: [],
    pick: ''
  }
  componentDidMount() {
    this.getCalendar();
  }
  getCalendar = () => {
    axios({
      method: 'GET',
      url: '/calendar'
    }).then((response) => {
      this.setState({
        mList: response.data
      })
    })
  }

  render() {
    console.log(this.state.mList)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <h3>SELECTED MONTH GOES HERE</h3>
          <br/>
        </header>
        <br/>
        <p>List of months goes here</p>
      </div>
    );
  }
}

export default App;
