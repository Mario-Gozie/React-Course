import React from "react";
import { FaPlus } from "react-icons/fa";

export const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem} //This changes the state of a new item
        onChange={(e) => {
          setNewItem(e.target.value); //as we change the content of this field it will be setting the value of the new item to the changed value
        }}
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
