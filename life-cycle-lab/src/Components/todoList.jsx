import React from 'react';

class ToDoList extends React.Component{
    constructor(){
        super();
        console.log(`toDo constructor called`)
    }
    componentDidUpdate(){
        console.log(`toDo component updated`);
      }
    componentDidMount(){
        console.log(`toDo component mounted`);
    }
    componentWillUnmount(){
        console.log(`toDo component unmounted`);
    }
    render(){
        console.log(`toDo component rendered`)
        
            const todoItem = this.props.listItems.map((todo) => {
                return(
                    <li className = 'todo'>{todo.item}</li>
                )
            })

        return(
            <ul>{todoItem}</ul>
        )
    }
}

export default ToDoList;
