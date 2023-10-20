import React, { useEffect } from "react";
import "../../assets/styles/TrustedClients.css";
import instagram from "../../assets/images/1_Instagram.PNG";
import casper from "../../assets/images/2_Casper.PNG";
import netflix from "../../assets/images/3_Netflix.png";
import logitech from "../../assets/images/4_Logitech.png";
import facebook from "../../assets/images/5_Facebook.png";
import acer from "../../assets/images/6_Acer.png";

function TrustedClients() {
  useEffect(() => {
    // Function to toggle marquee direction
    const toggleMarqueeDirection = () => {
      const marquee = document.getElementById("marquee");
      marquee.setAttribute(
        "direction",
        marquee.getAttribute("direction") === "left" ? "right" : "left"
      );
    };

    // Toggle the marquee direction every 3 seconds (adjust as needed)
    setInterval(toggleMarqueeDirection, 3000);
  }, []);

  return (
    <div className="hilongos-trusted-main-container">
      <section className="trusted-p-head">
        <p>
          Trusted by thousands of <br></br>successful startups worldwide
        </p>
      </section>
      <section className="hilongos-clientslogo-holder">
        <marquee
          id="marquee"
          behavior="scroll"
          direction="left"
          scrollamount="20"
        >
          <img src={instagram} alt="hilongos-instagram-cnnect" height="45px" />
          <img src={casper} alt="hilongos-casper-connect" height="45px" />
          <img src={netflix} alt="hilongos-netflix-connect" height="45px" />
          <img src={logitech} alt="hilongos-logitech-connect" height="45px" />
          <img src={facebook} alt="hilongos-facebook-connect" height="45px" />
          <img src={acer} alt="hilongos-acer-connect" height="45px" />
          {/* Repeat images as needed to make the marquee continuous */}
        </marquee>
      </section>
    </div>
  );
}

export default TrustedClients;
