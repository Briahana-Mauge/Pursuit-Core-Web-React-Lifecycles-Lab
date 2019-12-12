import React from 'react';
import Deleted from './deleted';

class CompletedList extends React.Component {
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

        const todoItem = this.props.completedItems.map((deleted) => {
            let location = this.props.completedItems.indexOf(deleted);
            return (
                <Deleted todo = {deleted.item}
                key = {location}/>
                )
        })
        return (
            <ul>{todoItem}</ul>
        )
    }
}

export default CompletedList;