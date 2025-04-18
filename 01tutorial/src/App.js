// import "./App.css";
import Header from "./Header";
import Content from "./content";
import Footer from "./footer";
import CreateList from "./createList";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Content />  */}
      <CreateList />
      <Footer />
    </div>
  );
}

export default App;
