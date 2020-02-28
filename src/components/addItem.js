import React from "react";

const AddItem = props => {
  return (
    <div className="add-item">
      <h1>To-Do App!</h1>
      <h3>Add New To-Do</h3>
      <input
        className="input"
        type="text"
        value={props.value}
        onChange={props.onChangeValue}
        placeholder="Enter new task"
      ></input>

      <div>
        <input
          className="button"
          onClick={() => props.onAdditem()}
          type="button"
          value="Add"
        />
      </div>
    </div>
  );
};

export default AddItem;
