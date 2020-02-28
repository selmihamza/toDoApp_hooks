import React, { useState } from "react";

const AddItem = props => {
  const [value, setValue] = useState("");

  const onChangeValue = event => {
    setValue(event.target.value);
  };
  return (
    <div className="add-item">
      <h1>To-Do App!</h1>
      <h3>Add New To-Do</h3>
      <input
        className="input"
        type="text"
        value={value}
        onChange={onChangeValue}
        placeholder="Enter new task"
      ></input>

      <div>
        <input
          className="button"
          onClick={() => {
            props.onAdditem(value);
            setValue("");
          }}
          type="button"
          value="Add"
        />
      </div>
    </div>
  );
};

export default AddItem;
