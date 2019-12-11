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
    }
    componentWillUnmount() {
        console.log(`toDo List component unmounted`);
    }
    render() {
        console.log(`toDo List component rendered`)

        const todoItem = this.props.listItems.map((todo) => {
            const location = this.props.listItems.indexOf(todo)
            return (
                <ToDo todo = {todo.item}
                key = {todo.item}
                location  = {location}/>
                )
        })
        return (
            <ul>{todoItem}</ul>
        )
    }
}

export default ToDoList;
