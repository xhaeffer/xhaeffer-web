import PropTypes from "prop-types";

import ContainerBox from "../../../components/Card/ContainerBox";
import Markdown from "../../../components/Paragraph/Markdown";

const Overview = ({ img, alt, description }) => {
  return (
    <ContainerBox data-aos="fade-up">
      <img src={img} alt={alt} className="mb-8 object-cover rounded-lg" />
      <p className="text-white mb-2">Description:</p>
      <Markdown text={description} />
    </ContainerBox>
  );
};

Overview.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Overview;
