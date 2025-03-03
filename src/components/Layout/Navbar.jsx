"use client";
import { useState } from "react";
import { Navbar, ToggleSwitch } from "flowbite-react";
import { Link } from "react-scroll";

const NavigationBar = () => {
  const navigation = [
    { to: "home", label: "Home" },
    { to: "about_me", label: "About" },
    { to: "skills", label: "Skill" },
    { to: "projects", label: "Project" },
    { to: "contact", label: "Contact" },
  ];

  const [switchLang, setSwitchLang] = useState(true);

  return (
    <Navbar fluid className="px-4 py-4 md:px-6 bg-gray-800 fixed w-full z-50">
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Subhan S
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <div className="flex items-center mx-2">
          <ToggleSwitch checked={switchLang} onChange={setSwitchLang} />
          <label className="text-white text-sm ml-2">
            {switchLang ? "ENG" : "IND"}
          </label>
        </div>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        {navigation.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            spy
            smooth
            duration={500}
            offset={-44}
            activeClass="text-[#ffffff] text-bold"
            className="hover:cursor-pointer text-[#9ca3af] hover:text-cyan-700"
          >
            {item.label}
          </Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
