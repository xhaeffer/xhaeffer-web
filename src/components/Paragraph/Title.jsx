import PropTypes from "prop-types";

const Title = ({ text }) => {
  return (
    <h1 className="mb-8 font-semibold text-center text-[2rem] text-white">
      {text}
    </h1>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
