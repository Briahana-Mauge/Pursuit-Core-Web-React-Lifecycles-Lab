import React from 'react';
import './App.css';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputBox from './Components/InputBox';
import ToDoList from './Components/todoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      listItems: []
    }
  }
  componentDidMount() {
    console.log(`app component mounted`);
  };

  componentDidUpdate() {
    console.log(`app component updated`);
  };

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let { text, listItems } = this.state;

    toast.success(`Todo Created: ${text}`, {
      className: "created",
      autoClose: 6000
    });

    let newListItemsCopy = [...listItems, { item: text }];

    //replaced the following commented code with the above code
    // let newListItemsCopy = [...listItems];
    // newListItemsCopy.push({
    //   item: text
    // });

    this.setState({
      listItems: newListItemsCopy,
      text: ''
    });
  }

  handleDeleteTodo = (event) => {
    let { listItems } = this.state;
    event.preventDefault();

    let deleted = listItems[event.target.id].item;
    toast.error(`Todo Deleted: ${deleted}`, {
      className: "deleted",
      autoClose: 5000
    });

    let position = event.target.id;
    listItems.splice(position, 1);

    this.setState({
      listItems: listItems
    });
  };

  render() {
    let { text, listItems } = this.state
    return (
      <div className="App">
        <div className='input-stage'>
          <InputBox submit={this.handleSubmit}
            handleTextChange={this.handleTextChange}
            text={text} />
        </div>
        <div className='list-stage'>
          <ToDoList listItems={listItems}
            text={text}
            key={text}
            handleDeleteTodo={this.handleDeleteTodo} />
        </div>
        <ToastContainer
          transition={Zoom}
        />
      </div>
    );
  };
}

export default App;