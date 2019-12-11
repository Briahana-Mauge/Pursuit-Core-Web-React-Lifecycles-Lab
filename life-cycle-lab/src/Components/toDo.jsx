import React from 'react';

const Item = (props) => {
    return(
        <li>{props.todo} 
        <button onClick = {props.delete} id = {props.location}>X</button>
        </li>
    )
}

export default Item;