import React from 'react';
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputBox from './Components/InputBox';
import ToDoList from './Components/todoList';

toast.configure();
class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      test: '',
      listItems: [],
      deleted: 'deleted'
    }
  }
  componentDidMount() {
    console.log(`app component mounted`);
    
  };
  componentDidUpdate() {
    console.log(`app component updated`);
  }
  handleTextChange = (event) => {
    this.setState({
      test: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let {test, listItems} = this.state;
    toast(test);

    let newListItemsCopy = [...listItems];

    newListItemsCopy.push({
      item: test
    })

    this.setState({
      listItems: newListItemsCopy
    })
    console.log(`new list`, newListItemsCopy, `old list`, listItems)
  }

  render(){
    let {test, listItems} = this.state
  return (
    <div className="App">
      <div className = 'input-stage'>
      <InputBox submit={this.handleSubmit}
            handleTextChange={this.handleTextChange}
            test = {test}/>
    </div>
    <div className = 'list-stage'>
      <ToDoList listItems = {listItems}
      test = {test}/>
    </div>
    </div>
  );
}
}

export default App;