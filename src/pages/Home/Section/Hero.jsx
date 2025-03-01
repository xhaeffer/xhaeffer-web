import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

import { en } from "../../../constants/string";

const Hero = () => {
  const { HELLO } = en;
  return (
    <section id="home" className="bg-[#0f172a]">
      <div className="grid max-w-screen-xl px-16 py-28 mx-auto lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h2 className="max-w-2xl mb-4 text-2xl font- tracking-tight leading-[1.15] md:text-3xl xl:text-4xl text-white">
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
              to={"/files/CV_Subhan.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
            >
              {" "}
              My CV
            </Link>

            <ScrollLink
              to={"contact"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-32}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
            >
              {" "}
              Contact Me{" "}
              <img
                className="w-5 h-5 ml-2 -mr-1"
                src="/icons/next.svg"
                alt="Contact Me"
              />
            </ScrollLink>
          </div>
        </div>

        {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>                 */}
      </div>
    </section>
  );
};

export default Hero;
