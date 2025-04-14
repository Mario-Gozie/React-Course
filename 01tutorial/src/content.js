import { useState } from "react";

import React from "react";

function Content() {
  const [name, stateName] = useState("Dave"); // Here we are using state, the name is more like a getter in OOP, and the stateName is more like the setter. Note that dave name Here is the defaualt state. which will appear when the website loads
  const [count, setCount] = useState(0); // const is used because we dont want the state to be changed directly but only eith the use state. naming convention usually starts with state and continues with Camel case.

  const handleNameChange = () => {
    const names = ["Bob", "Kelvin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return stateName(names[int]);
  };

  const handleclick = () => {
    setCount(count + 1);

    console.log(count); // Note that in using state, the default state is ran first before updating. This is important to note
  };

  const handleclick2 = (name) => {
    console.log(count);
  };

  const handleclick3 = (e) => {
    console.log(e.target.innerText);
  };

  /*We also have on double click event in react */

  return (
    <main>
      <p onDoubleClick={handleclick}>Hello {name}</p>

      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleclick}>click it 2</button>
      <button onClick={(e) => handleclick3(e)}>click it 3</button>
      <button onClick={handleclick2}>click it 4</button>
    </main>

    /*When a
      function needs to take a parameter, another function (anonymous function )
      needs to call it within the on click. see the handleclick and handleclick2 above function
      to see difference in call*/
  );
}

export default Content;
