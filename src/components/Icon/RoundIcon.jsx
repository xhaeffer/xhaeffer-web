import { Tooltip } from "flowbite-react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const RoundIcon = ({ name, icon }) => {
  return (
    <Tooltip content={name} position="top">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
        <div className="flex justify-center items-center rounded-full border h-9 w-9 text-white text-[20px]">
          {icon}
        </div>
      </motion.div>
    </Tooltip>
  );
};

RoundIcon.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default RoundIcon;
