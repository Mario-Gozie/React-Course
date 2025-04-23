import Header from "./Header";
import SerchItem from "./SerchItem";
import AddItem from "./AddItem";
// import Content from "./content";
import Footer from "./footer";
import CreateList from "./createList";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const API_URL = "http://localhost:3500/items";

  // Please Note that keys are very important in creating list items for react as it is a way which react identify items that has changed.
  const [items, setItems] = useState(
    // JSON.parse(localStorage.getItem("shoppinglist")) || []
    []
  ); // getting Item from local storage.

  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // localStorage.setItem("shoppinglist", JSON.stringify(items));

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not recieve expected data");
        const listItems = await response.json();
        // console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        // console.log(err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => fetchItems())();
    }, 2000);
  }, []); // This useEffect works when sight loads, that's why the array is empty.

  // This Data below was Passed into the Use state Before Now

  // [
  //   {
  //     id: 1,
  //     checked: true,
  //     item: "One half pound bag of Cocoa Covered",
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "Item 2",
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "Item 3",
  //   },
  // ]

  const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    // getting the id for the last position in the array.
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    // Here I am saying when I click, go to all the when there is a click, look at the array of items, if any item id matches Id passed to the handle click, create a new item and replace checked with its oposite value which could be true or false. else, just return the item.
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    // Now we can use set item to change the state of the items

    setItems(listItems);
  };

  const handleDelete = (id) => {
    // This filters out and returns ids that dont match Id passed into it. this is used in a case of delete
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem(" ");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />

      {/* <Content />  */}
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SerchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <CreateList
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <Footer length={items.length} />
    </div>
  );
}

export default App;
