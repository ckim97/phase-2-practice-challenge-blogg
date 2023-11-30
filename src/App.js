import React, {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";

function App() {

  const [blogs, setBlogs] = useState([]);
  const [formShown, setFormShown] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then(r => r.json())
      .then(data => setBlogs(data))
  }, []);

  function renderForm() {
    setFormShown(!formShown);
  }

  function renderNewBlog(newBlog) {
    const newBlogs = [...blogs, newBlog];
    setBlogs(newBlogs);
  }

  const searchedBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()) || blog.author.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch}></Header>

      <button className="show-form" onClick={renderForm}>Show Form</button>
      {formShown ? <NewPostForm renderNewBlog={renderNewBlog}></NewPostForm> : null}

      <BlogPostContainer blogs={searchedBlogs}></BlogPostContainer>
    </div>
  );
}

export default App;
