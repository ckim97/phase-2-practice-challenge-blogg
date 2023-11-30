import React, {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";

function App() {

  const [blogs, setBlogs] = useState([]);
  const [formShown, setFormShown] = useState(true);

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

  return (
    <div className="App">
      <Header></Header>

      <button className="show-form" onClick={renderForm}>Show Form</button>
      {formShown ? <NewPostForm renderNewBlog={renderNewBlog}></NewPostForm> : null}

      <BlogPostContainer blogs={blogs}></BlogPostContainer>
    </div>
  );
}

export default App;
