import { Button } from "flowbite-react";
import { scroller } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { en } from "../../../constants/string";

const Hero = () => {
  const { HELLO } = en;

  const redirectToCV = () => {
    window.open(
      "https://drive.google.com/file/d/1LuyZSpIPHhYaZAG9sSYuuGfcNH4YnVkH/view?usp=sharing",
      "_blank",
    );
  };

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      smooth: true,
      duration: 500,
      offset: -44,
    });
  };

  return (
    <section id="home" className="bg-[#161B22]">
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
            <Button outline size="lg" onClick={redirectToCV}>
              My CV
            </Button>
            <Button outline size="lg" onClick={scrollToContact}>
              <div className="flex items-center">
                <p>Contact Me</p>
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
              </div>
            </Button>
          </div>
        </div>
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            y: [0, -10, 0],
            transition: { repeat: Infinity, duration: 0.3 },
          }}
          className="hidden sm:flex w-72"
          src="/img/stelle.png"
          alt="Stelle from Honkai: Star Rail"
        />
      </div>
    </section>
  );
};

export default Hero;
