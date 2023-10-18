import React from "react";
import "../assets/styles/MediaCard.css";
import basic from "../assets/images/Basic.png";
import professional from "../assets/images/Professional.png";
import enterprise from "../assets/images/Enterprise.png";

function MediaCard() {
  return (
    <div className="mediacard-main-container">
      <div className="basic-main-card">
        <section className="first-media-section">
          <img src={basic} alt="professional-pricing-hilongos" width="100px" />
        </section>
        <section className="mt-4">
          <h2 className="section-h2-main-head-text-side">Basic</h2>
        </section>
        <section>
          <p>For Small Businesses who are just starting on their marketing.</p>
        </section>
        <section className="mt-5 mb-3">
          <h1 className="bold-price-hilongos-side">
            $32<span className="span-price">/m</span>
          </h1>
        </section>
        <section>
          <button className="button-pricing-hilongos button-pricing-hilongos-side">
            Get Started
          </button>
        </section>
        <section>
          <p className="no-credit-price-hilongos-side">
            No credit card required
          </p>
        </section>
      </div>
      <div className="professional-main-card">
        {/* <div className="professional-main-card"> */}

        <section className="first-media-section">
          <img src={basic} alt="professional-pricing-hilongos" width="100px" />
          <p className="most-popular-tag">MOST POPULAR</p>
        </section>
        <section className="mt-4">
          <h2 className="section-h2-main-head-text">Professional</h2>
        </section>
        <section className="color-white-pricing-text">
          <p>For Established Marketing Teams with bigger needs.</p>
        </section>
        <section className="color-white-pricing-text bold-price-hilongos mt-5 mb-3">
          <h1>
            $80<span className="span-m-price">/m</span>
          </h1>
        </section>
        <section className="color-white-pricing-text">
          <button className="button-pricing-hilongos">Get Started</button>
        </section>
        <section className="color-white-pricing-text">
          <p className="no-credit-price-hilongos">No credit card required</p>
        </section>
        {/* <div className="professional-main-card"> */}
      </div>
      <div className="enterprise-main-card">
        <section className="first-media-section">
          <img
            src={enterprise}
            alt="professional-pricing-hilongos"
            width="100px"
          />
        </section>
        <section className="mt-4">
          <h2 className="section-h2-main-head-text-side">Enterprise</h2>
        </section>
        <section>
          <p>For Agencies who need to manage multiple accounts.</p>
        </section>
        <section className="mt-5 mb-3">
          <h1 className="bold-price-hilongos-side">
            $128<span className="span-price">/m</span>
          </h1>
        </section>
        <section>
          <button className="button-pricing-hilongos button-pricing-hilongos-side">
            Get Started
          </button>
        </section>
        <section>
          <p className="no-credit-price-hilongos-side">
            No credit card required
          </p>
        </section>
      </div>
    </div>
  );
}

export default MediaCard;
