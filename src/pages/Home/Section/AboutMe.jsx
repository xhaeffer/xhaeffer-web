import { Link } from "react-router-dom";

import instagram from "/icons/instagram.svg";
import linkedin from "/icons/linkedin.svg";
import github from "/icons/github-white.svg";

import { en } from "../../../constants/string";

import Heading from "../../../components/Paragraph/Heading";
import RoundIcon from "../../../components/Icon/RoundIcon";

const AboutMe = () => {
  const { ABOUT_ME, ABOUT_ME_DESC } = en;

  return (
    <section id="about_me" className="bg-[#102a43] px-10 py-8">
      <div data-aos="fade-up" className="mx-auto max-w-md">
        <Heading text={ABOUT_ME} />
        <p className="text-white/80 text-justify">{ABOUT_ME_DESC}</p>
        <div className="flex justify-center mt-10 gap-2">
          <Link to="https://www.linkedin.com/in/subhansp" target="_blank">
            <RoundIcon name="Linkedin" icon={linkedin} />
          </Link>
          <Link to="https://www.github.com/xhaeffer" target="_blank">
            <RoundIcon name="GitHub" icon={github} />
          </Link>
          <Link to="https://www.instagram.com/xhaeffer/" target="_blank">
            <RoundIcon name="Instagram" icon={instagram} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
