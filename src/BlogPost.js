import React, {useState, useEffect} from "react";

function BlogPost({ blog }) {

  const [read, setIsRead] = useState(blog.isRead);

  function toggleRead() {
    setIsRead(!read);
  }
    const newRead = {
      isRead : read
    };
  
  useEffect(() => {
    fetch(`http://localhost:4000/blogs/${blog.id}`, {
      method : "PATCH",
      headers : {
        "content-type" : "application/json"
      },
      body: JSON.stringify(newRead) 
    })
    }, [read])
    
    
    
    
  
  

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{blog.title}</h3>
          <button className="read-button" onClick={toggleRead}>{!read ? "Read" : "Unread"}</button>
        </div>
        <p>Author {blog.author}</p>
      </div>

      <p>
        {blog.article}
      </p>
    </div>
  );
}

export default BlogPost;
