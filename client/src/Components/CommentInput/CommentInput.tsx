import React from "react";
import "./CommentInput.scss";

const CommentInput = () => {
  return (
    <div className="comment-review-wrapper">
      <div className="comment-review-form">
        <label htmlFor="">Review title</label>
        <input type="text" />
      </div>
      <div className="comment-review-form">
        <label htmlFor="">What do you think about this product?</label>
        <textarea name="" id=""></textarea>
      </div>

      <button className="btn">Submit</button>
    </div>
  );
};

export default CommentInput;
