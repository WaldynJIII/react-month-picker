import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList'
import Header from '../Header/Header'
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
  yeetPick = (key) =>{
    this.setState({
      ...this.state,
      pick: [key]
    })
  }

  render() {
    console.log(this.state.mList)
    console.log(this.state.pick)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <Header pick={this.state.pick}/>
          <br/>
        </header>
        <br/>
        <MonthList yeetPick={this.yeetPick} mList={this.state.mList}/>
      </div>
    );
  }
}

export default App;
