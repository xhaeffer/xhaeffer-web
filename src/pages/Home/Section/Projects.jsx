import { Link } from "react-router-dom";

import Heading from "../../../components/Paragraph/Heading";
import BigCard from "../../../components/Card/BigCard";

import projectData from "../../../constants/projectsData";
import { en } from "../../../constants/string";

const Projects = () => {
  const { PROJECTS } = en;

  return (
    <section id="projects" className="bg-[#102a43] px-10 py-8">
      <div data-aos="fade-up">
        <Heading text={PROJECTS} />
        <div className="grid place-items-center mx-auto gap-6 grid-cols-1 max-w-sm sm:grid-cols-2 sm:max-w-screen-sm md:grid-cols-3 md:max-w-screen-lg ">
          {projectData.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id}>
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
