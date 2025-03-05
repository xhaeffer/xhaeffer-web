import PropTypes from "prop-types";

const Paragraph = ({ text }) => {
  return <p className="font-light text-center text-gray-400">{text}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
