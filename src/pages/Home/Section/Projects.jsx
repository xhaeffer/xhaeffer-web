import { Link } from "react-router-dom";

import Heading from "../../../components/Paragraph/Heading";
import BigCard from "../../../components/Card/BigCard";

import projectData from "../../../constants/projectsData";
import { en } from "../../../constants/string";

const Projects = () => {
  const { PROJECTS } = en;

  return (
    <section id="projects" className="bg-[#222831] px-10 py-8">
      <div data-aos="fade-up">
        <Heading text={PROJECTS} />
        <div className="grid mx-auto gap-6 grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] max-w-sm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          {projectData.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} data-aos="fade-up">
              <BigCard
                img={project.cover}
                title={project.title}
                type={project.type}
                category={project.category}
                summary={project.summary}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
