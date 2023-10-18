import React from "react";
import "../../assets/styles/Blog.css";
import pexel1 from "../../assets/images/pexel_1.jpg";
import pexel2 from "../../assets/images/pexel_2.jpg";

function Blog() {
  return (
    <div className="blog-main-container">
      <div className="grid-container">
        <div className="grid-item-wide padding-right">
          <section className="text-and-image-container">
            <section className="text-main-container">
              <p className="blog-title-text-style blog-title-text-style-blue">
                HILONGOS CONNECT
              </p>

              <p className="blog-name-title">
                The Best of Hilongos Connect,<br></br>October 2023
              </p>
              <p className="blog-title-text-style">
                By{" "}
                <span className="blog-title-text-style-blue">
                  Darwin Piodos
                </span>
              </p>
            </section>
            <section>
              <img src={pexel1} alt="pexel_one" width="500px" />
            </section>
          </section>
        </div>
        <div className="grid-item left-wide-space border-left">
          <section className="text-and-image-container-small">
            <section className="me-4">
              <img src={pexel2} alt="pexel_one" width="350px" />
            </section>
            <section className="text-main-container-small mt-3">
              <p className="blog-title-text-style blog-title-text-style-blue">
                RIGHT SMALL
              </p>

              <p className="blog-name-title-small">
                Most Controversial Ad Campaigns
              </p>
              <p className="blog-title-text-style">
                By{" "}
                <span className="blog-title-text-style-blue">
                  Darwin Piodos
                </span>
              </p>
            </section>
          </section>{" "}
        </div>
        <div className="grid-item right-wide-space border-right">
          <section className="text-and-image-container-small">
            <section className="me-4">
              <img src={pexel2} alt="pexel_one" width="350px" />
            </section>
            <section className="text-main-container-small mt-3">
              <p className="blog-title-text-style blog-title-text-style-blue">
                LEFT SMALL
              </p>

              <p className="blog-name-title-small">
                5 Marketing Tools Every Designer Needs
              </p>
              <p className="blog-title-text-style">
                By{" "}
                <span className="blog-title-text-style-blue">
                  Darwin Piodos
                </span>
              </p>
            </section>
          </section>{" "}
        </div>
        <div className="grid-item-wide padding-left">
          <section className="text-and-image-container">
            <section className="me-4">
              <img src={pexel2} alt="pexel_one" width="500px" />
            </section>
            <section className="text-main-container">
              <p className="blog-title-text-style blog-title-text-style-blue">
                HILONGOS CONNECT
              </p>

              <p className="blog-name-title">
                20 Best New Websites,<br></br> October 2023
              </p>
              <p className="blog-title-text-style">
                By{" "}
                <span className="blog-title-text-style-blue">
                  Darwin Piodos
                </span>
              </p>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Blog;
