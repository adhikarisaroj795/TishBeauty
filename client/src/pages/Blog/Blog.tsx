import React from "react";
import "./Blog.scss";
import icons from "../../constants/icons";
import { blogDetails } from "../../constants/Constants";

import BlogCard from "../../Components/Home/BlogCard/BlogCard";

const Blog = () => {
  return (
    <div className="blog-page-wrapper p-t-30">
      <div className="blog-cards-holder">
        <section className="bigcards-container p-b-30 container">
          <div className="arrival-detail">
            <div className="arrivals-title">
              <img src={icons.flower} alt="flower" />
              <h2>Blog</h2>
              <img src={icons.flower} alt="flower" />
            </div>
            <span>See All</span>
          </div>

          <div className="blog-wrapper">
            {blogDetails.map((item, index) => (
              <BlogCard blog={item} key={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
