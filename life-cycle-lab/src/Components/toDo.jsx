import React from 'react';

const Item = (props) => {
    return(
        <li>{props.todo} {props.location}<button>X</button></li>
    )
}

export default Item;