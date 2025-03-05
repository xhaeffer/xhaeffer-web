import PropTypes from "prop-types";

const Subheading = ({ text }) => {
  return (
    <h2 className="font-semibold text-center text-lg text-slate-200">{text}</h2>
  );
};

Subheading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subheading;
