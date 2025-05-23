import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
import NewPost from "./NewPost";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
// import { format } from "date-fns";
// import api from "./api/posts";
// import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";
// import { DataProvider } from "./Context/DataContext";
import { useStoreActions } from "easy-peasy";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch(
    `http://localhost:3500/posts`
  );

  useEffect(() => {
    setPosts(data);
    console.log("Updated data yes:", data);
  }, [data, setPosts]);

  // const [posts, setPosts] = useState([]);

  // const [search, setSearch] = useState("");
  // const [searchResult, setSearchResults] = useState([]);
  // const [postTitle, setPostTitle] = useState("");
  // const [postBody, setPostBody] = useState("");
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");
  // const navigate = useNavigate(); // for rerouting
  // const { width } = useWindowSize();

  // const { data, fetchError, isLoading } = useAxiosFetch(
  //   `http://localhost:3500/posts`
  // );

  // useEffect(() => {
  //   setPosts(data);
  //   console.log("Updated data yes:", data);
  // }, [data]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get("/posts");
  //       console.log(response);
  //       setPosts(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         // Not in the 200 response range.
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.Headers);
  //       } else {
  //         console.log(`Error:${err.message}`);
  //       }
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  // useEffect(() => {
  //   const filteredResults = posts.filter(
  //     (post) =>
  //       post.body.toLowerCase().includes(search.toLowerCase()) ||
  //       post.title.toLowerCase().includes(search.toLowerCase())
  //   );

  //   setSearchResults(filteredResults.reverse());
  // }, [posts, search]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
  //   const newPost = { id, title: postTitle, datetime, body: postBody };
  //   try {
  //     const response = await api.post("/posts", newPost);
  //     const allPost = [...posts, response.data];
  //     setPosts(allPost);
  //     setPostTitle("");
  //     setPostBody("");
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
  //   const updatedPost = { id, title: editTitle, datetime, body: editBody };
  //   try {
  //     const response = await api.put(`/post/${id}`, updatedPost);
  //     setPosts(
  //       posts.map((post) => (post.id === id ? { ...response.data } : post))
  //     );
  //     setEditTitle("");
  //     setEditBody("");
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/posts/${id}`);
  //     const postsList = posts.filter((post) => post.id !== id);
  //     setPosts(postsList);
  //     navigate(`/`);
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  return (
    <div className="App">
      <Header title="React JS Blog" />
      {/* <DataProvider> */}
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home isLoading={isLoading} fetchError={fetchError} />}
        />
        <Route path="/post" element={<NewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Missing />} />
      </Routes>
      {/* </DataProvider> */}
      <Footer />
    </div>
  );
}

export default App;
