import React from "react";
import "./Subscribe.scss";

function Subscribe() {
  return (
    <div class="subscribe">
      <h3 className="subTitle">Lets keep in touch</h3>
      <h4 className="subText ">Join our list and get all latest loan news</h4>
      <div class="input-group">
        <div class="form-group my-form-group">
          <input
            type="text"
            placeholder="Enter Your Email"
            class="form-control input-field"
          />
          <button class="sub-btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
