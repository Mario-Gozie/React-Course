import React from "react";
import Feed from "./Feed";
// import { useContext } from "react";
// import DataContext from "./Context/DataContext";
import { useStoreState } from "easy-peasy";

function Home({ isLoading, fetchError }) {
  // const { searchResult, fetchError, isLoading } = useContext(DataContext);

  const { searchResults } = useStoreState((state) => state.searchResults);

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
        (searchResults.length ? (
          <Feed posts={searchResults}></Feed>
        ) : (
          <p className="statusMsg" style={{ marginTop: "2rem" }}>
            No Post to display
          </p>
        ))}
    </main>
  );
}

export default Home;
