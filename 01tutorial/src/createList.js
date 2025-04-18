import { useState } from "react";
import { FaTrash } from "react-icons/fa";

import React from "react";

function CreateList() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  // Please Note that keys are very important in creating list items for react as it is a way which react identify items that has changed.
  const handleCheck = (id) => {
    // Here I am saying when I click, go to all the when there is a click, look at the array of items, if any item id matches Id passed to the handle click, create a new item and replace checked with its oposite value which could be true or false. else, just return the item.
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    // Now we can use set item to change the state of the items

    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify("listItems"));
  };

  const handleDelete = (id) => {
    // This filters out and returns ids that dont match Id passed into it. this is used in a case of delete
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify("listItems"));
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>

              <FaTrash
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
}

export default CreateList;
