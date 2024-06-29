import React from "react";

function BlogPostCard({ post }) {
  return (
    <div className="blog-post-card">
      <img src={post.image} alt={post.title} className="blog-post-image" />
      <div className="blog-post-content">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>
          <em>{post.date}</em>
        </p>
      </div>
    </div>
  );
}

export default BlogPostCard;
