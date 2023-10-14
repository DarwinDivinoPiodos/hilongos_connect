import React from "react";
import MediaCard from "../../components/MediaCard";
import "../../assets/styles/Pricing.css";

function Pricing() {
  return (
    <div>
      <section>
        <p>Pricing that’s just right</p>
      </section>
      <section>
        <p>
          Get a 7 day free trial. Then compare and choose a plan that's right
          for you.
        </p>
      </section>
      <section>
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </section>
      <section>
        <p>Compare All Plans</p>
      </section>
    </div>
  );
}

export default Pricing;
