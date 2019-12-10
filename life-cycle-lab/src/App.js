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
  notify = () => {
    toast('that was easy');
  }
  render(){
  return (
    <div className="App">
      <button onClick = {this.notify}>CLICK ME!</button>
    </div>
  );
}
}

export default App;
