import React from "react";
import { useState } from "react";

const TodoItems = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputdata) {
    } else {
      setItems([...items, inputdata]);
      setInputData("");
    }
  };

  const deleteItems = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };

  const removeall = () => {
    setItems([]);
  };

  return (
    <div>
      <input
        type={"text"}
        placeholder="add-items"
        value={inputdata}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={addItem}>add</button>

      <div>
        {items.map((elem, ind) => {
          return (
            <div>
              <h3>{elem}</h3>
              <button onClick={() => deleteItems(ind)}>remove</button>
            </div>
          );
        })}
      </div>

      <div>
        <button onClick={removeall}>Remove All</button>
      </div>
    </div>
  );
};

export default TodoItems;
