import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

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
        <Paper className = "paper container">
          <Avatar className = "website Avatar">
          </Avatar>
          <Typography Component='h2' variant='h4'>
            Log in
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default App;
