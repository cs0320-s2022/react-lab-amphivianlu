import React, {useState} from 'react';

function TextBox(props : any) {
  const myHandler = (event : any) => {props.change(event.target.value)}
  return (
    <div className="TextBox">
      <header className="TextBox">
        <label>
          {props.label}
          <input type="text" onChange={myHandler}/>
        </label>
      </header>
    </div>
  );
}

export default TextBox;
