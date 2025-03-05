import PropTypes from "prop-types";

const ContainerBox = ({ children }) => {
  return <div className="rounded-lg bg-white/10 p-8 mt-4">{children}</div>;
};

ContainerBox.propTypes = {
  children: PropTypes.node,
};

export default ContainerBox;
