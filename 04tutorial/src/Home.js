import React from "react";
import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "./Context/DataContext";

function Home() {
  const { searchResult, fetchError, isLoading } = useContext(DataContext);

  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResult.length ? (
          <Feed posts={searchResult}></Feed>
        ) : (
          <p className="statusMsg" style={{ marginTop: "2rem" }}>
            No Post to display
          </p>
        ))}
    </main>
  );
}

export default Home;
