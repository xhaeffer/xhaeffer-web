import PropTypes from "prop-types";

const Subtitle = ({ text }) => {
  return (
    <h2 className="font-semibold text-center text-lg text-slate-200">{text}</h2>
  );
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subtitle;
