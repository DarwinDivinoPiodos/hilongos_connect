import React from "react";
import MediaCard from "../../components/MediaCard";
import "../../assets/styles/Pricing.css";

function Pricing() {
  return (
    <div className="">
      <section className="">
        <p className="sub-head-hilongos">Pricing that's just right</p>
        <p className="pricing-hilongos-subhead">
          Get a 7 day free trial. Then compare and choose<br></br> a plan that's
          right for you.
        </p>
      </section>
      <section className="Media-Card-Pricing">
        <MediaCard />
      </section>
    </div>
  );
}

export default Pricing;
