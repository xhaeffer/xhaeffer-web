import PropTypes from "prop-types";

const Header = ({ title, category }) => {
  return (
    <div className="space-y-2" data-aos="fade-up">
      <h1 className="text-white text-3xl font-semibold mb-2">{title}</h1>
      <p className="text-white/50">{category}</p>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Header;
