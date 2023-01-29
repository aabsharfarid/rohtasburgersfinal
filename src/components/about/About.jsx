import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Rohtas Burgers</h4>
          <p>
            We are Rohtas Burgers. The place for most tasty burgers on the
            enitre Planet. we are here to serve burgers that are homey, fresh, healthy, family-friendly, authentic, and adventurous. Most importantly, our burger taste great !!!


          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Aabshar Farid</h3>
            </div>

            <p>
              I am Aabshar Farid, the founder of Rohtas Burgers. Affiliated to
              God Taste and Trust...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;