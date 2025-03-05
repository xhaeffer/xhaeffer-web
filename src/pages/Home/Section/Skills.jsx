import Heading from "../../../components/Paragraph/Heading";
import Subheading from "../../../components/Paragraph/Subheading";
import RectIcon from "../../../components/Icon/RectIcon";

import skillData from "../../../constants/skillsData";
import { en } from "../../../constants/string";

const Skills = () => {
  const { SKILLS } = en;

  return (
    <section id="skills" className="bg-[#0f172a] px-10 py-8">
      <div data-aos="fade-up">
        <Heading text={SKILLS} />
        <div className="mx-auto max-w-md">
          {skillData.map((skill, index) => (
            <div key={index} className="mb-6">
              <Subheading text={skill.category} />
              <div className="flex flex-wrap gap-4 mt-4 justify-center">
                {skill.icons.map((icon) => (
                  <RectIcon key={icon.name} name={icon.name} icon={icon.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
