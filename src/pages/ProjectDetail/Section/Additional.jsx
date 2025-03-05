import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ContainerBox from "../../../components/Card/ContainerBox";

const Additional = ({ additional }) => {
  return (
    <ContainerBox data-aos="fade-up">
      <p className="text-white mb-2">More Info:</p>
      <div className="flex flex-wrap gap-2">
        {additional.map((item, index) => (
          <Link key={index} to={item.link} target="_blank">
            <Button title={item.title} size="sm" disabled={item.disabled}>
              {item.title}
            </Button>
          </Link>
        ))}
      </div>
    </ContainerBox>
  );
};

Additional.propTypes = {
  additional: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
};

export default Additional;
