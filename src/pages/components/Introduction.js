import React from "react";
import "../../assets/styles/Introduction.css";
import dummy_yet from "../../assets/images/dummy_landscape.jpg";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function Introduction() {
  return (
    <div className="introduction-main-container">
      <section className="media-container">
        <section className="media-container-second-ignore">
          <section className="how-hilongos-connect-works side-media-one ">
            <img src={dummy_yet} alt="picture_yet" width="700" />
            <div className="button-container p-5 ms-5">
              <p className="p-handler-introhilongos-connect">
                Got a process to track? Need to watch stuff move through stages?
                Hilongos Connect is what you need. It's our unique take on meta.
              </p>
              <AddCircleOutlineIcon className="button-handler" />
            </div>
          </section>
          <section className="how-hilongos-connect-works youtube-media">
            <div className="how-hilongos-connect-works-div">
              <iframe
                className="video-iframe"
                src="https://www.youtube.com/embed/0lbzmZeS-BY?si=8Bw0IxAiXtiP9IrV"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <div
              className="video-cover-overlay
          "
            >
              <div className="button-text-container">
                <p>
                  Watch this quick<br></br>video to see how<br></br>Hilongos
                  Connect works
                </p>
                <button className="watch-hilongos-works-button">
                  Watch "Hilongos Connect Works"
                </button>
              </div>
            </div>
          </section>
          <section className="how-hilongos-connect-works side-media-two ">
            <img src={dummy_yet} alt="picture_yet" width="700" />
            <div className="button-container ">
              <p className="p-handler-introhilongos-connect-two">
                Instead of wondering what "70% done" really means, Hilongos
                Connect charts give you visual, intuitive sense of where
                projects really stand.
              </p>
              <AddCircleOutlineIcon className="button-handler" />
            </div>
          </section>{" "}
        </section>
      </section>
    </div>
  );
}

export default Introduction;
