import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import { en } from "../../../constants/string";

import Heading from "../../../components/Paragraph/Heading";
import RoundIcon from "../../../components/Icon/RoundIcon";

const AboutMe = () => {
  const { ABOUT_ME, ABOUT_ME_DESC } = en;

  const socialMedia = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/subhansp",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://www.github.com/xhaeffer",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/xhaeffer/",
    },
  ];

  return (
    <section id="about_me" className="bg-[#222831] px-10 py-8">
      <div data-aos="fade-up" className="mx-auto max-w-md">
        <Heading text={ABOUT_ME} />
        <p className="text-white/80 text-justify">{ABOUT_ME_DESC}</p>
        <div className="flex justify-center mt-10 gap-2">
          {socialMedia.map((social, index) => (
            <Link key={index} to={social.link} target="_blank">
              <RoundIcon name={social.name} icon={social.icon} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
