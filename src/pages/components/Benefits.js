import React from "react";
import "../../assets/styles/Benefits.css";
import quality from "../../assets/images/quality.png";
import webhosting from "../../assets/images/webhosting.png";
import rating from "../../assets/images/rating.png";

function Benefits() {
  return (
    <div className="container-benefits-main-container">
      <section className="mb-5">
        <p className="sub-head-hilongos">Why choose Hilongos Connect?</p>
        <p className="pricing-hilongos-subhead">
          We offer a wide range of oppurtunity for you. See <br></br> what you
          will get and your benefits.
        </p>
      </section>
      <div className="row">
        {" "}
        <div className="col unique-card">
          <img src={quality} alt="benefits-square-alt" width="150" />
          <h3 className="mt-3">Get certificate</h3>

          <p>
            We are providing a certificate to you after completing your course
            and this will help your future.
          </p>
        </div>
        <div className="col unique-card">
          <img src={webhosting} alt="benefits-square-alt" width="150" />
          <h3 className="mt-3">Get membership</h3>

          <p>
            We are providing an offer that you can join our membership club and
            you will get some extra.
          </p>
        </div>
        <div className="col unique-card">
          <img src={rating} alt="benefits-square-alt" width="150" />
          <h3 className="mt-3">Become an enthusiast</h3>

          <p>
            We are giving you to become an enthusiast after completing your
            course and you can join freely.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
