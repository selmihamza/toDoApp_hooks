import React, { useState } from "react";
import AddItem from "./components/addItem";
import ShowList from "./components/showList";
import PropTypes from "prop-types";
import "./App.css";

ShowList.propTypes = {
  list: PropTypes.array
};

const App = () => {
  const [list, setList] = useState([
    { text: "item1", isComplited: false },
    { text: "item2", isComplited: false },
    { text: "item3", isComplited: false }
  ]);
  const [classNameCss, setClassNameCss] = useState("");

  const onAdditem = item => {
    setList([...list, { text: item, isComplited: false }]);
  };

  const onCompleteItem = i => {
    setClassNameCss("item-clicked");
    setList(
      list.map((el, index) =>
        i === index ? { ...el, isComplited: !el.isComplited } : el
      )
    );
  };
  const onDeleteItem = i => {
    setList(list.filter((item, j) => i !== j));
  };

  return (
    <div className="App">
      <AddItem onAdditem={onAdditem} />
      <ShowList
        list={list}
        onDeleteItem={onDeleteItem}
        onCompleteItem={onCompleteItem}
        classNameCss={classNameCss}
      />
    </div>
  );
};

export default App;
