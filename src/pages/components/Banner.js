import React from "react";
import "../../assets/styles/Banner.css";
import hilongos_banner from "../../assets/images/hilongos-app-mobile.gif";
function Banner() {
  return (
    <div className="banner-hilongos-parent">
      <section className="banner-section-one">
        <p>MOBILE APP THAT WILL HELP YOU WIN</p>
        <p>Power up your business analytics.</p>
        <p>
          Boost your ROI with detailed reports. Develop the best marketing
          strategy for your brand with data that actually matters.
        </p>
        <div className="input">
          <div className="input-container">
            <input
              type="email"
              className="input-field"
              placeholder="Enter your email address"
            />
            <div className="input-field-shadow" />
          </div>
          <div className="submit-container">
            <input type="submit" className="submit-btn" />
            <div className="submit-btn-shadow" />
          </div>
        </div>
      </section>
      <section className="banner-section-two">
        <img src={hilongos_banner} alt="hilongos-banner-mobile-development" />
      </section>
    </div>
  );
}

export default Banner;
