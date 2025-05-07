import React from "react";
import "./BlogCard.scss";

const BlogCard = ({ blog }) => {
  const { image, title, description, tag } = blog;
  return (
    <div className="blog-card">
      <div className="blog-image-container">
        <img src={image} alt={title} />
      </div>

      <div className="blog-details">
        <div className="blog-tag">
          {tag.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <h3 className="blog-title">{title}</h3>
        <p>{description}</p>
        <button className="btn">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
