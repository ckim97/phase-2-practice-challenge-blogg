import React, {useState} from "react";

function NewPostForm({renderNewBlog}) {

  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newArticle, setNewArticle] = useState("");

  function createNewBlog() {
    const newBlogPost = {
      author : newAuthor,
      title : newTitle,
      article : newArticle,
      isRead : false
    }
    console.log(newBlogPost);

    fetch("http://localhost:4000/blogs", {
      method : "POST",
      headers : {
        "Content-Type" : "Application/json"
      },
      body: JSON.stringify(newBlogPost)
    })
      .then(r => r.json())
      .then((newObject) => renderNewBlog(newObject))
  }

  return (
    <div className="form">
      <form onSubmit={createNewBlog}>
        <input type="text" placeholder="Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>
        <input type="text" placeholder="Author" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)}></input>
        <textarea rows="10" cols="60" placeholder="Write your post" value={newArticle}
          onChange={(e) => setNewArticle(e.target.value)}></textarea>
        <input
          className="submit-button"
          style={{ paddingBottom: "25px" }}
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default NewPostForm;
