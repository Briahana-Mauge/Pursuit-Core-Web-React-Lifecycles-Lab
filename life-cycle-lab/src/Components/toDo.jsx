import React from 'react';

const Item = (props) => {
    return(
        <li>
        <button onClick = {props.delete} id = {props.location}>X</button>
        {props.todo} 
        </li>
    )
}

export default Item;