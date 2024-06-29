import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../data/blogPosts";

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Maqola topilmadi</div>;
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} className="blog-post-image" />
      <p>{post.content}</p>
      <p>
        <em>{post.date}</em>
      </p>
    </div>
  );
}

export default BlogPost;
