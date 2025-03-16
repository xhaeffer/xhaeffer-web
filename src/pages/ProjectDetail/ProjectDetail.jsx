import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

import Header from "./Section/Header";
import Overview from "./Section/Overview";
import Gallery from "./Section/Gallery";
import Tags from "./Section/Tags";
import Additional from "./Section/Additional";

import projectsData from "../../constants/projectsData";

const ProjectDetail = () => {
  const { id } = useParams();
  const [validDesc, setValidDesc] = useState("");

  const projectById = projectsData.find(
    (project) => project.id === parseInt(id),
  );

  const { title, category, cover, description, tags, gallery, additional } =
    projectById;

  useEffect(() => {
    const checkDesc = async (url) => {
      try {
        new URL(url);

        const res = await fetch(url);
        const text = await res.text();

        setValidDesc(text);
      } catch {
        setValidDesc(url);
      }
    };

    checkDesc(description);
    window.scrollTo(0, 0);
  }, [description, id]);

  return (
    <div className="bg-[#161B22] px-8 py-8 lg:px-52">
      <Link className="flex items-center" to="/">
        <HiOutlineArrowLeft className="text-white h-5 w-5 mr-2" />
        <p className="text-white">Back To Home</p>
      </Link>
      <div className="m-7 break-words">
        <Header title={title} category={category} />
        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-[70%]">
            <Overview img={cover} alt={title} description={validDesc} />
            <Gallery gallery={gallery} />
          </div>
          <div className="lg:w-[30%]">
            <Additional additional={additional} />
            <Tags tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
