import { Link, useParams } from "react-router-dom";
import { Button } from "flowbite-react";

import Title from "../../components/Paragraph/Title";
import projectsData from "../../constants/projectsData";

const ProjectDetail = () => {
  const { id } = useParams();
  const projectById = projectsData.find(
    (project) => project.id === parseInt(id),
  );

  const { title, category, cover, description, tags, gallery, additional } =
    projectById;

  return (
    <div className="bg-[#102a43] px-64 py-8">
      <Title title="Project Detail" />

      <Link className="flex" to="/">
        <img className="w-6 h-6" src="/icons/back.svg" alt="Project" />
        <p className="text-white">Back To Projects</p>
      </Link>

      <div className="ml-6 mt-6">
        <h1 className="text-white text-3xl font-semibold">{title}</h1>
        <p className="text-white/50 mt-2">{category}</p>

        <div className="flex flex-col md:flex-row md:gap-3">
          <div className="flex flex-col max-w-[40rem]">
            <div className="rounded-lg bg-white/10 p-8 mt-4">
              <img
                src={cover || "https://placehold.co/600x400"}
                alt={title}
                className="mb-8 w-full object-cover rounded-lg"
              />
              <p className="text-white/50">Description:</p>
              <p className="text-white mt-2">{description}</p>
            </div>

            <div className="rounded-lg bg-white/10 p-8 mt-4">
              <p className="text-white/50">Tags:</p>
              <div className="flex flex-wrap mt-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/20 text-white px-2 py-1 rounded-lg mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-white/10 p-8 mt-4">
              <p className="text-white/50">Gallery:</p>
              <div className="flex mt-2">
                {gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={title}
                    className="w-24 h-24 object-cover rounded-lg mr-2"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="rounded-lg bg-white/10 p-8 mt-4">
              <p className="text-white/50">More Info:</p>
              <p className="text-white mt-2">
                Provide details about the project, such as a preview or code.
              </p>
              <div className="flex mt-2">
                {additional.map((item, index) => (
                  <Button
                    key={index}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg mt-4 ml-4"
                  >
                    <Link to={item.link}>{item.title}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-white/10 p-8 mt-4">
              <p className="text-white/50">Links:</p>
              <div className="flex mt-2">
                <a
                  href="#"
                  className="text-white/50 hover:text-white hover:underline"
                >
                  Live
                </a>
                <a
                  href="#"
                  className="text-white/50 hover:text-white hover:underline ml-4"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
