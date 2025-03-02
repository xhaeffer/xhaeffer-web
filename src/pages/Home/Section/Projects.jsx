import { Link } from "react-router-dom";

import Title from "../../../components/Paragraph/Title";
import BigCard from "../../../components/Card/BigCard";

import projectData from "../../../constants/projectsData";
import { en } from "../../../constants/string";

const Projects = () => {
  const { PROJECTS } = en;

  return (
    <section id="projects" className="bg-[#102a43] py-8">
      <div data-aos="fade-up">
        <Title text={PROJECTS} />
        <div className="px-12 mx-auto max-w-screen-lg grid place-items-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 grid-auto-rows-fr">
          {projectData.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id}>
              <BigCard
                img={project.cover}
                title={project.title}
                category={project.category}
                body={project.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
