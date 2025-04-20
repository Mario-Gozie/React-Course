import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

export const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem} //This changes the state of a new item
        onChange={(e) => {
          setNewItem(e.target.value); //as we change the content of this field it will be setting the value of the new item to the changed value
        }}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
