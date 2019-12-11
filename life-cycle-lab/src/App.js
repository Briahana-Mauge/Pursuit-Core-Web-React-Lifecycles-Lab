import React from 'react';
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputBox from './Components/InputBox';
import ToDoList from './Components/todoList';
// import { element } from 'prop-types';

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

    // let newListItemsCopy = [...listItems, { item: test }];
    let newListItemsCopy = [...listItems];

    newListItemsCopy.push({
      item: test
    })

    this.setState({
      listItems: newListItemsCopy,
      test: ''
    })
    console.log(`submitted new list`, newListItemsCopy, `old list`, listItems)
  }
  deleteToDo = (event) => {
    event.preventDefault();
    let newArr = [];
    for(let i of this.state.allToDos) {
      newArr.push(i);
    }

    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i].toDo === event.target.id) {
        console.log("hi")
        newArr.splice(i, 1)
      }
    }

    this.setState({
      allToDos: newArr
    })

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
      test = {test}
      key = {test}/>
    </div>
    </div>
  );
}
}

export default App;