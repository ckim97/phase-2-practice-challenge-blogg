import React from "react";
import BlogPost from "./BlogPost";

function BlogPostContainer({blogs}) {

  const renderBlogs = blogs.map((blog) => <BlogPost key={blog.id} blog={blog}/>)

  return (
    <div className="blog-container">
      {renderBlogs}
    </div>
  );
}

export default BlogPostContainer;
