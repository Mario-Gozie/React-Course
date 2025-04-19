// import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Content from "./content";
import Footer from "./footer";
import CreateList from "./createList";
import React from "react";

function App() {
  // Please Note that keys are very important in creating list items for react as it is a way which react identify items that has changed.
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
    <div className="App">
      <Header title="Grocery List" />
      {/* <Content />  */}
      <CreateList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
