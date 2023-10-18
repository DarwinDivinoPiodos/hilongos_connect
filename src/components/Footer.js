import React from "react";
import Container from "react-bootstrap/esm/Container";
import hilongos_connect_phone from "../assets/images/hilongos-mobile.png";
import hilongos_connect_logo from "../assets/images/hilongos-connect-logo.PNG";

import Nav from "react-bootstrap/Nav";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../assets/styles/Footer.css";
function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-hilongos-one-background">
        <section className="overlay-background-hilongos-connect">
          fadsfsd
        </section>
        <Container className="container-hilongos-connect-footer">
          <section className="footer-hilongos-one">
            <section className="one-footer-hilongos-text">
              <p>Are you excited for Hilongos Connect?</p>
              <p className="mt-2">Get in touch with Us!</p>
              <Nav.Link
                href="#"
                className="start-sending-hilongos-connect mt-3"
              >
                Start Sending Emails Today
              </Nav.Link>
            </section>
            <section className="one-footer-hilongos-phone">
              <img
                src={hilongos_connect_phone}
                alt="phone-hilongos-app"
                className="hilongos-mobile-style"
              />
            </section>
          </section>
        </Container>
      </div>

      <Container className="container-hilongos-connect-footer">
        <section className="footer-hilongos-two">
          {" "}
          <section className="two-footer-hilongos-logo-name">
            <section classname="hilongos-connect-footer-about">
              <section>
                {" "}
                <img
                  src={hilongos_connect_logo}
                  alt="phone-hilongos-app"
                  className="hilongos_connect_logo"
                />
              </section>
              <p className="p-tag-hilongos-grow">
                Grow Your <br></br>
                <span>Analytics Experience</span>
              </p>
              <p className="text-marketing">
                Text marketing is the #1 way to increase your revenue and retain
                your customers LTV. In 5 minutes you can automate 1000’s in
                revenue!
              </p>
            </section>
            <section className="hilongos-connect-footer-about-two">
              <section className="hilongos-connect-footer-product">
                <p>Product</p>
                <a href="#" className="hover-effect">
                  Shopify
                </a>
                <a href="#" className="hover-effect">
                  Pricing
                </a>
                <a href="#" className="hover-effect">
                  Blog
                </a>
              </section>
              <section className="hilongos-connect-footer-company">
                <p>Company</p>
                <a href="#" className="hover-effect">
                  About Us
                </a>
                <a href="#" className="hover-effect">
                  Career
                </a>
              </section>
              <section className="hilongos-connect-footer-support">
                <p>Support</p>
                <a href="#" className="hover-effect">
                  Terms
                </a>
                <a href="#" className="hover-effect">
                  Privacy
                </a>
                <a href="#" className="hover-effect">
                  TCPA
                </a>
              </section>
            </section>
          </section>
          <section className="two-footer-hilongos-allrights">
            <section>
              <p>Hilongos Connect Ltd. © 2023. All Rights Reserved.</p>
              <a href="#" className="hover-effect">
                Privacy Policy
              </a>{" "}
              <a href="#" className="hover-effect">
                Data Processing Agreement
              </a>
            </section>
            <section className="social-media-icons">
              <a href="https://www.facebook.com" className="icon-link">
                <FacebookIcon className="icon-social-links" />
              </a>
              <a href="https://www.linkedin.com" className="icon-link">
                <LinkedInIcon className="icon-social-links" />
              </a>
              <a href="https://www.github.com" className="icon-link">
                <GitHubIcon className="icon-social-links" />
              </a>
            </section>
          </section>
        </section>
      </Container>
    </div>
  );
}

export default Footer;
