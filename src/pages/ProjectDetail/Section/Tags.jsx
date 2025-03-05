import PropTypes from "prop-types";

import ContainerBox from "../../../components/Card/ContainerBox";

const Tags = ({ tags }) => {
  return (
    <ContainerBox data-aos="fade-up">
      <p className="text-white mb-2">Tags:</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-white/20 text-white/70 px-2 py-1 rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </ContainerBox>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Tags;
