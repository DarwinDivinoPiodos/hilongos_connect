import React from "react";
import "../../assets/styles/Testimonials.css";
import testimonial from "../../assets/images/testimonial.jpg";
function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      username: "@johndoe",
      feedback:
        "Connects to Shopify and sends out abandoned cart texts in under 5 minutes How can something so powerful be so simple? This is extraordinary design and engineering.",
      profileImg: testimonial,
    },
    {
      name: "Jane Smith",
      username: "@janesmith",
      feedback:
        "I was apart of the Alpha launch... just insane. Managing all my brands has never been simpler. @HilongosConnect is hands down my favorite platform 🤤",
      profileImg: testimonial,
    },
    {
      name: "Bob Johnson",
      username: "@bobjohnson",
      feedback:
        "After following the @HilongosConnect journey for a couple months I got the chance to experience it.OMG it is truly revolutionary. Just...try it! That’s all 🤘🏻",
      profileImg: testimonial,
    },
    {
      name: "Alice Brown",
      username: "@alicebrown",
      feedback:
        "Blue - The Tesla of eCommerce. A 1-hour call with George nearly tripled my brand's monthly revenue, now imagine what his software will do. The future is here. #Blue ☀️",
      profileImg: testimonial,
    },
    {
      name: "David White",
      username: "@davidwhite",
      feedback:
        "After using @HilongosConnect you can’t go back. It completed changed the game forever. Text marketing is the future. 🔥🔥",
      profileImg: testimonial,
    },
    {
      name: "Ella Green",
      username: "@ellagreen",
      feedback:
        "@HilongosConnect transformed by e-commerce business. Text marketing is necessary now in order to capture LTV and abandoned carts! ⚡️",
      profileImg: testimonial,
    },
    {
      name: "Chris Black",
      username: "@chrisblack",
      feedback:
        "HilongosConnect is the end result of 1 year and 30+ contributers. Text Message Marketing is here to stay. HilongosConnect is the future 💎",
      profileImg: testimonial,
    },
    {
      name: "Sophia Gray",
      username: "@sophiagray",
      feedback:
        "Insane. @HilongosConnect takes your business to a whole new level. Store revenue increase by 15% within 😱",
      profileImg: testimonial,
    },
  ];

  return (
    <div>
      <section className="mb-5">
        <p className="testimonials-main-small">Testimonials</p>
        <p className="sub-head-hilongos-testimonials">What Clients Say</p>
        <p className="pricing-hilongos-subhead-testimonials">
          We place huge value on strong relationships and have seen the benefit
          they<br></br> bring to our business. Customer feedback is vital in
          helping us to get it right.
        </p>
      </section>

      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <section className="section-first-testimonial-first-row">
              {" "}
              <section>
                {" "}
                <img src={testimonial.profileImg} alt={testimonial.name} />
              </section>
              <section className="ms-3">
                {" "}
                <h3 className="font-weight-name-h3">{testimonial.name}</h3>
                <p className="testimonial-p-font-size">
                  {testimonial.username}
                </p>
              </section>
            </section>
            <section className="section-first-testimonial">
              {" "}
              <p className="feedback-font-color">{testimonial.feedback}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
