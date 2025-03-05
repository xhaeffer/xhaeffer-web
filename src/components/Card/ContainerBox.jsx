import PropTypes from "prop-types";

const ContainerBox = ({ children, ...props }) => {
  return (
    <div className="rounded-lg bg-white/10 p-8 mt-4" {...props}>
      {children}
    </div>
  );
};

ContainerBox.propTypes = {
  children: PropTypes.node,
  props: PropTypes.object,
};

export default ContainerBox;
