import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

import { en } from "../../../constants/string";

const Hero = () => {
  const { HELLO } = en;
  return (
    <section id="home" className="bg-[#0f172a]">
      <div className="flex flex-row justify-between max-w-screen-lg px-10 py-28 mx-auto">
        <div className="place-self-center" data-aos="zoom-in">
          <h2 className="max-w-2xl mb-4 text-2xl tracking-tight leading-[1.15] md:text-3xl xl:text-4xl text-white">
            {HELLO}
          </h2>
          <div className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-2xl text-gray-400">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Front-End Developer",
                1000,
                "Back-End Developer",
                1000,
                "Android Developer",
                500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/files/CV_Subhan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-gray-700 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-800"
            >
              My CV
            </Link>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-32}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-gray-700 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-800"
            >
              Contact Me
              <img
                className="w-5 h-5 ml-2 -mr-1"
                src="/icons/next.svg"
                alt="Arrow icon for Contact Me"
              />
            </ScrollLink>
          </div>
        </div>
        <div className="hidden sm:flex" data-aos="zoom-in">
          <img
            className="w-72"
            src="https://media.discordapp.net/attachments/1344970245374349342/1346034844714668105/trailblazer_and_stelle_honkai_and_1_more__4b8ddbc0daabe10793145808f95e8d2b.png?ex=67c6b823&is=67c566a3&hm=fcee93617a7cf24a9337ce55d5224465364cd4bf03a99d9866a734463e55df6d&=&format=webp&quality=lossless&width=638&height=638"
            alt="Stelle from Honkai: Star Rail"
          />
        </div>
      </div>
    </section>

  );
};

export default Hero;
