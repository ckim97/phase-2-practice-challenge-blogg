import React, {useState} from "react";

function BlogPost({ blog }) {

  const [isRead, setIsRead] = useState(false);
  function toggleRead() {
    setIsRead(!isRead);
  }

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{blog.title}</h3>
          <button className="read-button" onClick={toggleRead}>{!isRead ? "Read" : "Unread"}</button>
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
