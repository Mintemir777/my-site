import MobileStepper from "./DotsStepper";
import { steps } from "./Steps";
import picture from "./AboutImage/img-about.jpg";
import men from "./AboutImage/men.jpg";

export default function AboutContent() {
  return (
    <div>
      <h1 className="text-color-about serious size-about">About</h1>
      <h1 className="text-color-about-second serious size-about">
        BuildHouse®
      </h1>
      <div className="container-about">
        <img src={picture} className="picture-about" alt="About" />
        <p className="text serious p-about text-color-about underline-about">
          At <span style={{ color: "#C5A980" }}>BuildHouse®</span>, we are
          passionate about creating exceptional architectural structures that
          redefine spaces. With a focus on innovation, sustainability, and
          excellence, we strive to deliver transformative buildings that leave a
          lasting impact.
        </p>
      </div>
      <div>
        <h1 className="text-color-about-second serious size-about-choose">
          <span>Why</span> us?
        </h1>

        <MobileStepper steps={steps} />
      </div>
      <div>
        <h1 className="text-color-about-second serious size-about-choose">
          <span style={{ color: "#7590AD" }}>Our</span> Founder
        </h1>
        <div className="container-about">
          <img src={men} className="picture-about-men" />
          <p className="text serious p-about-men text-color-about underline-about">
            <p>
              On behalf of Norman Foster, founder of{" "}
              <span style={{ color: "#C5A980" }}>BuildHouse</span>, I would like
              to welcome you to our fascinating world of architecture and
              construction.
            </p>
            <p>
              At <span style={{ color: "#C5A980" }}>BuildHouse</span>, we strive
              to create impressive architectural structures that reinterpret
              spaces. With a focus on innovation, sustainability, and
              excellence, we strive to present transformational buildings that
              leave a deep mark.
            </p>
            <p>
              We are proud of our passion for design and our passion for
              excellence. Our team of talented architects, engineers, and
              designers work together to bring your vision to life. From
              conceptualization to project implementation, we pay maximum
              attention to details, ensuring harmony of every aspect of the
              building with the desired aesthetic and functional solution.
            </p>
            <p>
              At <span style={{ color: "#C5A980" }}>BuildHouse</span>, we adhere
              to the principles of sustainable development. We integrate
              eco-friendly practices and use sustainable materials to minimize
              our ecological footprint and create healthy spaces for residents.
              Whether it is a residential complex, a commercial building, or a
              public facility, we approach each project with enthusiasm and
              creativity. Our goal is to create spaces that improve people's
              lives and make a positive contribution to society.
            </p>
            <p>
              Thank you for visiting our{" "}
              <span style={{ color: "#C5A980 " }}>BuildHouse</span> website.
              Check out our portfolio and learn more about our projects. We look
              forward to turning your architectural dreams into reality.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
