import React from 'react';
const InputBox = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input type='text' onChange={props.handleTextChange} placeholder='Enter A Todo'></input>
    </form>
  )
}
export default InputBox;