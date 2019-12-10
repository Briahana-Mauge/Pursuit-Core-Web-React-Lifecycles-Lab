import React from 'react';
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
class App extends React.Component {
  constructor(){
    super();
    this.state = { test: 'test shown'}
  }
  handleTextChange = (event) => {
    this.setState({
      test: event.target.value
    })
  }
  notify = () => {
    let {test} = this.state
    toast(test);
  }
  render(){
  return (
    <div className="App">
      <form onSubmit = {this.notify}>
        <input type = 'text' onChange = {this.handleTextChange}></input>
      </form>
    </div>
  );
}
}

export default App;
