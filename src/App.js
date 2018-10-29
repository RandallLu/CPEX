import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {response: " "}
    this.fancy = this.fancy.bind(this);
  }

  componentDidMount() {
    this.callApi()
    .then((res) => {
      this.setState({response: "blablabl"})
      console.log("blablabla")
    })
    .catch((err) => {console.log(err)})
  }

  callApi = async() => {
    const response = await fetch('/api/home')
    const body = await response.json()
    if (response.status !== 200) throw Error("home error")
    return body;
  }

  fancy() {
    console.log("fancy")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.fancy}>click me!!</button>
        </header>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
