import React from 'react';
import ToDo from './toDo';

class ToDoList extends React.Component {
    constructor() {
        super();
        console.log(`toDo List constructor called`)
    }
    componentDidUpdate() {
        console.log(`toDo List component updated`);
    }
    componentDidMount() {
        console.log(`toDo List component mounted`);
        console.log("todo List props", this.props)
    }
    componentWillUnmount() {
        console.log(`toDo List component unmounted`);
    }
    render() {
        console.log(`toDo List component rendered`)

        const todoItem = this.props.listItems.map((todo) => {
            let location = this.props.listItems.indexOf(todo)
            return (
                <ToDo todo = {todo.item}
                key = {location}
                location  = {location}
                delete = {this.props.handleDeleteTodo}/>
                )
        })
        return (
            <ul>{todoItem}</ul>
        )
    }
}

export default ToDoList;
