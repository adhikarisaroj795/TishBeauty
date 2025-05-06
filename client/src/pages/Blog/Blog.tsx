import React from "react";
import "./Blog.scss";
import icons from "../../constants/icons";
import { BigDetailCardDetails } from "../../constants/Constants";
import DetailsCard from "../../Components/Home/DetailsCard/DetailsCard";

const Blog = () => {
  return (
    <div className="blog-page-wrapper">
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
          {BigDetailCardDetails.map((item, index) => (
            <DetailsCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              className={index % 2 !== 0 ? "row-reverse" : ""}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Blog;
