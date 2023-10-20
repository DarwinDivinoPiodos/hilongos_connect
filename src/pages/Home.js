import React from "react";
import Container from "react-bootstrap/Container";
import "../assets/styles/Home.css";
import Header from "../components/Header";
import Banner from "./components/Banner";
import TrustedClients from "./components/TrustedClients";
import Introduction from "./components/Introduction";
import Introduction2 from "./components/Introduction2";
import Benefits from "./components/Benefits";
import Footer from "../components/Footer";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
// import Email from "./components/Email";
function Home() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section className="hilongos-connect-banner">
        <Container className="home-main-container">
          {" "}
          <Banner />
        </Container>
      </section>
      <Container className="home-main-container">
        <section className="hilongos-connect-clients">
          <TrustedClients />
        </section>
      </Container>{" "}
      <section className="hilongos-connect-intro">
        <Introduction />
      </section>
      <Container className="home-main-container">
        <section className="hilongos-connect-introv2">
          <Introduction2 />
        </section>
        <section id="benefits-section" className="hilongos-connect-benefits">
          <Benefits />{" "}
        </section>
        <section className="hilongos-connect-testimonials">
          <Testimonials />{" "}
        </section>
        <section className="hilongos-connect-pricing">
          <Pricing />{" "}
        </section>
        <section className="hilongos-connect-blog">
          <Blog />
        </section>
        {/* <section className="hilongos-connect-email">
          <Email />{" "}
        </section> */}
      </Container>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
