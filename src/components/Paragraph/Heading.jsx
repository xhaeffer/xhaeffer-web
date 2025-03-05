import PropTypes from "prop-types";

const Heading = ({ text, level = 1 }) => {
  const Tag = `h${level}`;

  return (
    <Tag className="mb-8 font-semibold text-center text-[2rem] text-white">
      {text}
    </Tag>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
