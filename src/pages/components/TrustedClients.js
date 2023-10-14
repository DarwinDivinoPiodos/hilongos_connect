import React from "react";
import "../../assets/styles/TrustedClients.css";
import instagram from "../../assets/images/1_Instagram.PNG";
import casper from "../../assets/images/2_Casper.PNG";
import netflix from "../../assets/images/3_Netflix.png";
import logitech from "../../assets/images/4_Logitech.png";
import facebook from "../../assets/images/5_Facebook.png";
import acer from "../../assets/images/6_Acer.png";

function TrustedClients() {
  return (
    <div className="hilongos-trusted-main-container">
      <section className="trusted-p-head">
        <p>
          Trusted by thousands of <br></br>successful startups worldwide
        </p>
      </section>
      <section className="hilongos-clientslogo-holder">
        <img src={instagram} alt="hilongos-instagram-cnnect" height="45px" />
        <img src={casper} alt="hilongos-casper-connect" height="45px" />
        <img src={netflix} alt="hilongos-netflix-connect" height="45px" />
        <img src={logitech} alt="hilongos-logitech-connect" height="45px" />
        <img src={facebook} alt="hilongos-facebook-connect" height="45px" />
        <img src={acer} alt="hilongos-acer-connect" height="45px" />
      </section>
    </div>
  );
}

export default TrustedClients;
