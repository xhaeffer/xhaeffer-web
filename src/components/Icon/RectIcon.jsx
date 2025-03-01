import { Tooltip } from "flowbite-react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SkillItem = ({ name, icon }) => {
  return (
    <Tooltip content={name} position="top">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
        <div className="rounded-lg p-2 bg-slate-200">
          <img src={icon} alt={name} className="w-8 h-8" />
        </div>
      </motion.div>
    </Tooltip>
  );
};

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SkillItem;
