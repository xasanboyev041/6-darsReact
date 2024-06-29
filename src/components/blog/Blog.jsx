import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "React.js haqida bilishingiz kerak bo'lganlar",
    content:
      "React.js bu front-end kutubxona bo'lib, u yordamida zamonaviy, interaktiv veb-saytlarni yaratishingiz mumkin. Bu maqolada siz React.js ning asosiy konseptlari haqida bilib olasiz.",
    date: "2024-06-01",
    image: "https://via.placeholder.com/300/0000FF/808080?text=React.js",
  },
  {
    id: 2,
    title: "JavaScript ES6 Yangi Xususiyatlari",
    content:
      "JavaScript ES6 yangi va kuchli xususiyatlar bilan birga keladi. Bu maqolada siz ES6 dagi arrow functions, classes, template literals va destructuring haqida bilib olasiz.",
    date: "2024-06-10",
    image: "https://via.placeholder.com/300/FF0000/FFFFFF?text=JavaScript+ES6",
  },
  {
    id: 3,
    title: "CSS Grid va Flexbox haqida",
    content:
      "CSS Grid va Flexbox bu layout yaratish uchun kuchli vositalar. Bu maqolada siz ularning farqlari va qachon qaysi birini ishlatish haqida bilib olasiz.",
    date: "2024-06-20",
    image:
      "https://via.placeholder.com/300/FFFF00/000000?text=CSS+Grid+vs+Flexbox",
  },
];

function Blog() {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-posts-grid">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="blog-post-link"
          >
            <BlogPostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
