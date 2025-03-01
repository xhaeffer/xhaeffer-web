import Title from "../../../components/Paragraph/Title";
import Subtitle from "../../../components/Paragraph/Subtitle";
import RectIcon from "../../../components/Icon/RectIcon";

import skillIcons from "../../../constants/skillsData";
import { en } from "../../../constants/string";

const Skills = () => {
  const { SKILLS } = en;

  return (
    <section id="skills" className="bg-[#0f172a] px-10 py-8">
      <Title title={SKILLS} />
      <div className="mx-auto max-w-md">
        {skillIcons.map((skill, index) => (
          <div key={index} className="mb-6">
            <Subtitle text={skill.category} />
            <div className="flex flex-wrap gap-4 mt-4 justify-center">
              {skill.icons.map((icon) => (
                <RectIcon key={icon.name} name={icon.name} icon={icon.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
