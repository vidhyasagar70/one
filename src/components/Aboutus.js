import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="row">
        <div className="image-section">
          <img
            src="/images/aboutimg.png" // Replace with your image path
            alt="About Us"
            className="about-us-image"
          />
        </div>
        <div className="content-section">
          <h2>About us</h2>
          <p>
            Everyone has a vision of their dream home or workspace — a space
            filled with special features and lasting impressions. At United
            Buildpro Pvt Ltd, we bring those dreams to life. Even if you're
            unsure of what you want, our team of experts knows the right
            questions to ask to uncover your desires and create a space that's
            uniquely yours.
          </p>
          <p>
            Every project we undertake is a harmonious blend of our client’s
            vision and our design expertise. We focus on creating spaces that
            not only meet expectations but exceed them, offering a seamless
            integration of style and functionality.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
