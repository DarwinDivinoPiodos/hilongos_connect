import React from "react";
import Container from "react-bootstrap/Container";
import "../assets/styles/Home.css";
import Header from "../components/Header";
import Banner from "./components/Banner";
import TrustedClients from "./components/TrustedClients";
import Introduction from "./components/Introduction";
import Benefits from "./components/Benefits";
import Footer from "../components/Footer";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Email from "./components/Email";
function Home() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <Container className="home-main-container">
        {" "}
        <section className="hilongos-connect-banner">
          <Banner />
        </section>
        <section className="hilongos-connect-clients">
          <TrustedClients />
        </section>
        <section className="hilongos-connect-intro">
          <Introduction />
        </section>
        <section className="hilongos-connect-benefits">
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
        <section className="hilongos-connect-email">
          <Email />{" "}
        </section>
      </Container>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;