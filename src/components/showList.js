import React from "react";

export default function ShowList(props) {
  return (
    <div className="show-list">
      <h3>Let's get some work done!</h3>
      {props.list.map((el, i) => (
        <div key={i}>
          <p className={el.isComplited ? `item ${props.classNameCss}` : "item"}>
            {el.text}
          </p>
          <input
            className="button-item"
            onClick={() => props.onCompleteItem(i)}
            type="button"
            value={el.isComplited ? "undo" : "complete"}
          />

          <input
            className="button-item"
            onClick={() => props.onDeleteItem(i)}
            type="button"
            value="delete"
          />
        </div>
      ))}
    </div>
  );
}
